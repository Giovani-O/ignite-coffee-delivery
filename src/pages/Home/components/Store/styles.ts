import styled from 'styled-components'

export const StoreContainer = styled.main`
  padding: 0 10rem 10rem 10rem;

  @media (max-width: 768px) {
    padding: 2.75rem 0;
  }
`

export const StoreTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
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
