import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";

import "./stylesheets/styles.css";
import "./stylesheets/homeStyles.css";
import "./stylesheets/compStyles.css";
import "./stylesheets/productStyles.css";
import "./stylesheets/authStyles.css";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import { CartProvider } from "./components/CartContext";

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
            <CartProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:product" element={<ProductPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/account/login" element={<LoginPage />} />
                <Route path="/account/register" element={<RegisterPage />} />
                <Route path="/cart" element={<CartPage />} />

              </Routes>
            </CartProvider>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
