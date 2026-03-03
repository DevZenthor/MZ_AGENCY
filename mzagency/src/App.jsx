import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Talent from "./pages/Talent"
import PlayerProfile from "./pages/PlayerProfile"
import Management from "./pages/Management"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Talent page */}
          <Route path="/talent" element={<Talent />} />

          {/* Dynamic profile page */}
          <Route path="/talent/:slug" element={<PlayerProfile />} />

          {/* Management */}
          <Route path="/management" element={<Management />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  )
}

export default App