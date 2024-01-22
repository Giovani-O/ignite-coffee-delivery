import { MouseEvent, useContext } from 'react'
import { Address, PaymentType, StoreContext } from '../../contexts/StoreContext'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  AddressWrapper,
  CheckoutWrapper,
  OrderDetailsWrapper,
  PaymentMethodButton,
  PaymentMethodButtonsContainer,
  PaymentMethodWrapper,
  TotalPrices,
} from './styles'
import { AddressForm } from './components/AddressForm'
import CoffeesJson from '../../assets/coffees/CoffeesData.json'
import { CoffeeInfo } from './components/CoffeeInfo'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function Checkout() {
  const { storeState, selectPaymentMethod, addAddressInfo } =
    useContext(StoreContext)

  // Regras de validação
  const addressFormValidationSchema = zod.object({
    zipCode: zod.string().min(1),
    street: zod.string().min(1),
    number: zod.string().min(1),
    complement: zod.string().optional(),
    neighbourhood: zod.string().min(1),
    city: zod.string().min(1),
    state: zod.string().min(1),
  })

  // Obtenção de tipo
  type AddressFormData = zod.infer<typeof addressFormValidationSchema>

  // Desconstrução do retorno de useForm
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighbourhood: '',
      city: '',
      state: '',
    },
  })

  // Obtenção dos métodos
  const { handleSubmit } = addressForm

  function getItemsValue() {
    let total = 0

    const values = storeState.shoppingCart.map((item) => {
      const coffee = CoffeesJson.CoffeesData.find(
        (coffee) => coffee.id === item.coffeeId,
      )

      return (coffee?.price || 0) * item.amount
    })

    total = values.reduce((sum, currentValue) => sum + currentValue, 0)

    return total
  }

  function handleSelectPaymentMethod(
    event: MouseEvent<HTMLButtonElement>,
    paymentMethod: number | undefined,
  ) {
    selectPaymentMethod(paymentMethod)
  }

  function handleConfirmOrder(data: Address) {
    addAddressInfo(data)
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <CheckoutWrapper>
      <form onSubmit={handleSubmit(handleConfirmOrder)} action="">
        <section>
          <h1>Complete seu pedido</h1>
          <AddressWrapper>
            <span>
              <MapPinLine size={22} />
              <p>Endereço de entrega</p>
            </span>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <FormProvider {...addressForm}>
              <AddressForm />
            </FormProvider>
          </AddressWrapper>

          <PaymentMethodWrapper>
            <span>
              <CurrencyDollar size={22} />
              <p>Pagamento</p>
            </span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>

            <PaymentMethodButtonsContainer>
              <PaymentMethodButton
                onClick={(event) =>
                  handleSelectPaymentMethod(event, PaymentType.credit)
                }
              >
                <CreditCard /> <p>CARTÃO DE CRÉDITO</p>
              </PaymentMethodButton>
              <PaymentMethodButton
                onClick={(event) =>
                  handleSelectPaymentMethod(event, PaymentType.debit)
                }
              >
                <Bank /> <p>CARTÃO DE DÉBITO</p>
              </PaymentMethodButton>
              <PaymentMethodButton
                onClick={(event) =>
                  handleSelectPaymentMethod(event, PaymentType.money)
                }
              >
                <Money /> <p>DINHEIRO</p>
              </PaymentMethodButton>
            </PaymentMethodButtonsContainer>
          </PaymentMethodWrapper>
        </section>

        <section>
          <h1>Cafés selecionados</h1>
          <OrderDetailsWrapper>
            {storeState.shoppingCart.map((item) => (
              <CoffeeInfo key={item.coffeeId} coffees={item} />
            ))}

            <TotalPrices>
              <span>
                <p>Total de itens</p>
                <p>{formatter.format(getItemsValue())}</p>
              </span>
              <span>
                <p>Entrega</p>
                <p>{'R$ 3,50'}</p>
              </span>
              <span>
                <h1>Total</h1>
                <h1>{formatter.format(getItemsValue() + 3.5)}</h1>
              </span>

              <button type="submit">CONFIRMAR PEDIDO</button>
            </TotalPrices>
          </OrderDetailsWrapper>
        </section>
      </form>
    </CheckoutWrapper>
  )
}
