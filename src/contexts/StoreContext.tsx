// Contexto da aplicação
import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface StoreContextType {
  currentPurchase: string
  shoppingCart: Coffee[]
  setCurrentPurchase: (currentPurchase: string) => void
  setShoppingCart: (shoppingCart: Coffee[]) => void
}

export const StoreContext = createContext({} as StoreContextType)

interface StoreContextProviderProps {
  children: ReactNode
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
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
