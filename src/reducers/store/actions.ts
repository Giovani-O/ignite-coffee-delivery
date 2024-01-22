import { Address, CoffeesInCart } from '../../contexts/StoreContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_CART_CHECKOUT = 'UPDATE_CART_CHECKOUT',
  REMOVE_COFFEE_TYPE = 'REMOVE_COFFEE_TYPE',
  ADD_ADDRESS_INFO = 'ADD_ADDRESS_INFO',
  SELECT_PAYMENT_METHOD = 'SELECT_PAYMENT_METHOD',
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

export function updateCartCheckoutAction(
  coffeeId: string,
  coffeeAmount: number,
) {
  return {
    type: ActionTypes.UPDATE_CART_CHECKOUT,
    payload: {
      coffeeId,
      coffeeAmount,
    },
  }
}

export function removeCoffeeTypeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_TYPE,
    payload: {
      coffeeId,
    },
  }
}

export function addAddressInfoAction(address: Address) {
  return {
    type: ActionTypes.ADD_ADDRESS_INFO,
    payload: {
      address,
    },
  }
}

export function selectPaymentMethodAction(paymentMethod: number | undefined) {
  return {
    type: ActionTypes.SELECT_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  }
}
