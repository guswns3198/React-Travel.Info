/*global kakao*/
import styled from "styled-components";
import Footer from '../components/Footer';
import React, { useEffect } from 'react';



const LotteWorld = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5111158, 127.098167),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.5111158, 127.098167); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    
    .lotteworld {
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
      <div className="lotteworld" id="map" style={{width:"400px", height:"300px"}}></div>
      
        <p className="describe">
        서울특별시 송파구 올림픽로 240에 위치한 건물 면적 581,645㎡, 대지 면적 128,246㎡ 규모의 복합쇼핑몰. 더 넓은 의미로는 해당 단지 뿐만이 아니라 롯데그룹 본사가 입주해있는 롯데월드타워와 롯데월드몰, 롯데월드 아쿠아리움, 롯데워터파크도 포함된다. 1989년 7월 12일에 실내 테마파크 롯데월드 어드벤처가 정식으로 개장하고, 1990년 3월 24일 호수공원 매직아일랜드가 개장하면서 완전한 모습을 갖추었다. 총 투자 비용은 6,500억원이며, 운영은 롯데그룹의 계열사인 호텔롯데의 월드사업부에서 하고 있다. 서울 지하철 2호선 및 8호선 잠실역과 지하통로로 연결되어 있으며, 3번 출구 및 4번 출구를 통해서도 지상으로 접근이 가능하다. 대한민국에서 최대규모의 쇼핑몰부터 시작해서 영화관, 테마파크까지 자연경관만을 제외한다면 없는게 없는 곳이다. 페라리 월드 다음으로 세계 최대 규모의 실내 테마파크인 어드벤처와 세계에서 다섯번 째로 가장 높은 마천루 빌딩인 롯데타워가 쌍두마차를 이루면서 OECD GDP순위 10위의 경제대국이자 선진국인 한국의 위엄을 보여준다.
        </p>
      </Wrapper>
  
    )
  }



export default LotteWorld;