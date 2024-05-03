import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Footer from "./components/Footer/Footer";

import LandingPage from "./pages/LandingPage";
import Volonteers from "./pages/Volonteers";
import Activities from "./pages/Activities";
import Associations from "./pages/Associations";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/volonteri" element={<Volonteers />} />
        <Route path="/aktivnosti" element={<Activities />} />
        <Route path="/udruge" element={<Associations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
