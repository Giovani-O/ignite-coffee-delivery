import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
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
  align-items: center;
  margin-top: 2.0625rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$ ';
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  form {
    display: flex;
    gap: 0.5rem;
  }

  form input {
    border: none;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    max-width: 72px;
    max-height: 38px;
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-title']};

    box-sizing: border-box;
    padding: 1rem 0;
  }

  form button {
    min-width: 38px;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.1s background-color;
  }

  form button:hover {
    background: ${(props) => props.theme.purple};
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.75rem 0 1rem 0;
  gap: 0.25rem;
`
