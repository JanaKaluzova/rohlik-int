import type { NextPage } from 'next'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import { useProducts } from '../hooks/useProducts'

export default function Index() {
  const { data, error } = useProducts()
  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  return (
    <>
      <div className="ms-2">
        <h1>Store</h1>
        <Row md={4} xs={2} lg={6} xl={9} className="g-2">
          {data.map((item) => (
            <Col key={item.id}>
              {' '}
              <StoreItem {...item} />{' '}
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

/*
const Home: NextPage = () => {
  return (
    <>
      <Container className="mb-4 bg-light">
        <h1>Shopping cart</h1>
      </Container>
    </>
  )
}

export default Home*/
