import styled from 'styled-components'

export const CheckoutWrapper = styled.main`
  padding: 0.5rem 10rem 15rem 10rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 2.75rem 0;
    background-image: none;
  }

  section {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }

  & > section {
    flex-direction: column;
  }

  section h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressWrapper = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2rem;
  max-width: 640px;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span p {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0;
    padding: 0;
  }

  p {
    padding-left: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    margin: 0 0 2rem 30px;
  }

  // div div div acessa o elemento Col do react-grid-system
  div div div {
    padding: 0 8px !important;
  }
`

export const PaymentMethodWrapper = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  max-width: 640px;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.purple};
  }

  span p {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0;
    padding: 0;
  }

  p {
    padding-left: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    margin: 0 0 2rem 30px;
  }
`

export const PaymentMethodButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethodButton = styled.button`
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  min-width: 11.125rem;
  cursor: pointer;
  transition: 0.1s background-color;

  p {
    margin: 0;
    padding: 0;
    border: none;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const OrderDetailsWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  max-width: 448px;
`
export const CoffeeInfo = styled.section`
  min-width: 368px;
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3.125rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']} img {
    max-width: 64px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    img {
      max-width: 64px;
    }
  }

  div div div {
    display: flex;
    flex-direction: row;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }
`
