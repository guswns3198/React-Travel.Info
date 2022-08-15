/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Wavebridge = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.9444883, 128.2321939),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(36.9444883, 128.2321939); 
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
      기암으로 이루어진 봉우리의 경관이 뛰어나 소금강이라고도 한다. 희고 푸른 여러 개의 봉우리가 마치 대나무 싹과 같다고 하여 옥순봉이라고 이름붙였다. 기암괴봉이 거대한 병풍처럼 펼쳐지면서 청풍호와 어우러져 뛰어난 경관을 연출한다. 연산군 때 김일손은 《여지승람》에, 이중환은 《산수록》에 이곳의 뛰어난 경치를 칭송하였다. 주변에 강선대와 이조대가 마주보고 있는데, 강선대는 높이 15m의 층대가 있고 대 위에는 100여 명이 앉을 수 있을 만큼 넓다.
     </p>
    </Wrapper>
    </>
  )
}



export default Wavebridge;