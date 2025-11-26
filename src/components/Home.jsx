import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import pastaciutte from "../data/menù.json"
import PastaReview from "./PastaReview"
import { Component } from "react"
class Home extends Component {
  state = {
    activePasta: pastaciutte[0],
  }
  render() {
    return (
      <>
        <title>Epistaurant</title>
        <Container className="mt-3">
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
            >
              <Carousel
                onSlid={(i) => {
                  this.setState({ activePasta: pastaciutte[i] })
                }}
              >
                {pastaciutte.map((pasta) => {
                  return (
                    <Carousel.Item key={pasta.id}>
                      <img src={pasta.image} className="w-100" />
                      <Carousel.Caption>
                        <h3>{pasta.name}</h3>
                        <p>{pasta.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <PastaReview pasta={this.state.activePasta} />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home
