import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Jeju from './pages/Jeju';
import "./App.css";


function App() {
  return (
    <div className="container">
        <Router>
            <Nav />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Jeju" element={<Jeju />} />
              </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
