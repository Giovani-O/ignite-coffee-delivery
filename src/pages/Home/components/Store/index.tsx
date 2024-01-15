import { CoffeeCard } from '../../../../components/CoffeeCard'
import { StoreContainer, StoreGrid, StoreTitle } from './styles'
import CoffeesTypes from '../../../../assets/coffees/CoffeesData.json'

export function Store() {
  return (
    <StoreContainer>
      <StoreTitle>Nossos cafés</StoreTitle>

      <StoreGrid>
        {CoffeesTypes.CoffeesData.map((type) => (
          <CoffeeCard key={type.id} type={type} />
        ))}
      </StoreGrid>
    </StoreContainer>
  )
}
