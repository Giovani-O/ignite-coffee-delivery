import {
  CoffeCardOptions,
  CoffeeCard,
  StoreContainer,
  StoreGrid,
  Tags,
} from './styles'

import TraditionalCoffee from '../../../../assets/coffees/images/cafe-tradicional.png'
import { ShoppingCartSimple } from '@phosphor-icons/react'

export function Store() {
  return (
    <StoreContainer>
      <h1>Nossos cafés</h1>

      <StoreGrid>
        {/* 
            As tags vão precisar de um map, talvez até de um container separado.
            O mesmo para o CoffeCard
          */}
        <CoffeeCard>
          <img src={TraditionalCoffee} alt="Uma xícara de café tradicional" />

          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>

          <CoffeCardOptions>
            <h1>9,90</h1>

            <form>
              <input type="number" />
              <button>
                <ShoppingCartSimple weight="fill" />
              </button>
            </form>
          </CoffeCardOptions>
        </CoffeeCard>
      </StoreGrid>
    </StoreContainer>
  )
}
