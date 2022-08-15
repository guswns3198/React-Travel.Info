/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Taean = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.6961863, 126.2291591),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(36.6961863, 126.2291591); 
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
      삼면이 서해와 접하는 반도 지형으로, 일대를 '태안반도'라고 부른다. 동쪽으로는 서산시와 접하는데, 2021년 11월까지는 다른 육지로 어딜 가든 무조건 서산을 거쳐야만 외지로 나갈 수 있었다. 천수만을 거쳐 홍성으로도 나간다 하더라도 천수만 일대가 행정구역상 서산인지라 이 역시 서산을 거쳐가는 것이 필수였으나, 2021년 12월에 보령 해저터널이 완공되어서 서산을 거치지 않고 유일하게 다른 지역으로 나갈 수 있는 경로가 생겼다.

이러한 지리적 특성에다가 역사적으로 現 태안군 지역이 1989년 이전까지는 서산군 관할이었던 점이 겹쳐서, 서산시와 일상에서 상당히 많은 분야에서 공유하는 게 많다. 경찰과 소방업무도 서산경찰서와 서산소방서에서 맡아 왔으나, 2013년 11월에는 태안소방서가, 2017년 11월에는 태안경찰서가 개서하며 독자적인 경찰 및 소방업무가 가능해졌다.[2] 다만 해경의 경우 태안해양경찰서가 예전부터 독자적으로 존재했다.

3면이 바다인 것과 더불어 해안선이 복잡하고 섬이 많은 서해안 특성상 지도를 보면 서쪽 해안선이 상당히 꼬불꼬불해서, 태안반도 안에 또 여러개의 자잘한 반도 지형과 섬들이 위치한 모습을 볼 수 있다.
      </p>
    </Wrapper>
    </>
  )
}



export default Taean;