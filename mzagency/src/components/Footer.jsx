import logo from "../assets/MZ.svg"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <img src={logo} alt="MZ Logo" className="footer-logo" />

        <p>© 2026 MZ Agency. All rights reserved.</p>

        <p className="footer-credit">By Zenthor</p>

        <Link to="/legal" className="legal-link">
          Legal Notice
        </Link>

      </div>

    </footer>
  )
}

export default Footer