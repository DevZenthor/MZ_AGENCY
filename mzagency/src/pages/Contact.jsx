import { FaXTwitter } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { RiTeamLine } from "react-icons/ri"

function Contact() {
  return (
    <section className="contact-page">

      {/* ===== TITLE ===== */}

      <h1 className="page-title">Contact MZ Agency</h1>

      <p className="contact-sub">
        Partnerships, recruitment, business inquiries — we respond fast.
      </p>


      {/* ===== CONTACT GRID ===== */}

      <div className="contact-grid">

        {/* TWITTER */}

        <a
          href="https://x.com/MZ_AGENCY"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaXTwitter size={34} />
          <h3>@MZ_AGENCY</h3>
          <span>Official Twitter</span>
          <p>News, announcements & public contact</p>
        </a>


        {/* EMAIL */}

        <a
          href="mailto:metzmanagement.contact@gmail.com"
          className="contact-card"
        >
          <HiOutlineMail size={34} />
          <h3>Email</h3>
          <span>Business inquiries</span>
          <p>Sponsorships, contracts, partnerships</p>
        </a>


        {/* JOIN AGENCY */}

        <a
          href="mailto:metzmanagement.contact@gmail.com?subject=Join MZ Agency"
          className="contact-card highlight"
        >
          <RiTeamLine size={34} />
          <h3>Join MZ Agency</h3>
          <span>Player application</span>
          <p>Apply to become part of our talent roster</p>
        </a>

      </div>

    </section>
  )
}

export default Contact