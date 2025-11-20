import { Container, Row, Col, ListGroup, Spinner } from "react-bootstrap"
import { Component } from "react"

class TableReserved extends Component {
  state = {
    prenotazioni: [],
    loading: true,
  }

  getTables = function () {
    const URL = "https://striveschool-api.herokuapp.com/api/reservation"
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((arrayOfReservations) => {
        this.setState({
          prenotazioni: arrayOfReservations,
          loading: false,
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ loading: false })
      })
  }
  componentDidMount() {
    this.getTables()
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={6} lg={4}>
            <h2>PRENOTAZIONI</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* SHORT CIRCUIT  */}
            {this.state.loading && (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            )}
            <ListGroup>
              {this.state.prenotazioni.map((prenotazione) => {
                return (
                  <ListGroup.Item key={prenotazione._id}>
                    {prenotazione.name} per {prenotazione.numberOfPeople}{" "}
                    persone
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default TableReserved
