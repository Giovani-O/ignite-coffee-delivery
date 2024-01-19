import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  HeaderSubcontainer,
  Location,
  ShoppingCart,
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { StoreContext, CoffeesInCart } from '../../contexts/StoreContext'

export function Header() {
  const { storeState } = useContext(StoreContext)

  const totalInCart = storeState.shoppingCart.reduce(
    (total: number, cartItem: CoffeesInCart) => total + cartItem.amount,
    0,
  )

  // Height dinâmico para o header;
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer height={scrollY > 50 ? '54px' : '104px'}>
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
