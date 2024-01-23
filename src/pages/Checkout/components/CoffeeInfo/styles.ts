import styled from 'styled-components'

export const CoffeeInfoWrapper = styled.section`
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3.125rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    max-width: 64px;
    max-height: 64px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
  }

  div div div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  input {
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

  button {
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    cursor: pointer;

    transition: background-color 0.1s;
    color: ${(props) => props.theme.purple};

    p {
      color: ${(props) => props.theme['base-text']};
    }

    @media (min-width: 1600px) {
      p {
        font-size: 16px;
      }
    }
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$ ';
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
