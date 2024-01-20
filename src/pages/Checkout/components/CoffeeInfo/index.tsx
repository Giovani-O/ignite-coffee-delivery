import { Trash } from '@phosphor-icons/react'
import { CoffeeInfoWrapper } from './styles'
import { CoffeesInCart, StoreContext } from '../../../../contexts/StoreContext'
import CoffeesJson from '../../../../assets/coffees/CoffeesData.json'
import { ChangeEvent, useContext } from 'react'

// Validações com Zod
import { ZodError, z } from 'zod'
const schema = z.number().int().min(1).max(99)

interface CoffeeInfoProps {
  coffees: CoffeesInCart
}

export function CoffeeInfo({ coffees }: CoffeeInfoProps) {
  const { storeState, updateCartCheckout, removeCoffeeType } =
    useContext(StoreContext)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const coffee = CoffeesJson.CoffeesData.find(
    (coffee) => coffee.id === coffees.coffeeId,
  )

  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    const validatedValue = schema.parse(event.target.valueAsNumber)

    try {
      storeState.shoppingCart.map((item) =>
        item.coffeeId === coffees.coffeeId
          ? updateCartCheckout(item.coffeeId, validatedValue)
          : item,
      )
    } catch (error) {
      if (error instanceof ZodError) {
        console.error(error.errors)
      } else {
        console.error('Valor inválido')
      }
    }
  }

  function handleRemoveFromCart() {
    removeCoffeeType(coffees.coffeeId)
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

            <button onClick={handleRemoveFromCart}>
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
