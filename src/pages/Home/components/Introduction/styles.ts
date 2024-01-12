import styled from 'styled-components'
import BackgroundImage from '../../../../assets/images/introduction-background.svg'

export const IntroductionContainer = styled.main`
  display: flex;
  padding: 5.75rem 10rem;
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 2.75rem 0;
    background-image: none;

    img {
      display: none;
    }
  }
`
export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }
`

export const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  padding-top: 4.125rem;

  @media (max-width: 768px) {
    display: table-column;

    padding-top: 2.125rem;
  }
`
