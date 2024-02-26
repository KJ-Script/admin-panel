import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import NavBar from "./components/NavBar"
import Storage from "./pages/Storage"
import Items from "./pages/Items"
import Temp from "./pages/Temp"


function App() {

  return (
    <div className="min-h-screen font-outfit w-full font-montoserrat bg-slate-200 text-black">
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/storage" element={<Storage />} />
        <Route exact path="/items" element={<Items />} />
        <Route exact path="/temp" element={<Temp />} />

      </Routes>
    </Router>
  </div>
      
    
  )
}

export default App
