import { CompleteOrderContainer, CompleteOrderInfo } from './styles'
import Delivery from '../../assets/images/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Complete() {
  return (
    <CompleteOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>

      <CompleteOrderInfo>
        <section>
          <span>
            <span>
              <MapPin weight="fill" />
            </span>
            <p>
              Entrega em <strong>{'Rua Luís Camilo de Camargo, 102'}</strong>
              <br />
              {' Centro - Hortolândia, SP'}
            </p>
          </span>
          <span>
            <span>
              <Timer weight="fill" />
            </span>
            Previsão de entrega
            <br /> <strong>20 min - 30 min</strong>
          </span>
          <span>
            <span>
              <CurrencyDollar />
            </span>
            Pagamento na entrega
            <br /> <strong>Cartão de crédito</strong>
          </span>
        </section>

        <img src={Delivery} alt="Pessoa de moto fazendo a entrega" />
      </CompleteOrderInfo>
    </CompleteOrderContainer>
  )
}
