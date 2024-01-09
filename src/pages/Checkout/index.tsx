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
  CoffeeInfo,
  OrderDetailsWrapper,
  PaymentMethodButton,
  PaymentMethodButtonsContainer,
  PaymentMethodWrapper,
} from './styles'
import { AddressForm } from './components/AddressForm'

import Traditional from '../../assets/coffees/images/cafe-tradicional.png'

export function Checkout() {
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
          <CoffeeInfo>
            <div>
              <img src={Traditional} alt="Café tradicional" />
              <div>
                <h2>Expresso Tradicional</h2>
                <div>
                  <p>Num</p>
                  <p>Remover</p>
                </div>
              </div>
            </div>

            <h1>R$ 9,90</h1>
          </CoffeeInfo>
        </OrderDetailsWrapper>
      </section>
    </CheckoutWrapper>
  )
}
