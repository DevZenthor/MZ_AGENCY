import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Talent from "./pages/Talent"
import Management from "./pages/Management"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/management" element={<Management />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App