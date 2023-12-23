import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderSubcontainer,
  Location,
  ShoppingCart,
} from './styles'
import Logo from '../../assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <HeaderSubcontainer>
        <Location>
          <MapPin weight="fill" />
          <p>Hortolândia, SP</p>
        </Location>
        <ShoppingCart>
          <ShoppingCartSimple weight="fill" />
        </ShoppingCart>
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
