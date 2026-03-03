import logo from "../assets/MZ.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-text">
          © {new Date().getFullYear()} MZ Agency. All rights reserved.
        </p>

        <p className="footer-by">
          By Zenthor
        </p>

        <img src={logo} alt="MZ Logo" className="footer-logo" />

      </div>
    </footer>
  )
}

export default Footer