import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <div className="col col-12 col-md-8 col-lg-4">
            <h1>EPIRESTAURANT</h1>
            <img src="https://placebear.com/300/300" />
          </div>
        </Row>
      </Container>
    </>
  )
}

export default App
