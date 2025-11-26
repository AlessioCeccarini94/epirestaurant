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
      <>
        <title>Back Office</title>
        <Container>
          <Row className="justify-content-center my-3">
            <Col xs={12} md={6}>
              <h2 className="text-center">PRENOTAZIONI</h2>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Col xs={12} md={6}>
              {/* SHORT CIRCUIT  */}
              {this.state.loading && (
                <div className="text-center">
                  <Spinner animation="border" />
                </div>
              )}
              <ListGroup className="text-center">
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
      </>
    )
  }
}
export default TableReserved
