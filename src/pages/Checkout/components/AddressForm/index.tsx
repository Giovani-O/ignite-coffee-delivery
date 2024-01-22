import { Container, Row, Col } from 'react-grid-system'
import { TextInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'

export function AddressForm() {
  const { storeState } = useContext(StoreContext)

  // Importa register do react-hook-form
  const { register } = useFormContext()

  return (
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <TextInput placeholder="CEP" {...register('zipCode')} />
        </Col>

        <Col sm={12} md={12}>
          <TextInput placeholder="Rua" {...register('street')} />
        </Col>

        <Col sm={12} md={4}>
          <TextInput placeholder="Número" {...register('number')} />
        </Col>

        <Col sm={12} md={8}>
          <TextInput placeholder="Complemento" {...register('complement')} />
        </Col>

        <Col sm={12} md={4}>
          <TextInput placeholder="Bairro" {...register('neighbourhood')} />
        </Col>

        <Col sm={12} md={6}>
          <TextInput placeholder="Cidade" {...register('city')} />
        </Col>

        <Col sm={12} md={2}>
          <TextInput placeholder="UF" {...register('state')} />
        </Col>
      </Row>
    </Container>
  )
}
