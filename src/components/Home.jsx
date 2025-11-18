import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import pastaciutte from "../data/menù.json"
import ListGroup from "react-bootstrap/ListGroup"
import { Component } from "react"
class Home extends Component {
  state = {
    activePasta: pastaciutte[0],
  }
  render() {
    return (
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Carousel
              onSlide={(i) => this.setState({ activePasta: pastaciutte[i] })}
            >
              {pastaciutte.map((pasta) => {
                return (
                  <Carousel.Item key={pasta.id}>
                    <img
                      src="https://placebear.com/300/300"
                      className="w-100"
                    />
                    <Carousel.Caption>
                      <h3>{pasta.name}l</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <ListGroup>
              {this.state.activePasta.comments.map((c) => {
                return <ListGroup.Item>{c.comment}</ListGroup.Item>
              })}
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
