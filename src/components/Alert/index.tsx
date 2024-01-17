import { AlertBox } from './styles'

interface AlertProps {
  message: string
}

export function Alert({ message }: AlertProps) {
  return <AlertBox>{message}</AlertBox>
}
