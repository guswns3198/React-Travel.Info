/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Jindo = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(34.4563352, 126.29180064),
      level: 10
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(34.4563352, 126.29180064); 
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
      진도는 소백산맥의 지맥인 화원산맥(花源山脈)의 침강으로 형성된 섬이다. 해안선의 굴곡이 심하고 곳곳에 만입이 발달하여 리아스식 해안을 이루고 있다. 지질은 백악기 반암과 응회암이 대부분이고, 산성화산암류와 불국사화강암으로 구성되어 있다. 섬의 약 70％가 산지로 되어 있으며, 남동부는 급경사를 이루고 북서부는 완경사를 이룬다.

동쪽의 첨찰산(尖察山, 485m)이 최고봉을 이룬다. 남쪽에는 여귀산(女貴山, 457m)이 있고, 북쪽에는 200m 내외의 산들이 분포한다. 평야는 대체로 북서부의 구릉지 사이에 소규모로 분포한다. 하천은 인지천(仁智川)·석교천(石橋川)·이십오천(二十五川)·진도천 등의 소하천이 있다.

온화한 해양성기후로 동백나무·후박나무 등의 상록활엽수가 자라고 있다. 1월 평균기온은 -0.6℃, 8월 평균기온은 22.4℃, 연강수량은 1,019㎜이다. 비가 내리거나 안개가 끼고 흐린 날이 210여일로 많은 편이다.
[네이버 지식백과] 진도 [珍島] (한국민족문화대백과, 한국학중앙연구원)
      </p>
    </Wrapper>
    </>
  )
}



export default Jindo;