/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Geoje = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(34.8869137, 128.623886),
      level: 10
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(34.8869137, 128.623886); 
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
      경상남도 남부에 위치한 시. 시 면적의 대부분을 차지하는 섬 거제도는 대한민국에서 제주도 다음으로 큰 섬이며 인구도 제주도 다음으로 많고 섬을 본토로 하는 기초자치단체 중에서 유일한 시이다.

철도가 없는 시군구 중 인구가 제일 많다.
      </p>
    </Wrapper>
    </>
  )
}



export default Geoje;