import logo from "../assets/MZ.svg"
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <img src={logo} alt="MZ Logo" className="hero-logo" />

        <h1>MZ Agency</h1>

        <p className="hero-sub">
          Developing the next wave of esports talent
        </p>

        <div className="hero-buttons">

          {/* 👉 PAGE TALENT */}
          <button
            className="btn-primary"
            onClick={() => navigate("/talent")}
          >
            View Talent
          </button>

          {/* 👉 SCROLL CONTACT */}
          <button
            className="btn-outline"
            onClick={() => navigate("/contact")}
          >
            Join MZ Agency
          </button>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stats-grid">

          <div className="stat-card">
            <h3>7</h3>
            <p>Professional Players</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>Countries Represented</p>
          </div>

          <div className="stat-card">
            <h3>20K+</h3>
            <p>Total PR Combined</p>
          </div>

          <div className="stat-card">
            <h3>2025</h3>
            <p>Founded</p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-section">

        <h2>About MZ Agency</h2>

        <p>
          MZ Agency is dedicated to discovering, developing, and managing
          the next generation of esports champions.
          We provide professional guidance, performance support,
          and brand opportunities to rising talent across Europe.
        </p>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <h2>Ready to take your career to the next level?</h2>

        <button
          className="btn-primary big"
           onClick={() => navigate("/contact")}
        >
          Apply Now
        </button>

      </section>

    </>
  )
}

export default Home