import { CompleteOrderContainer, CompleteOrderInfo } from './styles'
import Delivery from '../../assets/images/delivery.svg'
import { CheckFat, CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Topic } from '../../components/Topic'
import { useContext } from 'react'
import {
  Address,
  CoffeesInCart,
  StoreContext,
} from '../../contexts/StoreContext'
import { useNavigate } from 'react-router-dom'

export function Complete() {
  const { storeState, cleanState } = useContext(StoreContext)
  const navigate = useNavigate()

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

  function handleFinishOrder() {
    const shoppingCart: CoffeesInCart[] = [] as CoffeesInCart[]
    const paymentMethod: number | undefined = undefined
    const address: Address = {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighbourhood: '',
      city: '',
      state: '',
    }

    cleanState(shoppingCart, address, paymentMethod)
    navigate('/')
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

          <button onClick={handleFinishOrder}>
            <CheckFat weight="fill" /> FINALIZAR PEDIDO
          </button>
        </section>

        <img src={Delivery} alt="Pessoa de moto fazendo a entrega" />
      </CompleteOrderInfo>
    </CompleteOrderContainer>
  )
}
