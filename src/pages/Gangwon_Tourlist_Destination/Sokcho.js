/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Sokcho = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(38.20465, 128.5886),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(38.20465, 128.5886); 
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
      인천광역시 연수구 송도동 도심에 있는 송도국제도시를 대표하는 공원.

고밀도 주거-상업구역이 밀집한 송도국제도시의 중앙에, 주민들이 잠시 쉴 수 있는 대형 녹지를 마련하는 것이 이 공원의 첫 목표였다. 대한민국의 지형 특징을 살려 만들었는데, 공원 내부에는 대한민국의 산맥을 표현한 언덕들과, 바다를 표현한 호수, 그리고 섬들이 있다. 공원 중심을 가로지르는 인공 호수는 해수를 끌어들여 사용한다. 그 위로 수상택시 및 보트, 카약등을 이용할 수 있다. 카약 요금은 25,000원이다.[2]

송도 센트럴파크는 송도국제도시의 제 1공구에 위치한 공원이다. 여의도공원의 약 2배 넓이다.

관광객들이 늘어나면서 송도국제도시의 명소이자 상징이 되었다. 관광객 증가로 인근 주민들은 해돋이 공원이나 미추홀 공원, 북쪽의 달맞이 공원 등을 더 많이 이용하는 편이다.

송도 초기에 건설된 프로젝트답게, 센트럴파크 주변으로는 수려한 경관을 가진 주상복합 및 건물들이 많아 평판이 좋다.
     </p>
    </Wrapper>
    </>
  )
}



export default Sokcho;