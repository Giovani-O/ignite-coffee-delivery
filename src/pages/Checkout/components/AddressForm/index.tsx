import { Container, Row, Col } from 'react-grid-system'
import { useContext } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { TextInput } from './styles'

export function AddressForm() {
  const { storeState, addAddressInfo } = useContext(StoreContext)

  return (
    <form>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <TextInput placeholder="CEP" id="zipCode" />
          </Col>

          <Col sm={12} md={12}>
            <TextInput placeholder="Rua" id="street" />
          </Col>

          <Col sm={12} md={4}>
            <TextInput placeholder="Número" id="number" />
          </Col>

          <Col sm={12} md={8}>
            <TextInput placeholder="Complemento" id="complement" />
          </Col>

          <Col sm={12} md={4}>
            <TextInput placeholder="Bairro" id="neighbourhood" />
          </Col>

          <Col sm={12} md={6}>
            <TextInput placeholder="Cidade" id="city" />
          </Col>

          <Col sm={12} md={2}>
            <TextInput placeholder="UF" id="state" />
          </Col>
        </Row>
      </Container>
    </form>
  )
}
