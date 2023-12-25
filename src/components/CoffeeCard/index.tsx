import TraditionalCoffee from '../../assets/coffees/images/cafe-tradicional.png'
import { ShoppingCartSimple } from '@phosphor-icons/react'

import { CoffeeCardContainer, CoffeCardOptions, Tags } from './styles'

export function CoffeeCard() {
  return (
    /* 
        As tags vão precisar de um map, talvez até de um container separado.
    */
    <CoffeeCardContainer>
      <img src={TraditionalCoffee} alt="Uma xícara de café tradicional" />

      <Tags>
        <span>TRADICIONAL</span>{' '}
      </Tags>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos </p>

      <CoffeCardOptions>
        <h1> 9,90</h1>

        <form>
          {/* usar o Zod depois para fazer as validações */}
          <input type="number" placeholder="0" min={0} max={9} />
          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </form>
      </CoffeCardOptions>
    </CoffeeCardContainer>
  )
}
