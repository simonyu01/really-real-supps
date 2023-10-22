import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

import "./stylesheets/styles.css";
import "./stylesheets/homeStyles.css";
import "./stylesheets/compStyles.css";
import "./stylesheets/productStyles.css";
import Footer from "./components/Footer";



//https://www.realtimecolors.com/?colors=130e01-ffffff-A0DDE4-113045-0CABB7&fonts=Lora-Nunito

//https://www.realtimecolors.com/?colors=130e01-d5d2ff-61edff-113045-2EF084&fonts=Lora-Nunito

//https://www.realtimecolors.com/?colors=113045-d5d2ff-61edff-113045-2EF084&fonts=Lora-Nunito

//1LXfok37!p!4

function App() {
  return (
    <div>
      <div className="background-container">
        <div className="content">
          <Navbar />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:product" element={<ProductPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
