// Contexto da aplicação
import { ReactNode, createContext, useState } from 'react'

// Interface para tipar os cafés, pode ser reaproveitada
export interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

// Interface para tipar o contexto
interface StoreContextType {
  currentPurchase: string
  shoppingCart: Coffee[]
  setCurrentPurchase: (currentPurchase: string) => void
  setShoppingCart: (shoppingCart: Coffee[]) => void
}

// Interface para o context provider
interface StoreContextProviderProps {
  children: ReactNode
}

// Criação do contexto
export const StoreContext = createContext({} as StoreContextType)

// Context provider
export function StoreContextProvider({ children }: StoreContextProviderProps) {
  // Estados
  const [currentPurchase, setCurrentPurchase] = useState('')
  const [shoppingCart, setShoppingCart] = useState([] as Coffee[])

  return (
    <StoreContext.Provider
      value={{
        currentPurchase,
        shoppingCart,
        setCurrentPurchase,
        setShoppingCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
