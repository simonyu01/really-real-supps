import hero from "../assets/hero-img.png";
import micro from "../assets/microscope.png";
import trans from "../assets/trans-blob.png";
import dose from "../assets/dose.png";
import Pre from "../components/Pre";
import Pill from "../components/Pill";
import Pro from "../components/Pro";
import ReviewCard from "../components/ReviewCard";
import ProductCard from "../components/ProductCard.js";


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
          <div className="product-cards">
            <div className="product-card-container">
              <ProductCard id = {0} color="#FFADAD"/>
              <h3 className = "section-text">Watermelon Pre-Workout</h3>
            </div>
            <div className="product-card-container">
              <div className="product-card">
                <ProductCard id = {0} color="#F1F7B5"/>
              </div>
              <h3 className = "section-text">Mango Pre-Workout</h3>
            </div>
            <div>
              <div className="product-card">
                <h3 className="section-text" style={{ fontSize: "24px" }}>
                  View All
                </h3>
              </div>
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
              <h4 className="section-text" style={{ margin: "1em 0 0 0" }}>
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
              <h4 className="section-text" style={{ margin: "1em 0 0 0" }}>
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
              <h4 className="section-text" style={{ margin: "1em 0 0 0" }}>
                Our supplements are free of proprietary blends and cheap filler
                ingredients, so you know exactly what you are paying for.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container" style={{ backgroundColor: "white" }}>
        <div className="review-section">
          <h2 className="section-title" style={{ margin: "2em 0 2em 0" }}>
            Featured Reviews
          </h2>
          <div className="review-cards">
            <ReviewCard
              title="The Best Pre-Workout Ever"
              stars={5}
              description="Pre-workout usually makes me very jittery. But not this one!"
              name="Ryan C."
              img={<Pre />}
            />
            <ReviewCard
              title="Can't Tell It's a Protein Shake"
              stars={5}
              description="Usually protein shakes feel to heavy, but the clear whey shakes are so refreshing!"
              name="Anna K."
              img={<Pro />}
            />
            <ReviewCard
              title="Great value"
              stars={5}
              description="These multivitamins are not only tasty, but they are going to last me so long."
              name="Christine W."
              img={<Pill />}
            />
            <ReviewCard
              title="No Chalky Texture"
              stars={5}
              description="The worst part of creatine is the chalky texture. The best part of this creatine is the lack of chalky texture."
              name="Adam Y."
              img={<Pre />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
