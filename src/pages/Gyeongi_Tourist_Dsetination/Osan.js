/*global kakao*/
import styled from "styled-components";
// import Footer from '../components/Footer';
import React, { useEffect } from 'react';


const Osan= () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.151600, 127.071000),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.151600, 127.071000); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])

    const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      
      .castle {
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
    <>
    <Wrapper>
    <div className="castle" id="map" style={{width:"400px", height:"300px"}}></div>
      <p className="describe">
      오산시의 행정 구역은 6개의 행정동과 24개의 법정동으로 구성되어 있다. 오산시의 인구는 2020년 6월 말 주민등록 기준으로 22만 8,111명, 9만 7,348가구이다. 오산시의 면적은 42.74 km2로 경기도의 0.4%에 해당한다.
      </p>
    </Wrapper>
    </>
  )
}



export default Osan ;