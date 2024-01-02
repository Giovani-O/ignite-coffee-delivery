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
    flex-direction: column;
    gap: 0.75rem;
  }

  section h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Address = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2rem;

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

export const PaymentMethod = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`
export const OrderDetails = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
`
