import { CoffeesInCart } from '../../contexts/StoreContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_SINGLE_COFFEE = 'REMOVE_SINGLE_COFFEE',
  REMOVE_COFFEE_TYPE = 'REMOVE_COFFEE_TYPE',
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

export function removeSingleCoffee(coffeeId: string, coffeeAmount: number) {
  return {
    type: ActionTypes.REMOVE_SINGLE_COFFEE,
    payload: {
      coffeeId,
      coffeeAmount,
    },
  }
}

export function removeAllFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_TYPE,
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
