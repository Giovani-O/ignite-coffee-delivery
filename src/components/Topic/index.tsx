import { ReactNode } from 'react'
import { TopicIcon, TopicStyle } from './styles'

const COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface TopicProps {
  children: ReactNode
  text: string
  backgroundColor: keyof typeof COLORS
}

export function Topic({ children, text, backgroundColor }: TopicProps) {
  return (
    <TopicStyle>
      <TopicIcon $backgroundColor={backgroundColor}>{children}</TopicIcon>
      <p>{text}</p>
    </TopicStyle>
  )
}
