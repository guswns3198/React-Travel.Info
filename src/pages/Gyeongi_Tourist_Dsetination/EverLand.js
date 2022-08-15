/*global kakao*/
import styled from "styled-components";
// import Footer from '../components/Footer';
import React, { useEffect } from 'react';


const EverLand = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.293486, 127.203439),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.293486, 127.203439); 
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
      에버랜드 리조트의 드라이 파크인 에버랜드는 다채로운 축제와 어트랙션, 동물원과 가든으로 구성된 글로벌 테마파크입니다. 5개의 테마존과 시즌마다 모습을 달리하는 다양한 축제, 최신 어트랙션 등 다채로운 시설과 서비스로 고객들에게 최고의 즐거움을 선사합니다.
      </p>
    </Wrapper>
    </>
  )
}



export default EverLand ;