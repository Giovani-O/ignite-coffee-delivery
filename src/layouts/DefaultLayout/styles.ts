import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;

  // Responsividade
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`
