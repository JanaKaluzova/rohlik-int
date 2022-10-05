import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type Price = {
  full: number
  currency: string
}

export type StoreItemProps = {
  id: number
  name: string
  image: string
  price: Price
}

export const StoreItem: React.FC<StoreItemProps> = ({ id, name, image, price }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} height="200px" style={{ objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted d-flex flex-row">
            {price.full} {price.currency}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} variant="outline-primary" className="w-100">
              Add to Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: '0.5rem' }}>
              <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                <Button onClick={() => decreaseCartQuantity(id)} variant="outline-primary">
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)} variant="outline-primary">
                  +
                </Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="outline-danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
