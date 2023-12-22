import styled from 'styled-components'

// Styled components para facilitar o uso das diversas variações de fontes

const BaseTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
`

const BaseText = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
`

// Tipagem das props

const COLORS = {
  label: 'base-label',
  text: 'base-text',
  subtitle: 'base-subtitle',
  title: 'base-title',
  button: 'base-button',
} as const

interface FontProps {
  $fontColor: keyof typeof COLORS
}

// Titles

export const TitleXL = styled(BaseTitle)<FontProps>`
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) =>
    props.theme[
      COLORS[props.$fontColor]
    ]}; // TODO: tornar essa prop opcional e definir valor padrão
`

export const TitleL = styled(BaseTitle)<FontProps>`
  font-size: 2rem;
  font-weight: 800;
`

export const TitleM = styled(BaseTitle)<FontProps>`
  font-size: 1.5rem;
  font-weight: 800;
`

export const TitleS = styled(BaseTitle)<FontProps>`
  font-size: 1.25rem;
  font-weight: 700;
`

export const TitleXS = styled(BaseTitle)<FontProps>`
  font-size: 1.125rem;
  font-weight: 700;
`

// Texts

export const TextL = styled(BaseText)<FontProps>`
  font-size: 1.25rem;
  font-weight: 700;
`

export const TextM = styled(BaseText)<FontProps>`
  font-size: 1rem;
  font-weight: 700;
`

export const TextS = styled(BaseText)<FontProps>`
  font-size: 0.875rem;
  font-weight: 400;
`

export const TextXS = styled(BaseText)<FontProps>`
  font-size: 0.75rem;
  font-weight: 700;
`

// Others

export const Tag = styled.p<FontProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
`

export const ButtonG = styled.p<FontProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
`

export const ButtonM = styled.p<FontProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
`
