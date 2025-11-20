import { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

//PROPRIETA' DLL'API :
//name --> string
//phone --> string/number
//numberOfPeople --> string/number
//smoking --> boolean
//dateTime --> data formata ISO
//special requests --> string opzionale

class Reservation extends Component {
  // NON SI COLLEZIONANO PIU' I VALORI DEL FORM MA SARANNO SALVATI NELLO STATO

  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "1",
      smoking: false,
      dateTime: "",
      specialRequests: "",
    },
  }
  sendReservation = () => {
    const URL = "https://striveschool-api.herokuapp.com/api/reservation"
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state.reservation),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.ok) {
          alert("Prenotazione effettuata con successo!")
          this.setState({
            reservation: {
              name: "",
              phone: "",
              numberOfPeople: "1",
              smoking: false,
              dateTime: "",
              specialRequests: "",
            },
          })
        } else {
          throw new Error("Prenotazione fallita")
        }
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center my-2">
            <Col xs={12} md={6}>
              <h2 className="text-center my-2">Prenota un tavolo</h2>
              <Form
                onSubmit={(e) => {
                  e.preventDefault()
                  this.sendReservation()
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Nome prenotazione</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Giangiorgio"
                    value={this.state.reservation.name}
                    onChange={(e) => {
                      this.setState({
                        reservation: {
                          ...this.state.reservation,
                          name: e.target.value,
                        },
                      })
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>N. di telefono</Form.Label>
                  <Form.Control
                    type="tel"
                    value={this.state.reservation.phone}
                    onChange={(e) => {
                      this.setState({
                        reservation: {
                          ...this.state.reservation,
                          phone: e.target.value,
                        },
                      })
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>In quanti siete?</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={this.state.reservation.numberOfPeople}
                    onChange={(e) => {
                      this.setState({
                        reservation: {
                          ...this.state.reservation,
                          numberOfPeople: e.target.value,
                        },
                      })
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6+</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Tavolo fumatori"
                    checked={this.state.reservation.smoking}
                    onChange={(e) => {
                      this.setState({
                        reservation: {
                          ...this.state.reservation,
                          smoking: e.target.checked,
                        },
                      })
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Data e ora</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={this.state.reservation.dateTime}
                    onChange={(e) => {
                      this.setState({
                        reservation: {
                          ...this.state.reservation,
                          dateTime: e.target.value,
                        },
                      })
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Richieste speciali</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={this.state.reservation.specialRequests}
                    onChange={(e) => {
                      this.setState({
                        reservation: {
                          ...this.state.reservation,
                          specialRequests: e.target.value,
                        },
                      })
                    }}
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Prenota
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Reservation
