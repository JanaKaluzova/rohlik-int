import { Col, Container, Row } from 'react-bootstrap'
import { Header } from '../components/Header'
import { StoreItem } from '../components/StoreItem'
import { useProducts } from '../hooks/useProducts'

export default function Index() {
  const { data, error } = useProducts()
  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  return (
    <>
      <Header onSearch={(data) => console.log(data)} />
      <Container className="ms-2">
        <Row md={4} xs={2} lg={6} xl={9} className="g-2">
          {data.map((item) => (
            <Col key={item.id}>
              {' '}
              <StoreItem {...item} />{' '}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
