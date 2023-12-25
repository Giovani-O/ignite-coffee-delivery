import { CoffeeCard } from '../../../../components/CoffeeCard'
import { StoreContainer, StoreGrid, StoreTitle } from './styles'

export function Store() {
  return (
    <StoreContainer>
      <StoreTitle>Nossos cafés</StoreTitle>

      <StoreGrid>
        <CoffeeCard />
      </StoreGrid>
    </StoreContainer>
  )
}
