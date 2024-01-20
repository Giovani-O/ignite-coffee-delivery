import { Container, Row, Col } from 'react-grid-system'
import { useContext } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { TextInput } from './styles'

export function AddressForm() {
  const { storeState } = useContext(StoreContext)
  return (
    <form>
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

          <Col sm={12} md={6}>
            <TextInput placeholder="Cidade" />
          </Col>

          <Col sm={12} md={2}>
            <TextInput placeholder="UF" />
          </Col>
        </Row>
      </Container>
    </form>
  )
}
