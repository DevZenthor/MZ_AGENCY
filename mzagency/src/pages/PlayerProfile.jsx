import { useParams } from "react-router-dom"
import players from "../data/playersData"

function PlayerProfile() {
  const { slug } = useParams()
  const player = players.find(p => p.slug === slug)

  if (!player) return <h2 style={{ padding: "120px 40px" }}>Player not found</h2>

  return (
    <section className="profile-page">

      <div className="profile-container">

        <div className="profile-image">
          <img src={player.image} alt={player.name} />
        </div>

        <div className="profile-content">

          <h1>{player.name}</h1>
          <span className="profile-role">{player.role}</span>

          <div className="profile-info">

            <div className="info-box">
              <span>Nationality</span>
              <p className="nationality">
                <img
                  src={player.flag}
                  alt={player.nationality}
                  className="flag-img"
                />
                {player.nationality}
              </p>
            </div>

            <div className="info-box">
              <span>Team</span>
              <p>{player.team}</p>
            </div>

            <div className="info-box">
              <span>Power Ranking</span>
              <p>{player.pr}</p>
            </div>

            {player.ranking && (
              <div className="info-box">
                <span>EU Ranking</span>
                <p>#{player.ranking}</p>
              </div>
            )}

          </div>

          <div className="profile-buttons">
            <a href={player.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>

            {player.tracker !== "#" && (
              <a href={player.tracker} target="_blank" rel="noopener noreferrer">
                Fortnite Tracker
              </a>
            )}
          </div>

        </div>

      </div>

    </section>
  )
}

export default PlayerProfile