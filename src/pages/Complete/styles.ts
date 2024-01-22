import styled from 'styled-components'

export const CompleteOrderContainer = styled.main`
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    max-height: 280px;
  }

  @media (max-width: 768px) {
    margin: 1.75rem 0;

    img {
      display: none;
    }
  }
`
export const CompleteOrderInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6.375rem;
  margin-top: 2.5rem;

  section {
    display: flex;
    flex-direction: column;
    padding: 2.8125rem 2.5rem;
    gap: 2rem;
    overflow: auto;
    width: 526px;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    // Adição de gradiente à borda
    border: double 1px transparent; // 1
    border-radius: 6px 36px 6px 36px; // 2
    background-image:
      linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      ),
      // 3
      linear-gradient(
          to right,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        ); // 4
    background-origin: border-box; // 5
    background-clip: padding-box, border-box; // 6
    // 1 - Crio uma borda dupla transparente
    // 2 - Defino o radius da borda
    // 3 - Defino a cor de background com 2 gradientes, o primeiro é a cor de fundo
    // 4 - O segundo gradiente é a cor da borda
    // 5 - O background vai começar na borda da section
    // 6 - background-clip define onde o background da section vai ser visível

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    button {
      border: 1px solid transparent;
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 0.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
      cursor: pointer;
      transition: 0.1s background-color;

      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 130%;

      &:hover {
        background: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
