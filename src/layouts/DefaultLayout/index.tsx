import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, Spacer } from './styles'
import { Alert } from '../../components/Alert'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Spacer />
      <Outlet />
      {/* Alerta quando um café for adicionado ao carrinho */}
      <Alert message="Café adicionado ao carrinho" />
    </LayoutContainer>
  )
}
