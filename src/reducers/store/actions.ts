import { CoffeesInCart } from '../../contexts/StoreContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  PAYMENT = 'PAYMENT',
}

export function addToCartAction(coffeeType: CoffeesInCart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffeeType,
    },
  }
}

export function updateCartAction(coffeeAmount: number, coffeeId: string) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      coffeeAmount,
      coffeeId,
    },
  }
}

export function removeFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function paymentAction() {
  return {
    type: ActionTypes.PAYMENT,
    payload: {},
  }
}
