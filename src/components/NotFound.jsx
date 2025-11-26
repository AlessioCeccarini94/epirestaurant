import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <div className="text-center">
            <h1>404-NOT FOUND</h1>
            <p>La pagina che stai cercando non esiste</p>
            <Button href="/" variant="primary" onClick={() => navigate("/")}>
              Torna alla Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
