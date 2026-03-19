import { useParams } from "react-router-dom"
import players from "../data/playersData"

import { FaXTwitter } from "react-icons/fa6"
import { HiOutlineExternalLink } from "react-icons/hi"

function PlayerProfile() {

  const { slug } = useParams()
  const player = players.find(p => p.slug === slug)

  if (!player) return <h2 style={{ paddingTop: 120 }}>Player not found</h2>

  return (
    <section className="profile-page">

      <div className="profile-container">

        {/* LEFT — IMAGE */}
        <div className="profile-image">
          <img src={player.image} alt={player.name} />
        </div>

        {/* RIGHT — INFO */}
        <div className="profile-info">

          <h1>{player.name}</h1>
          <span className="role">{player.role}</span>

          {/* STATS */}
          <div className="profile-stats">

            <div className="stat-box">
              <span>Nationality</span>
   <strong className="flag-only">
  <img src={player.flag} alt={player.nationality} />
</strong>
            </div>

            <div className="stat-box">
              <span>Team</span>
              <strong>{player.team}</strong>
            </div>

            <div className="stat-box">
              <span>Power Ranking</span>
              <strong>{player.pr}</strong>
            </div>

            {player.ranking && (
              <div className="stat-box">
                <span>EU Ranking</span>
                <strong>#{player.ranking}</strong>
              </div>
            )}

          </div>

          {/* SOCIALS */}
          <div className="profile-links">

            <a
              href={player.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaXTwitter /> Twitter
            </a>

            {player.tracker !== "#" && (
              <a
                href={player.tracker}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <HiOutlineExternalLink /> Tracker
              </a>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default PlayerProfile