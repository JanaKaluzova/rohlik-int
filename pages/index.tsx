import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import useSWR from 'swr'
import { StoreItem, StoreItemProps } from '../components/StoreItem'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((item: StoreItemProps) => (
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
