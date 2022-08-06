import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Nav from './components/Nav';
import Jeju from './pages/Jeju';
import FAQ from './pages/FAQ';
import Event from "./pages/Event";
import Cebu from "./pages/Cebu";
import Laos from "./pages/Laos";
import Singapore from "./pages/Singapore";
import KotaKinabalu from "./pages/Kota Kinabalu";
import EastEurope from "./pages/East Europe";
import Australia from "./pages/Australia";
import LasVegas from "./pages/Las Vegas";
import Spain from "./pages/Spain";
import Mongolia from "./pages/Mongolia";
import "./App.css";


function App() {
  return (
    <div className="container">
        <Router>
            <Nav />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Jeju" element={<Jeju />} />
                <Route path="/Event" element={<Event />} />
                <Route path="/Cebu" element={<Cebu />} />
                <Route path="/Laos" element={<Laos />} />
                <Route path="/Singapore" element={<Singapore />} />
                <Route path="/KotaKinabalu" element={<KotaKinabalu />} />
                <Route path="/EastEurope" element={<EastEurope />} />
                <Route path="/Australia" element={<Australia />} />
                <Route path="/LasVegas" element={<LasVegas />} />
                <Route path="/Spain" element={<Spain />} />
                <Route path="/Mongolia" element={<Mongolia />} />
              </Routes>
        </Router>
    </div>
  );
}

export default App;
