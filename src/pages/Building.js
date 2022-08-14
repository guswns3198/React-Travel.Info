/*global kakao*/ 
import styled from "styled-components";
import Footer from '../components/Footer';
import React, { useEffect } from 'react';



const Building = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5193776, 126.9402103),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.5193776, 126.9402103); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    
    .building {
      width: 400px;
      height: 300px;
    }

    .describe {
      width: 800px;
      height: 300px;
      padding-left: 100px;
      font-weight: 600;
    }

  `

return (
  <Wrapper>
  <div className="building" id="map" style={{width:"400px", height:"300px"}}></div>
  
    <p className="describe">
    설명 1980년 2월 착공하여 총공사비 1800억 원을 들여 1985년 5월 완공되었다. 2000년 통합법인 (주)63시티가 설립되었으며 2002년 한화그룹에 편입되었다. 해발 265m인 남산보다 1m 낮다. 4∼19층, 23∼37층 및 40∼53층은 일반사무실용, 나머지는 사무실 기능을 보조하는 각종 부대시설과 전망대·수족관 등 초고층건물의 이점을 상술에 이용한 관광공간을 마련한 점이 특징이다. 건물구조는 전체가 탄력성을 지녀 초속 30m 내외의 태풍이나 진도 5 정도의 지진을 만났을 때, 좌우 진동의 유연성은 60cm, 상층부가 바람에 의해 움직이는 범위는 좌우 40cm인데 이는 내부의 사람이 느낄 수 없는 흔들림이다. 한편, 첨단기술의 빌딩 자동관리 시스템을 도입, 건물 내의 이상이나 화재 발생시에는 컴퓨터에 체크되어 중앙관제실과 방재센터에서 통제하게 되어 있다. 관광용 시설로는 전망대(63골든타워), 특수시설물로는 수족관(63 시월드), 인간의 시야를 극대화한 I MAX (24×20m의 초대형 화면) 영화관이 있다. 이 건물은 우리나라에서 세 번째로 높은 초고층빌딩이다.
    </p>
  </Wrapper>

)
}



export default Building;