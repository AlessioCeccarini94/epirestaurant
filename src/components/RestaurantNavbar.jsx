import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, useLocation } from "react-router-dom"

const RestaurantNavbar = () => {
  const location = useLocation() //OGGETTO CON INFO DELLA PAGINA CORRENTE

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
              // active={props.illuminaLink === "Home" ? true : false}
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/prenota"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/prenota"
            >
              Prenota
            </Link>
            <Link
              className={
                location.pathname === "/prenotazioni"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/prenotazioni"
            >
              Admin
            </Link>
            <Link
              className={
                location.pathname === "/contatti"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/contatti"
            >
              Contatti
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RestaurantNavbar
