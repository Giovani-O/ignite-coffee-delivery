import styled from 'styled-components'

export const TextInputStyle = styled.input`
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem;
  margin: 0.5rem 0;
  width: 100%;
`
