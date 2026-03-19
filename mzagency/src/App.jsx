import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Talent from "./pages/Talent"
import Management from "./pages/Management"
import Contact from "./pages/Contact"
import PlayerProfile from "./pages/PlayerProfile"
import Legal from "./pages/LegalNotice"

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/management" element={<Management />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />

        {/* 🔥 LA ROUTE MANQUANTE */}
        <Route path="/player/:slug" element={<PlayerProfile />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App