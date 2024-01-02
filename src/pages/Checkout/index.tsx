import { MapPinLine } from '@phosphor-icons/react'
import { Container, Row, Col } from 'react-grid-system'

import { Address, CheckoutWrapper, OrderDetails, PaymentMethod } from './styles'
import { TextInput } from '../../components/TextInput'

export function Checkout() {
  return (
    <CheckoutWrapper>
      <section>
        <h1>Complete seu pedido</h1>
        <Address>
          <span>
            <MapPinLine size={22} />
            <p>Endereço de entrega</p>
          </span>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <Container>
            <Row>
              <Col sm={12} md={4}>
                <TextInput placeholder="CEP" />
              </Col>

              <Col sm={12} md={12}>
                <TextInput placeholder="Rua" />
              </Col>

              <Col sm={12} md={4}>
                <TextInput placeholder="Número" />
              </Col>

              <Col sm={12} md={8}>
                <TextInput placeholder="Complemento" />
              </Col>

              <Col sm={12} md={4}>
                <TextInput placeholder="Bairro" />
              </Col>

              <Col sm={12} md={7}>
                <TextInput placeholder="Cidade" />
              </Col>

              <Col sm={12} md={1}>
                <TextInput placeholder="UF" />
              </Col>
            </Row>
          </Container>
        </Address>

        <PaymentMethod>
          <h1>Payment</h1>
        </PaymentMethod>
      </section>

      <section>
        <h1>Cafés selecionados</h1>
        <OrderDetails>
          <h1>Order Details</h1>
        </OrderDetails>
      </section>
    </CheckoutWrapper>
  )
}
