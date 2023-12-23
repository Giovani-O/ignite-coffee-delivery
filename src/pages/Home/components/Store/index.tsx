import { CoffeeCard, StoreContainer, StoreGrid, Tags } from './styles'

export function Store() {
  return (
    <StoreContainer>
      <h1>Nossos cafés</h1>

      <StoreGrid>
        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          {/* 
            As tags vão precisar de um map, talvez até de um container separado.
            O mesmo para o CoffeCard
          */}
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>

        <CoffeeCard>
          <Tags>
            <span>TRADICIONAL</span>{' '}
          </Tags>
          <h1>Expresso Tradicional</h1>
        </CoffeeCard>
      </StoreGrid>
    </StoreContainer>
  )
}
