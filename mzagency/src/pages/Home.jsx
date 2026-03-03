import logo from "../assets/MZ.svg"

function Home() {
  return (
    <section className="hero">
      <img src={logo} alt="MZ Logo" className="hero-logo" />
      <h2>Developing the next wave of esports talent</h2>
      <p>Rising players • Creators • Champions in the making</p>
      <div className="hashtag">#MZAGENCY</div>
    </section>
  )
}

export default Home