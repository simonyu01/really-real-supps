import hero from "../assets/hero-img.png";
import micro from "../assets/microscope.png";
import trans from "../assets/trans-blob.png";
import dose from "../assets/dose.png";

function HomePage() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Real Supplements <br></br> Real Results
          </h1>
          <h2 className="hero-subtitle">
            Clean and simple supplements <br></br>proven to optimize fitness and
            health
          </h2>
          <button className="button-primary">Shop Now</button>
        </div>
        <div className="hero-img-container">
          <img src={hero} alt="" className="hero-img" />
        </div>
      </div>

      <div className="section-container" style={{ backgroundColor: "white" }}>
        <div className="release-section">
          <h2 className="section-title" style={{ margin: "2em 0 2em 0" }}>
            New Releases
          </h2>
          <div className = "product-cards">
            <div className = "product-card">

            </div>
            <div className = "product-card">

            </div>
            <div className = "product-card">

            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="info-section">
          <h2 className="section-title" style={{ margin: "2em 0 2em 0" }}>
            What Makes Us "Really Real"?
          </h2>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon-container">
                <img src={micro} alt="microscope" className="info-icon" />
              </div>
              <h3 className="section-heading" style={{ margin: "0" }}>
                Proven Ingredients
              </h3>
              <h4 className="section-text" style={{margin: "1em 0 0 0"}}>
                We steer clear of trendy or fad ingredients. Instead, we rely on
                ingredients that are supported by research and have undergone
                rigorous peer-reviewed tests to ensure quality and
                effectiveness.
              </h4>
            </div>
            <div className="info-card">
              <div className="info-icon-container">
                <img src={dose} alt="microscope" className="info-icon" />
              </div>
              <h3 className="section-heading" style={{ margin: "0" }}>
                Effective Dosages
              </h3>
              <h4 className="section-text" style={{margin: "1em 0 0 0"}}>
                Quality ingredients are nothing without effective dosages.
                That's why each ingredient in our supplements is included at
                it's scientically proven effective dosage.
              </h4>
            </div>
            <div className="info-card">
              <div className="info-icon-container">
                <img src={trans} alt="microscope" className="info-icon" />
              </div>
              <h3 className="section-heading" style={{ margin: "0" }}>
                Full Transparency
              </h3>
              <h4 className="section-text" style={{margin: "1em 0 0 0"}}>
                Our supplements are free of proprietary blends and cheap filler
                ingredients, so you know exactly what you are paying for.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>lol</h1>
      </div>
    </div>
  );
}

export default HomePage;
