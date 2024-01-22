import { Container, Row, Col } from 'react-grid-system'
import React from 'react'
import { TextInput } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface AddressFormProps {
  formReference: React.MutableRefObject<HTMLFormElement | null>
}

const addressFormSchema = z.object({
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  neighbourhood: z.string(),
  city: z.string(),
  state: z.string(),
})

type AddressFormSchema = z.infer<typeof addressFormSchema>

export function AddressForm({ formReference }: AddressFormProps) {
  const { register } = useForm<AddressFormSchema>({
    resolver: zodResolver(addressFormSchema),
  })

  return (
    <form ref={formReference}>
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
            <TextInput placeholder="Ciade" {...register('city')} />
          </Col>

          <Col sm={12} md={2}>
            <TextInput placeholder="UF" {...register('state')} />
          </Col>
        </Row>
      </Container>
    </form>
  )
}
