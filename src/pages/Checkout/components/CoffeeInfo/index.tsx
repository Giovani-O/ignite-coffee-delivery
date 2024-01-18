import { Trash } from '@phosphor-icons/react'
import { CoffeeInfoWrapper } from './styles'
import { CoffeesInCart, StoreContext } from '../../../../contexts/StoreContext'
import CoffeesJson from '../../../../assets/coffees/CoffeesData.json'
import { ChangeEvent, useContext } from 'react'

interface CoffeeInfoProps {
  coffees: CoffeesInCart
}

export function CoffeeInfo({ coffees }: CoffeeInfoProps) {
  const { shoppingCart, setShoppingCart } = useContext(StoreContext)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const coffee = CoffeesJson.CoffeesData.find(
    (coffee) => coffee.id === coffees.coffeeId,
  )

  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    const updatedCart = shoppingCart.map((item) =>
      item.coffeeId === coffees.coffeeId
        ? { ...item, amount: event.target.valueAsNumber }
        : item,
    )
    setShoppingCart(updatedCart)
  }

  function handleRemoveFromCart() {
    const updatedStore = shoppingCart.filter(
      (item) => item.coffeeId !== coffees.coffeeId,
    )

    setShoppingCart(updatedStore)
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
