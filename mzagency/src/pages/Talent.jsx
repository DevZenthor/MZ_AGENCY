import players from "../data/playersData"
import { Link } from "react-router-dom"

function Talent() {

  // Séparation Players / Coaches
  const proPlayers = players.filter(p => p.role === "Player")
  const coaches = players.filter(p => p.role === "Coach")

  return (
    <main className="talent-page">

      <h1 className="page-title">Our Talent</h1>

      {/* ================= PLAYERS ================= */}
      <section className="talent-group">

        <h2 className="group-title">Players</h2>

        <div className="talent-grid">

          {proPlayers.map(player => (
            <Link
              key={player.slug}
              to={`/player/${player.slug}`}
              className="talent-card"
            >
              <div className="card-content">

                <img
                  src={player.image}
                  alt={player.name}
                />

                <h3>{player.name}</h3>

                <span className="status">
                  {player.team}
                </span>

              </div>
            </Link>
          ))}

        </div>

      </section>

      {/* ================= COACHES ================= */}
      <section className="talent-group">

        <h2 className="group-title">Coaches</h2>

        <div className="talent-grid">

          {coaches.map(coach => (
            <Link
              key={coach.slug}
              to={`/player/${coach.slug}`}
              className="talent-card"
            >
              <div className="card-content">

                <img
                  src={coach.image}
                  alt={coach.name}
                />

                <h3>{coach.name}</h3>

                <span className="status">
                  {coach.team}
                </span>

              </div>
            </Link>
          ))}

        </div>

      </section>

    </main>
  )
}

export default Talent