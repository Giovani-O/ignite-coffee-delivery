import { Trash } from '@phosphor-icons/react'
import { CoffeeInfoWrapper } from './styles'
import { CoffeesInCart } from '../../../../contexts/StoreContext'
import CoffeesJson from '../../../../assets/coffees/CoffeesData.json'
import { ChangeEvent } from 'react'

interface CoffeeInfoProps {
  coffees: CoffeesInCart
}

export function CoffeeInfo({ coffees }: CoffeeInfoProps) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const coffee = CoffeesJson.CoffeesData.find(
    (coffee) => coffee.id === coffees.coffeeId,
  )

  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event)
  }

  return (
    <CoffeeInfoWrapper>
      <div>
        <img src={coffee?.image} alt={coffee?.name} />
        <div>
          <h2>{coffee?.name}</h2>
          <div>
            <input
              type="number"
              min="1"
              max="99"
              value={coffees.amount}
              onChange={handleAmountChange}
            ></input>

            <button>
              <Trash size={16} />
              <p>REMOVER</p>
            </button>
          </div>
        </div>
      </div>
      <h1>{formatter.format((coffee?.price || 0) * coffees.amount)}</h1>
    </CoffeeInfoWrapper>
  )
}
