import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  width: 100%;

  background: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    padding: 1.75rem 0;
  }
`

export const HeaderSubcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const Location = styled.span`
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
  }
`
export const ShoppingCart = styled.span`
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  .badge {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 130%;
  }
`
