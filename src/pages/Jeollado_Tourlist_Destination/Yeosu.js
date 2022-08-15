/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Yeosu = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(34.75249911, 127.69185),
      level: 10
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(34.75249911, 127.69185); 
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
      남해안 중앙의 여수반도에 위치하고 있어 동쪽은 경상남도 남해군과 바다를 사이에 두고 접하며, 서쪽은 순천만을 끼고 고흥반도의 동남쪽, 남쪽은 남해, 북쪽은 순천시와 접한다. 해안선 총길이는 905.87㎞이며, 연륙도 3개, 유인도 46개, 무인도 268개의 부속도서가 있다. 산맥과 구릉이 동에서 남으로 뻗어 있어 대체로 경사가 급하며 평지가 적다. 해안선은 복잡하고 해저(海底)가 얕아 간석지가 많다. 여수시 도심에 솟아있는 종고산(鐘鼓山)을 중심으로 그 둘레에 시가지가 형성되어 있으며, 좁은 해안평지를 따라 동쪽은 마래산(馬來山), 서쪽은 구봉산록(九鳳山麓)에 이르는 4㎞ 지역에 걸쳐 길게 뻗어 있다.
      </p>
    </Wrapper>
    </>
  )
}



export default Yeosu;