// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Jeju from '../pages/Jeju';

function App() {
  return (
    <div>

      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Jeju" element={<Jeju />} />
        </Routes>
      <Footer />

    </div>
    
  );
}

export default App;
