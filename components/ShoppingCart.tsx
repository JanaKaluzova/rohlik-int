import { format } from 'path'
import { Card, CarouselItem, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { useProducts } from '../hooks/useProducts'
import { formatCurrency } from '../utilities/formatCurrency'
import { CartItem } from './CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart()
  const { data, error } = useProducts()

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Celkem{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data?.find((i) => i.id === cartItem.id)
                return total + (item?.price.full || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
