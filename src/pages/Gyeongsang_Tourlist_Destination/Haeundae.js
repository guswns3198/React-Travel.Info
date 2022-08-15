/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Haeundae = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.158697, 129.1603842),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(35.158697, 129.1603842); 
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
      역동적인 해양 도시 부산 해운대구. 해운대 해수욕장은 긴 백사장과 주변에 오락 및 편의시설이 잘 갖춰져 있어 해마다 천만 명의 관광객이 방문한다. 인근에 부산 아쿠아리움과 동백섬, APEC 정상 회의가 열렸던 누리마루 APEC 하우스가 있어 또 다른 볼거리를 제공한다. 한국의 몽마르트 언덕, 달맞이 길에는 바다 전망을 감상할 수 있는 카페들이 있고 특히 벚꽃이 피면 최적의 드라이브 코스로 꼽힌다. 화려한 고층 건물의 불빛들이 아른거리는 마린시티의 야경과 작은 포구마을인 청사포에서 바라보는 저녁달의 모습은 부산의 놓치지 말아야 할 경관!
      </p>
    </Wrapper>
    </>
  )
}



export default Haeundae;