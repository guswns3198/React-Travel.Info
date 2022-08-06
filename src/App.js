import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Nav from './components/Nav';
import Jeju from './pages/Jeju';
import FAQ from './pages/FAQ';
import Event from "./pages/Event";
import Cebu from "./pages/Cebu";
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
              </Routes>
        </Router>
    </div>
  );
}

export default App;
