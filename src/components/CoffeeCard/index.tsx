import { ShoppingCartSimple } from '@phosphor-icons/react'

import { CoffeeCardContainer, CoffeCardOptions, Tags } from './styles'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'

interface CoffeeCardProps {
  type: {
    id: string
    name: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function CoffeeCard({ type }: CoffeeCardProps) {
  const { currentPurchase, shoppingCart, setCurrentPurchase, setShoppingCart } =
    useContext(StoreContext)

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
          <input type="number" placeholder="0" min={0} max={99} />
          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </form>
      </CoffeCardOptions>
    </CoffeeCardContainer>
  )
}
