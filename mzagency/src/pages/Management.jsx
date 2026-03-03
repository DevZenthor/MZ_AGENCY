import zenthor from "../assets/zenthor.jpg"
import marcok from "../assets/marcok.jpg"

function Management() {

  const managers = [
    { name: "Zenthor", img: zenthor, twitter: "https://x.com/" },
    { name: "Marcok", img: marcok, twitter: "https://x.com/" },
  ]

  return (
    <section className="talent-section">
      <h2 className="section-title">Managers</h2>

      <div className="talent-grid">
        {managers.map((manager, index) => (
          <a key={index} href={manager.twitter} target="_blank" rel="noopener noreferrer" className="talent-card">
            <div className="card-content">
              <img src={manager.img} alt={manager.name} />
              <h3>{manager.name}</h3>
              <span className="status">Manager</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Management