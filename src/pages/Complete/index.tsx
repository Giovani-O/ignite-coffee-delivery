import { CompleteOrderContainer, CompleteOrderInfo } from './styles'
import Delivery from '../../assets/images/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Topic } from '../../components/Topic'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'

export function Complete() {
  const { storeState } = useContext(StoreContext)

  const getPaymentMethod = () => {
    switch (storeState.paymentMethod) {
      case 0:
        return 'Cartão de crédito'
      case 1:
        return 'Cartão de débito'
      case 2:
        return 'Dinheiro'
      default:
        return ''
    }
  }

  return (
    <CompleteOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>

      <CompleteOrderInfo>
        <section>
          <div>
            <Topic text="" backgroundColor="purple">
              <MapPin weight="fill" size={32} />
            </Topic>
            <span>
              <p>
                Entrega em{' '}
                <strong>
                  {storeState.address.street}, {storeState.address.number}
                </strong>
              </p>
              <p>
                {storeState.address.neighbourhood} - {storeState.address.city},{' '}
                {storeState.address.state}
              </p>
            </span>
          </div>
          <div>
            <Topic text="" backgroundColor="yellow">
              <Timer weight="fill" size={32} />
            </Topic>
            <span>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </span>
          </div>
          <div>
            <Topic text="" backgroundColor="yellow-dark">
              <CurrencyDollar size={32} />
            </Topic>
            <span>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{getPaymentMethod()}</strong>
              </p>
            </span>
          </div>
        </section>

        <img src={Delivery} alt="Pessoa de moto fazendo a entrega" />
      </CompleteOrderInfo>
    </CompleteOrderContainer>
  )
}
