export type CartItemProps = {
  id: number
  quantity: number
}

export type ShoppingCartProps = {
  isOpen: boolean
}

export type Price = {
  full: number
  /*currency: string*/
}

export type StoreItemProps = {
  id: number
  name: string
  image: string
  price: Price
}

export type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

export type CartItem = {
  id: number
  quantity: number
}

export type HeaderProps = {
  onSearch: (text: string) => void
}

export type StoreProps = {
  searchText: string
}
