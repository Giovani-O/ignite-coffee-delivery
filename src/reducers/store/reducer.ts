import { produce } from 'immer'
import { Address, CoffeesInCart } from '../../contexts/StoreContext'
import { ActionTypes } from './actions'

export interface StoreState {
  shoppingCart: CoffeesInCart[]
  address: Address
  paymentMethod: number | undefined
}

// Cria o reducer
export function storeReducer(state: StoreState, action: any) {
  // Usa o switch para acessar as diferentes ações do reducer
  // Também é usada a função reducer do immer para lidar com a imutabilidade
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.shoppingCart.push(action.payload.coffeeType)
      })
    case ActionTypes.UPDATE_CART:
      return produce(state, (draft) => {
        draft.shoppingCart = draft.shoppingCart.map((item) =>
          item.coffeeId === action.payload.coffeeId
            ? { ...item, amount: item.amount + action.payload.coffeeAmount }
            : item,
        )
      })
    case ActionTypes.UPDATE_CART_CHECKOUT:
      return produce(state, (draft) => {
        draft.shoppingCart = draft.shoppingCart.map((item) =>
          item.coffeeId === action.payload.coffeeId
            ? { ...item, amount: action.payload.coffeeAmount }
            : item,
        )
      })
    case ActionTypes.REMOVE_COFFEE_TYPE:
      return produce(state, (draft) => {
        draft.shoppingCart = draft.shoppingCart.filter(
          (item) => item.coffeeId !== action.payload.coffeeId,
        )
      })
    case ActionTypes.ADD_ADDRESS_INFO:
      return produce(state, (draft) => {
        draft.address = action.payload.address
      })
    case ActionTypes.SELECT_PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod
      })
    default:
      console.warn('Ação desconhecida')
      return state
  }
}
