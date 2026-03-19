import logo from "../assets/MZ.svg"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <img src={logo} alt="MZ Logo" className="footer-logo" />

        <p>© 2026 MZ Agency. All rights reserved.</p>

        <p className="footer-credit">By Zenthor</p>

        <a href="/legal" className="legal-link">
          Legal Notice
        </a>

      </div>

    </footer>
  )
}

export default Footer