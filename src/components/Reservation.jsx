import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

//PROPRIETA' DLL'API :
//name --> string
//phone --> string/number
//numberOfPeople --> string/number
//smoking --> boolean
//dateTime --> data formata ISO
//special requests --> string opzionale

const Reservation = () => {
  // NON SI COLLEZIONANO PIU' I VALORI DEL FORM MA SARANNO SALVATI NELLO STATO
  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    numberOfPeople: "1",
    smoking: false,
    dateTime: "",
    specialRequests: "",
  })

  const navigate = useNavigate()

  const sendReservation = () => {
    const URL = "https://striveschool-api.herokuapp.com/api/reservation"
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(reservation),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.ok) {
          alert("Prenotazione effettuata con successo!")

          setReservation({
            name: "",
            phone: "",
            numberOfPeople: "1",
            smoking: false,
            dateTime: "",
            specialRequests: "",
          })
          navigate("/")
        } else {
          throw new Error("Prenotazione fallita")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center my-2">
          <Col xs={12} md={6}>
            <h2 className="text-center my-2">Prenota un tavolo</h2>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                sendReservation()
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Nome prenotazione</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Giangiorgio"
                  value={reservation.name}
                  onChange={(e) => {
                    setReservation({
                      ...reservation,
                      name: e.target.value,
                    })
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>N. di telefono</Form.Label>
                <Form.Control
                  type="tel"
                  value={reservation.phone}
                  onChange={(e) => {
                    setReservation({
                      ...reservation,
                      phone: e.target.value,
                    })
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete?</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={reservation.numberOfPeople}
                  onChange={(e) => {
                    setReservation({
                      ...reservation,
                      numberOfPeople: e.target.value,
                    })
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option value={10}>6+</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Tavolo fumatori"
                  checked={reservation.smoking}
                  onChange={(e) => {
                    setReservation({
                      ...reservation,
                      smoking: e.target.checked,
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data e ora</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={reservation.dateTime}
                  onChange={(e) => {
                    setReservation({
                      ...reservation,
                      dateTime: e.target.value,
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
                  value={reservation.specialRequests}
                  onChange={(e) => {
                    setReservation({
                      ...reservation,
                      specialRequests: e.target.value,
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

export default Reservation
