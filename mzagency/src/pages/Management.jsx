import zenthor from "../assets/zenthor.jpg"
import marcok from "../assets/marcok.jpg"

function Management() {

  const managers = [
    {
      name: "Zenthor",
      role: "Co-Founder & Manager",
      bio: "Co-founder of MZ Agency. Focused on scouting, talent development and long-term player careers.",
      img: zenthor,
      twitter: "https://x.com/zenthor1480"
    },
    {
      name: "Marcok",
      role: "Co-Founder & Manager",
      bio: "Co-founder of MZ Agency. Responsible for player support, communication and competitive growth.",
      img: marcok,
      twitter: "https://x.com/marcokttv"
    },
  ]

  return (
    <main className="page-content">

      <section className="management-section">

        <h2 className="section-title">Management</h2>

        <div className="management-grid">
          {managers.map((m, i) => (
            <a
              key={i}
              href={m.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="management-card"
            >
              <img src={m.img} alt={m.name} />

              <h3>{m.name}</h3>

              <span className="management-role">
                {m.role}
              </span>

              <p className="management-bio">
                {m.bio}
              </p>
            </a>
          ))}
        </div>

      </section>

    </main>
  )
}

export default Management