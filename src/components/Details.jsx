import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap"
import { useEffect, useState } from "react"
import paste from "../data/menù.json"

const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)
  const [pastaToShow, setPastaToShow] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const pasta = paste.find((p) => {
      return p.id.toString() === params.pastaID
    })
    if (!pasta) {
      navigate("/notfound")
    }
    console.log(pastaToShow)
    setPastaToShow(pasta)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6} className="text-center">
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <>
              <Card className="my-3">
                <Card.Img variant="top" src={""} />
                <Card.Body className="text-center">
                  <Card.Title> {pastaToShow.name}</Card.Title>
                  <Card.Text>{pastaToShow.description}</Card.Text>
                  <Card.Text>
                    <Badge pill bg="info">
                      {pastaToShow.price}
                    </Badge>
                  </Card.Text>
                  <Button onClick={() => navigate("/menu")} variant="primary">
                    Torna al menu
                  </Button>
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Details
