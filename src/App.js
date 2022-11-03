import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Nav from './components/Nav';
import Jeju from './pages/Jeju';
import FAQ from './pages/FAQ';
import Event from "./pages/Event";
import InKorea from "./pages/InKorea";
import Overseas from "./pages/Overseas";
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
import {useReducer} from 'react'

const reducer = (state, action) => {
  if(action.type === 'loadUrl')
	return action.payload 
  // dispatch를 props로 내리고, 원하는 action을 설정하면,
  // action에 따라 원하는 사진을 이벤트 페이지의 대문 사진으로 지정할 수 있습니다.
  // 아래 <Main>컴포넌트 참고
}


function App() {
  const [state, dispatch] = useReducer(reducer, 'https://img.modetour.com/eagle/photoimg/23273/Bfile/635737695951882259.jpg');

  return (
    <div className="container">
        <Router>
            <Nav />
              <Routes>
                <Route path="/" element={<Main dispatch = {dispatch}/>} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Event" element={<Event state = {state}/>} />
                <Route path="/InKorea" element={<InKorea />} />
                <Route path="/Overseas" element={<Overseas />} />
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
