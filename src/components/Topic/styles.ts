import styled from 'styled-components'

export const TopicStyle = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    margin: 0;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface TopicIconBackground {
  $backgroundColor: keyof typeof COLORS
}

export const TopicIcon = styled.span<TopicIconBackground>`
  width: 32px;
  height: 32px;
  padding: 0.625rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme[COLORS[props.$backgroundColor]]};
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1600px) {
    width: 40px;
    height: 40px;
  }
`
