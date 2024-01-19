// Contexto da aplicação
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { StoreState, storeReducer } from '../reducers/store/reducer'

// Interface para tipar os cafés, pode ser reaproveitada
export interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

// Interface para os cafés no carrinho
export interface CoffeesInCart {
  coffeeId: string
  amount: number
}

// Interface para tipar o contexto
interface StoreContextType {
  currentPurchase: string
  shoppingCart: CoffeesInCart[]
  setCurrentPurchase: (currentPurchase: string) => void
  setShoppingCart: (shoppingCart: CoffeesInCart[]) => void
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
  const [shoppingCart, setShoppingCart] = useState([] as CoffeesInCart[])

  // usa o reducer, os parâmetros de useReducer são:
  /*
    reducer: A função criada no reducer.ts
    initialArg: O valor inicial do estado
    init: A função de inicialização do estado
  */
  const initialArg = {} as StoreState
  const [storeState, dispatch] = useReducer(
    storeReducer,
    initialArg,
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:store-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  // useEffect para salvar o estado no localStorage
  useEffect(() => {
    const stateJSON = JSON.stringify(storeState)

    localStorage.setItem('@coffee-delivery:store-state-1.0.0', stateJSON)
  })

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
