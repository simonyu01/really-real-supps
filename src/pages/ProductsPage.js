import ProductCard from "../components/ProductCard.js";

function ProductsPage() {
  return (
    <div className="products">
      <div className="section-container">
        <div className = "products-section">
          <h1 className="section-title products-headline">Products</h1>
          <div className="products-grid">
            <div className="product-card-container">
              <ProductCard id={0} color="" />
              <h3 className="section-text">Pre-Workout</h3>
            </div>
            <div className="product-card-container">
              <ProductCard id={1} color="" />
              <h3 className="section-text">Whey Isolate</h3>
            </div>
            <div className="product-card-container">
              <ProductCard id={2} color="" />
              <h3 className="section-text">Clear Whey</h3>
            </div>
            <div className="product-card-container">
              <ProductCard id={3} color="" />
              <h3 className="section-text">Creatine</h3>
            </div>
            <div className="product-card-container">
              <ProductCard id={4} color="" />
              <h3 className="section-text">Multivitamins</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section-container" style={{ backgroundColor: "white" }}>
        <div className="products-section">
          <h1 className="section-title products-headline">Bundles</h1>
          <div className="products-grid">
            <div className="product-card-container">
              <ProductCard id={5} color="" />
              <h3 className="section-text">The Starter</h3>
            </div>
            <div className="product-card-container">
              <ProductCard id={6} color="" />
              <h3 className="section-text">The Post</h3>
            </div>
            <div className="product-card-container">
              <ProductCard id={7} color="" />
              <h3 className="section-text">The Essentials</h3>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProductsPage;
