import "bootstrap/dist/css/bootstrap.min.css"
import RestaurantNavbar from "./components/RestaurantNavbar"
import Home from "./components/Home"
import Reservation from "./components/Reservation"
function App() {
  return (
    <>
      <RestaurantNavbar illuminaLink="Home" />
      <Reservation />
      <Home />
    </>
  )
}

export default App
