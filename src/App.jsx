import "bootstrap/dist/css/bootstrap.min.css"
import RestaurantNavbar from "./components/RestaurantNavbar"
import Home from "./components/Home"
import Reservation from "./components/Reservation"
import TableReserved from "./components/TableReserved"
function App() {
  return (
    <>
      <RestaurantNavbar illuminaLink="Home" />
      <TableReserved />
      <Reservation />
      <Home />
    </>
  )
}

export default App
