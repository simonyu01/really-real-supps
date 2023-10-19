import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import "./styles.css";

//https://www.realtimecolors.com/?colors=130e01-ffffff-A0DDE4-113045-0CABB7&fonts=Lora-Nunito

//https://www.realtimecolors.com/?colors=130e01-d5d2ff-61edff-113045-2EF084&fonts=Lora-Nunito

//https://www.realtimecolors.com/?colors=113045-d5d2ff-61edff-113045-2EF084&fonts=Lora-Nunito

function App() {
  return (
    <div>
      <div className="background-container">
        <div className="content">
          <Navbar />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
