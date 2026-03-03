import { FaXTwitter } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"

function Contact() {
  return (
    <section className="talent-section">
      <h2 className="section-title">Contact</h2>

      <div className="talent-grid">
        <a href="https://x.com/MZ_AGENCY" target="_blank" className="talent-card">
          <div className="card-content">
            <FaXTwitter size={28} />
            <h3>@MZ_AGENCY</h3>
            <span className="status">Twitter</span>
          </div>
        </a>

        <a href="mailto:metzmanagement.contact@gmail.com" className="talent-card">
          <div className="card-content">
            <HiOutlineMail size={28} />
            <h3>Email</h3>
            <span className="status">Business</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact