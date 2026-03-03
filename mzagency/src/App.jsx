import './App.css'

import logo from './assets/MZ.svg'

import p1 from './assets/hydranix.jpg'
import p2 from './assets/oeht.jpg'
import p3 from './assets/eyozz.jpg'
import p4 from './assets/lix.jpg'
import p5 from './assets/raphou.jpg'
import p6 from './assets/dreyqan.jpg'
import p7 from './assets/novax.jpg'
import p8 from './assets/yushin.jpg'
import p9 from './assets/baki.jpg'

import zenthor from './assets/zenthor.jpg'
import marcok from './assets/marcok.jpg'

import { FaXTwitter } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"

function App() {

  const players = [
    { id: 1, name: "Hydranix", status: "One Prodige", img: p1, twitter: "https://x.com/HYDRANIX_T" },
    { id: 2, name: "Oeht", status: "EOZ ESPORT", img: p2, twitter: "https://x.com/Oehtftn" },
    { id: 3, name: "Eyozz", status: "F/A", img: p3, twitter: "https://x.com/EyozzFn" },
    { id: 4, name: "Lix", status: "One Prodige", img: p4, twitter: "https://x.com/1plixx" },
    { id: 5, name: "Raphou", status: "EGY", img: p5, twitter: "https://x.com/RPafout" },
    { id: 6, name: "dreyqan", status: "F/A", img: p6, twitter: "https://x.com/dreyqan" },
    { id: 7, name: "Novax", status: "F/A", img: p7, twitter: "https://x.com/novax7q" },
    { id: 8, name: "Coach Yushin", status: "F/A", img: p8, twitter: "https://x.com/coachyushin" },
    { id: 9, name: "Coach Baki", status: "F/A", img: p9, twitter: "https://x.com/Coach_baki" },
  ]

  const managers = [
    { name: "Zenthor", status: "Manager", img: zenthor, twitter: "https://x.com/" },
    { name: "Marcok", status: "Manager", img: marcok, twitter: "https://x.com/" },
  ]

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="MZ Logo" />
            <span>MZ Agency</span>
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#talent">Talent</a></li>
            <li><a href="#management">Management</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <img src={logo} alt="MZ Logo" className="hero-logo" />
        <h2>Developing the next wave of esports talent</h2>
        <p>Rising players • Creators • Champions in the making</p>
        <div className="hashtag">#MZAGENCY</div>
      </section>

      {/* ================= TALENT ================= */}
      <section className="talent-section" id="talent">
        <h2 className="section-title">Our Talent</h2>

        <div className="talent-grid">
          {players.map((player) => (
            <a
              key={player.id}
              href={player.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="talent-card"
            >
              <div className="card-content">
                <img src={player.img} alt={player.name} />
                <h3>{player.name}</h3>
                <span className="status">{player.status}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= MANAGEMENT ================= */}
      <section className="talent-section" id="management">
        <h2 className="section-title">Management</h2>

        <div className="talent-grid">
          {managers.map((manager, index) => (
            <a
              key={index}
              href={manager.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="talent-card"
            >
              <div className="card-content">
                <img src={manager.img} alt={manager.name} />
                <h3>{manager.name}</h3>
                <span className="status">{manager.status}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

 {/* ================= CONTACT ================= */}
<section className="contact-section" id="contact">
  <h2 className="section-title">Contact</h2>

  <div className="talent-grid">

    <a
      href="https://x.com/MZ_AGENCY"
      target="_blank"
      rel="noopener noreferrer"
      className="talent-card"
    >
      <div className="card-content">
        <FaXTwitter className="contact-icon" />
        <span className="status">Twitter</span>
      </div>
    </a>

    <a
      href="metzmanagement.contact@gmail.com"
      className="talent-card"
    >
      <div className="card-content">
        <HiOutlineMail className="contact-icon" />
        <span className="status">Email</span>
      </div>
    </a>

  </div>
</section>
    </>
  )
}

export default App