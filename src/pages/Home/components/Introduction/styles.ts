import styled from 'styled-components'
import BackgroundImage from '../../../../assets/introduction-background.svg'

export const IntroductionContainer = styled.main`
  display: flex;
  padding: 5.75rem 10rem;
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 2.75rem 0;

    img {
      display: none;
    }
  }
`
export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Topic = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 50%;
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
`
