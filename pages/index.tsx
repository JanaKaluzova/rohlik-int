import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import useSWR from 'swr'
import { StoreItem, StoreItemProps } from '../components/StoreItem'
import { useProducts } from '../hooks/useProducts'

export default function Index() {
  const { data, error } = useProducts()
  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            {' '}
            <StoreItem {...item} />{' '}
          </Col>
        ))}
      </Row>
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
