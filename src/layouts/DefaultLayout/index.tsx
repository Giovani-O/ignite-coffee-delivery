import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, Spacer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Spacer />
      <Outlet />
    </LayoutContainer>
  )
}
