import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderSubcontainer,
  Location,
  ShoppingCart,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext, CoffeesInCart } from '../../contexts/StoreContext'

export function Header() {
  const { shoppingCart } = useContext(StoreContext)

  const totalInCart = shoppingCart.reduce(
    (total: number, cartItem: CoffeesInCart) => total + cartItem.amount,
    0,
  )

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
            {totalInCart > 0 && <span className="badge">{totalInCart}</span>}
          </ShoppingCart>
        </NavLink>
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
