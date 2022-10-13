import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { StoreItemProps } from '../types/types'
import { formatCurrency } from '../utilities/formatCurrency'

export const StoreItem: React.FC<StoreItemProps> = ({ id, name, image, price }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <Card className="h-100">
      <Card.Img className="p-2" src={image} height="100px" style={{ objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex flex-column justify-content-between align-items-center mb-auto">
          <span className="fs-20 mt-4">{name}</span>
          <span className="text-muted d-flex flex-row mt-auto mb-2">{formatCurrency(price.full)}</span>
        </div>
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
