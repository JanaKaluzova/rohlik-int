import { useEffect, useState } from 'react'
import { CartItem } from '../types/types'

export const useLocalStorage = () => {
  const initialState: CartItem[] = []
  const [cartItems, setCartItems] = useState<CartItem[]>(initialState)
  useEffect(() => {
    const items = localStorage.getItem('cart')
    if (items === null) {
      return
    }
    const cartData = JSON.parse(items)
    if (cartData) {
      setCartItems(cartData)
    }
  }, [])

  useEffect(() => {
    if (cartItems !== initialState) {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }, [cartItems])

  return {
    cartItems,
    setCartItems,
  }
}
