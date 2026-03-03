import p1 from "../assets/hydranix.jpg"
import p2 from "../assets/oeht.jpg"
import p3 from "../assets/eyozz.jpg"
import p4 from "../assets/lix.jpg"
import p5 from "../assets/raphou.jpg"
import p6 from "../assets/dreyqan.jpg"
import p7 from "../assets/novax.jpg"
import p10 from "../assets/zuki.jpg"

import coach1 from "../assets/yushin.jpg"
import coach2 from "../assets/baki.jpg"

function Talent() {

  const players = [
    { name: "Hydranix", img: p1, twitter: "https://x.com/HYDRANIX_T" },
    { name: "Oeht", img: p2, twitter: "https://x.com/Oehtftn" },
    { name: "Eyozz", img: p3, twitter: "https://x.com/EyozzFn" },
    { name: "Lix", img: p4, twitter: "https://x.com/1plixx" },
    { name: "Raphou", img: p5, twitter: "https://x.com/RPafout" },
    { name: "Dreyqan", img: p6, twitter: "https://x.com/dreyqan" },
    { name: "Novax", img: p7, twitter: "https://x.com/novax7q" },
    { name: "Zuki", img: p10, twitter: "https://x.com/" } // 🔥 ajouté
  ]

  const coaches = [
    { name: "Coach Yushin", img: coach1, twitter: "https://x.com/coachyushin" },
    { name: "Coach Baki", img: coach2, twitter: "https://x.com/Coach_baki" },
  ]

  return (
    <section className="talent-section">

      <h2 className="section-title">Players</h2>
      <div className="talent-grid">
        {players.map((player, index) => (
          <a key={index} href={player.twitter} target="_blank" rel="noopener noreferrer" className="talent-card">
            <div className="card-content">
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <span className="status">Player</span>
            </div>
          </a>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: "100px" }}>Coaches</h2>
      <div className="talent-grid">
        {coaches.map((coach, index) => (
          <a key={index} href={coach.twitter} target="_blank" rel="noopener noreferrer" className="talent-card">
            <div className="card-content">
              <img src={coach.img} alt={coach.name} />
              <h3>{coach.name}</h3>
              <span className="status">Coach</span>
            </div>
          </a>
        ))}
      </div>

    </section>
  )
}

export default Talent