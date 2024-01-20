import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'
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

export function Checkout() {
  const { storeState } = useContext(StoreContext)

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

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <CheckoutWrapper>
      <section>
        <h1>Complete seu pedido</h1>
        <AddressWrapper>
          <span>
            <MapPinLine size={22} />
            <p>Endereço de entrega</p>
          </span>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <AddressForm />
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
            <PaymentMethodButton>
              <CreditCard /> <p>CARTÃO DE CRÉDITO</p>
            </PaymentMethodButton>
            <PaymentMethodButton>
              <Bank /> <p>CARTÃO DE DÉBITO</p>
            </PaymentMethodButton>
            <PaymentMethodButton>
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

            <button>CONFIRMAR PEDIDO</button>
          </TotalPrices>
        </OrderDetailsWrapper>
      </section>
    </CheckoutWrapper>
  )
}
