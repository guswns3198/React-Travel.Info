/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Suseongmot = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.8276353, 128.6177221),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(35.8276353, 128.6177221); 
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
      면적은 1215만㎡이다. 1940년대 대구 부공원으로 지정되었고, 1965년 건설부 고시로 수성못 주변 일대를 유원지로 결정 고시하였으며, 1982년 9월 유수지역, 운동지역, 휴양지역, 특수지역, 편입 및 관리지역 지구로 확정하였다. 그뒤 1983년 동대구로와 연결되는 유원지 진입로를 확장함과 동시에 주변 상가와 불량 건물을 대대적으로 정비하면서 본격적인 도시 근접 유원지로 조성되었다.

1986년 빗물과 폐수 분리지역을 설치하고, 수성못 바닥 준설공사로 못의 물을 정화하였으며, 수성못 남동쪽에 880m에 달하는 녹도를 조성하여 느티나무·은행나무·백자작나무·백일홍 등 화목류 26종 1만 8000그루를 심었다. 범물동의 용지봉(634m)에서 북서부로 뻗어내린 완만한 산지와 수성못이 어우러져 경관이 매우 아름답다.

수성못은 면적 21만 8000㎡, 못둘레 2,020m로, 보트놀이도 즐길 수 있다. 수성못 서쪽에는 우주선·유람선·바이킹·범퍼카·회전목마·미니기차 등 갖가지 놀이시설을 갖춘 수성랜드가 들어서 있다.
      </p>
    </Wrapper>
    </>
  )
}



export default Suseongmot;