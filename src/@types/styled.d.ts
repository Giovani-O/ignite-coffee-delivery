import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Busca o tipo do defaultTheme
type ThemeType = typeof defaultTheme

// O DefaultTheme recebe uma interface que herda o tipo de ThemeType
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
