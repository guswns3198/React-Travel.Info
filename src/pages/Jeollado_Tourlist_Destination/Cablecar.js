/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Cablecar = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(34.572815, 126.3088293),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(34.572815, 126.3088293);
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
      하늘에서 만나는 명량대첩 감동과 힐링의 울돌목 회오리
명량해상케이블카는 이순신 장군의 명량대첩 전승지 울돌목 해협 상공을 가로지르는 케이블카로 명량대첩 그날의 감동을 느낄 수 있으며, 바다가 우는 듯한 웅장한 소리와 바닷물이 용솟음치면서 소용돌이가 생기는 울돌목 회오리 장관과 다도해의 아름다운 낙조, 미려한 진도대교가 함께 빚어내는 환상적인 파노라마 뷰를 감상하며 힐링의 시간을 보낼 수 있습니다.
      </p>
    </Wrapper>
    </>
  )
}



export default Cablecar;