import logo from "../assets/MZ.svg"
import { Link, useLocation } from "react-router-dom"

function Navbar() {

  const location = useLocation()

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LEFT — LOGO */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="MZ Logo" />
          <span>MZ Agency</span>
        </Link>


        {/* RIGHT — LINKS */}
        <ul className="nav-links">

          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/talent"
              className={location.pathname === "/talent" ? "active" : ""}
            >
              Talent
            </Link>
          </li>

          <li>
            <Link
              to="/management"
              className={location.pathname === "/management" ? "active" : ""}
            >
              Management
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar