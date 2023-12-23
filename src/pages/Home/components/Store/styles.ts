import styled from 'styled-components'

export const StoreContainer = styled.main`
  padding: 0 10rem 10rem 10rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    padding: 2.75rem 0;
  }
`

export const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  padding-top: 3.375rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    align-self: center;
  }

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.25rem 0.5rem;
    border-radius: 16px;

    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeCardOptions = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$';
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.75rem 0 1rem 0;
`
