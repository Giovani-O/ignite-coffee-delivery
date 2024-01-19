import { ShoppingCartSimple } from '@phosphor-icons/react'

import { CoffeeCardContainer, CoffeCardOptions, Tags } from './styles'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import {
  StoreContext,
  Coffee,
  CoffeesInCart,
} from '../../contexts/StoreContext'

interface CoffeeCardProps {
  type: Coffee
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function CoffeeCard({ type }: CoffeeCardProps) {
  // uso do contexto
  const { storeState, addCoffeeToCart, updateCart } = useContext(StoreContext)

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  // Funções para manipular eventos
  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    setCoffeeAmount(event.target.valueAsNumber)
  }

  // Adiciona cafés ao carrinho
  function handleAddToCart(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const coffeeInfo = {} as CoffeesInCart
    // const coffeesToAddToCart = [] as CoffeesInCart[]

    // Verifica se o café já existe no carrinho
    const existingCoffee = storeState.shoppingCart.find(
      (item) => item.coffeeId === type.id,
    )

    // Se sim, só atualiza a quantidade
    if (existingCoffee) {
      updateCart(coffeeAmount, type.id)
    } else {
      coffeeInfo.coffeeId = type.id
      coffeeInfo.amount = coffeeAmount
      addCoffeeToCart(coffeeInfo)
      console.log(storeState)
    }

    setCoffeeAmount(1)
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
