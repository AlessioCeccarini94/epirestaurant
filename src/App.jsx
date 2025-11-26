import "bootstrap/dist/css/bootstrap.min.css"
import RestaurantNavbar from "./components/RestaurantNavbar"
import Home from "./components/Home"
import Reservation from "./components/Reservation"
import TableReserved from "./components/TableReserved"
import NotFound from "./components/NotFound"
import Menu from "./components/Menu"
import Details from "./components/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <RestaurantNavbar /> {/*  illuminaLink="Home"  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prenotazioni" element={<TableReserved />} />
        <Route path="/prenota" element={<Reservation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details/:pastaID" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
