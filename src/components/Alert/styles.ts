import styled from 'styled-components'

export const AlertBox = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  padding: 1rem;
  border-bottom: 0.5rem solid ${(props) => props.theme.purple};
  margin-bottom: 1rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`
