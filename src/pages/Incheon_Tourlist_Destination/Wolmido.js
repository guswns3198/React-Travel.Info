/*global kakao*/
import styled from "styled-components";
// import Footer from '../components/Footer';
import React, { useEffect } from 'react';



const Wolmido = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.47539975, 126.5978148),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.47539975, 126.5978148); 
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
지명은 섬의 생김새가 반달의 꼬리처럼 휘어져 있는 데에서 유래되었다. 1900년대 초까지 부천시 영종면에 속하였다가 1914년 9월 1일 인천부에 편입되었다.

원래는 인천역에서 서쪽으로 1km 거리에 있는 면적 0.66㎢의 섬이었으나, 1920년대 초 돌축대를 쌓아 내륙과 연결되면서 세관검역소측후소무선전신국을 비롯한 각종 기관들이 들어섰다. 현재 해안도로에는 놀이시설과 유흥시설이 늘어서 있으며, 1987년 7월 월미도 문화의 거리가 조성된 이래 문화예술 공연과 월미축제 등 각종 행사가 다채롭게 펼쳐지고 있다.

현재 소월미도와 함께 인천 내항(內港) 북서쪽의 방파제 구실을 하는 이 섬은 역사적 현장으로도 유명하다. 1895년 영국 순양함이 월미도 앞바다에서 침몰하여 군인 448명이 익사한 사건이 있었으며, 1904년 2월 9일 소월미도 앞바다에서 러시아 전함이 일본 전함과 부딪쳐 침몰하면서 러일전쟁의 발단을 일으키기도 하였다. 인천항의 개항 전후로는 외세의 각축으로 수난을 겪었고, 일제강점기에는 한때 군사기지로 이용되었다. 625전쟁 때는 인천상륙작전의 전초지였으며, 1950년 이후 오랫동안 국제연합군이 주둔하였다. 1866년 병인양요(丙寅洋擾) 때 인천 앞바다에 정박했던 프랑스 함대의 대장 이름을 따서 한때 외국 지도에 로즈섬(Rose Island)으로 소개되기도 하였다
      </p>
    </Wrapper>
    </>
  )
}



export default Wolmido;