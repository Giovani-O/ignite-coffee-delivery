import { ShoppingCartSimple } from '@phosphor-icons/react'

import { CoffeeCardContainer, CoffeCardOptions, Tags } from './styles'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { StoreContext, Coffee } from '../../contexts/StoreContext'

interface CoffeeCardProps {
  type: Coffee
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function CoffeeCard({ type }: CoffeeCardProps) {
  const { currentPurchase, shoppingCart, setCurrentPurchase, setShoppingCart } =
    useContext(StoreContext)

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    setCoffeeAmount(event.target.valueAsNumber)
  }

  function handleAddToCart(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const coffeesToAddToCart = [] as Coffee[]

    for (let i = 1; i <= coffeeAmount; i++) {
      coffeesToAddToCart.push(type)
    }

    setShoppingCart(coffeesToAddToCart)
    console.log(shoppingCart)
  }

  return (
    <CoffeeCardContainer>
      <img src={type.image} alt={type.name} />

      <Tags>
        {type.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h1>{type.name}</h1>
      <p>{type.description}</p>

      <CoffeCardOptions>
        <h1>{formatter.format(type.price)}</h1>

        <form>
          {/* usar o Zod depois para fazer as validações */}
          <input
            type="number"
            placeholder="0"
            min={1}
            max={99}
            value={coffeeAmount}
            onChange={handleAmountChange}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" />
          </button>
        </form>
      </CoffeCardOptions>
    </CoffeeCardContainer>
  )
}
