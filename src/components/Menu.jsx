import { Col, Container, Row, Card, Button, Badge } from "react-bootstrap"
import paste from "../data/menù.json"
import { useNavigate } from "react-router-dom" //useNavigate from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()

  return (
    <>
      <title>Menu</title>
      <h1 className="text-center">Menu</h1>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            {paste.map((p) => {
              return (
                <Card key={p.id} className="my-3">
                  <Card.Img variant="top" src={p.image} />
                  <Card.Body className="text-center">
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Text>
                      <Badge pill bg="info">
                        {p.price}€
                      </Badge>
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => navigate("/details/" + p.id)}
                    >
                      Vai ai dettagli
                    </Button>
                  </Card.Body>
                </Card>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Menu
