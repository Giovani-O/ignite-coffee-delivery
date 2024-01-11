import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderSubcontainer,
  Location,
  ShoppingCart,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <HeaderSubcontainer>
        <Location>
          <MapPin weight="fill" />
          <p>Hortolândia, SP</p>
        </Location>
        <NavLink to="/checkout" title="Pagamento">
          <ShoppingCart>
            <ShoppingCartSimple weight="fill" />
          </ShoppingCart>
        </NavLink>
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
