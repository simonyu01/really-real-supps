import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Counter from "../components/Counter";

function ProductPage() {
  const flavors = ["Chocolate", "Vanilla", "Strawberry"];
  const [selected, setSelected] = useState(flavors[0]);
  const { product } = useParams();
  const id = product.charAt(product.length - 1);

  const handleFlavorChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-container">
          <ProductCard id={id} className="big-svg" />
        </div>
        <div style={{ margin: "0 0 0 4em" }}>
          <h2 className="product-title" style={{ margin: "0" }}>
            Product Name
          </h2>
          <h2 className="product-text">★★★★★</h2>
          <p className="product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <h2 className="product-text" style={{ fontWeight: "600" }}>
            $400 / ea
          </h2>
          <div>
            {flavors.map((flavor, index) => (
              <label key={index} className="flavor-button">
                <input
                  type="radio"
                  name="flavors"
                  value={flavor}
                  checked={selected === flavor}
                  onChange={handleFlavorChange}
                  id={index}
                />
                {flavor}
              </label>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "1em 0",
            }}
          >
            <Counter />
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="supplement-info">
          <h2 className="section-title">Supplement Info</h2>
        </div>
      </div>
      <div className = "section-container" style={{ backgroundColor: "white" }}>
        <div className="product-review">
          <h2 className="section-title">Reviews</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
