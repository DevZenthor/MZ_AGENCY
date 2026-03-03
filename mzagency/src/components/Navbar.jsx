import { Link } from "react-router-dom"
import logo from "../assets/MZ.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO À GAUCHE */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="MZ Logo" />
        </Link>

        {/* LINKS À DROITE */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/talent">Talent</Link></li>
          <li><Link to="/management">Manager</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar