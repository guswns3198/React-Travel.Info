/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Eulwangri = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.4477326, 126.3725042),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.4477326, 126.3725042); 
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
      을왕리해수욕장은 인천을 대표하는 해수욕장이다. 해수욕장의 뒷쪽은 소나무숲으로 우거져 있고 소나무숲 사이사이에는 여러 편의시설이 구비되어 있어, 해수욕장으로서의 좋은 여건을 두루 갖추고 있다. 충분한 숙박시설이 갖춰져 있고 청소년들의 단체 수련을 위한 학생 야영장이나 수련장 등이 마련되어 있어 학생과 직장인들의 단체 모임 장소로도 인기가 있다. 해수욕장의 북쪽에는 왕산해수욕장이 접해 있다.

을왕리해수욕장에서 맞이하는 낙조도 매우 아름답다. 해가 바닷물에 비쳐 바다 전체가 붉게 물든 것처럼 모습을 드러냈다가 바닷속으로 살며시 빠져드는 광경이 장관이다. 을왕리해수욕장에 접한 왕산해수욕장 일대에서는 매년 8월에 해변씨름대회, 풍어제 등 다양한 해양축제가 개최된다. 인천국제공항의 개장과 더불어 인천대교 및 영종대교가 개통됨에 따라 자동차를 타고 쉽게 접근할 수 있는 곳이 되었다. 수도권에서 당일로 다녀올 수 있는 해수욕장이다.

을왕리해수욕장 일대에 공공하수처리 시설이 없어 생활하수가 그대로 서해로 유입되는 문제가 있었지만, 인천경제청에서는 이 문제를 해결하기 위하여 민간투자사의 도움을 받아 하수처리시설을 설치키로 했다.
[네이버 지식백과] 을왕리해수욕장 [Eurwangri Beach, 乙旺里海水浴場] (한국민족문화대백과, 한국학중앙연구원)
      </p>
    </Wrapper>
    </>
  )
}



export default Eulwangri;