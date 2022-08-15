/*global kakao*/
import styled from "styled-components";
// import Footer from '../components/Footer';
import React, { useEffect } from 'react';


const Minsokchoen= () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.258449, 127.117003),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.258449, 127.117003); 
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
      한국민속촌은 1974년 건립 초기부터 교육적 가치와 관광적 가치를 염두에 둔
최고의 전통문화 테마의 종합관광지를 목적으로 설립되었습니다.
한국민속촌의 조선시대 마을은 각 지방에서 이건 및 복원한 실물 가옥으로 이루어져 있으며,
철저한 고증과 자문을 거쳐 사계절 변화에 따라 생활문화를 재현하고 있습니다.
야외에서 만나는 체험형 전시와 전통방식을 계승한 생활공예, 절기별 세시풍속을 행하며
잊혀 가는 전통문화유산의 가치를 함께 나누고자 노력하고 있습니다.
한국민속촌이 지켜가는 전통문화 속에서 과거와 현재를 경험하고,
미래를 열어갈 새로운 가치를 만나보시길 바랍니다.
      </p>
    </Wrapper>
    </>
  )
}



export default Minsokchoen ;