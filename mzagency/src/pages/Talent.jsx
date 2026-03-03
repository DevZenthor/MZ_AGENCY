import { Link } from "react-router-dom"
import players from "../data/playersData"

function Talent() {

  const playersOnly = players.filter(p => p.role === "Player")
  const coachesOnly = players.filter(p => p.role === "Coach")

  return (
    <section className="talent-section">

      <h2 className="section-title">Players</h2>

      <div className="talent-grid">
        {playersOnly.map(player => (
          <Link
            key={player.slug}
            to={`/talent/${player.slug}`}
            className="talent-card"
          >
            <div className="card-content">
              <img src={player.image} alt={player.name} />
              <h3>{player.name}</h3>
              <span className="status">{player.team}</span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: "100px" }}>
        Coaches
      </h2>

      <div className="talent-grid">
        {coachesOnly.map(coach => (
          <Link
            key={coach.slug}
            to={`/talent/${coach.slug}`}
            className="talent-card"
          >
            <div className="card-content">
              <img src={coach.image} alt={coach.name} />
              <h3>{coach.name}</h3>
              <span className="status">{coach.team}</span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}

export default Talent