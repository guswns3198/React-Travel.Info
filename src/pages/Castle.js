/*global kakao*/ 
import styled from "styled-components";
import Footer from '../components/Footer';
import React, { useEffect } from 'react';



const Castle = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.57965006, 126.97711797),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.57965006, 126.97711797); 
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
    <Wrapper>
    <div className="castle" id="map" style={{width:"400px", height:"300px"}}></div>
    
      <p className="describe">
      1963년 1월 21일 사적 제117호로 지정되었다. 역성혁명(易姓革命)으로 조선을 세운 이성계(李成桂)와 그 지지자들은 고려의 서울인 개경(開京)으로부터 도읍을 한양성(漢陽城)으로 옮겨 신도(新都) 경영에 착수하는 동시에 궁궐의 조성도 착수하였다.

      1394년(태조 3) 9월 신궐조성도감(新闕造成都監)을 두고 청성백(靑城伯) 심덕부(沈德符), 좌복야 김주(金湊), 전정당문학 이염(李恬), 중추원학사 이직(李稷) 등을 판사에 임명하여 실무를 담당, 해산(亥山:北岳山)을 주산(主山)으로 삼고 임좌병향(壬坐丙向:北北西에 앉아 南南東을 바라다봄)의 터를 잡았다.

      원래 태조는 고려시대 남경(南京)의 이궁(離宮:宮井洞 일대) 터를 마음에 두고 있었으나 새로운 왕조의 뻗어나는 기세를 수용하기에는 너무 좁은 터전이라 하여 그 남쪽에 따로 자리잡았던 것이다. 10월에 한양으로 도읍을 일단 옮긴 태조는 수도 건설에 박차를 가하여, 12월 3일에 궁궐과 종묘를 짓겠다고 산천신(山川神)에게 고사하고, 이튿날 개기(開基)하여 주야로 작업을 진행, 1395년 9월에 낙성을 보게 되었다. 명칭은 《시경》의 ‘군자만년 개이경복(君子萬年 介爾景福)’이란 글귀에서 따서 경복궁이라 하였다. 궁내에 준성된 전각은 총 390여 칸이었다.
      </p>
    </Wrapper>

  )
}



export default Castle;