import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderSubcontainer,
  Location,
  ShoppingCart,
} from './styles'
import Logo from '../../assets/logo.svg'
import { TextS } from '../../styles/fonts'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <HeaderSubcontainer>
        <Location>
          <MapPin weight="fill" />
          <TextS>Hortolândia, SP</TextS>
        </Location>
        <ShoppingCart>
          <ShoppingCartSimple weight="fill" />
        </ShoppingCart>
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
