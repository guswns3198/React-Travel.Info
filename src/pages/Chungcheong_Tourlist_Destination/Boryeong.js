/*global kakao*/
import styled from "styled-components";
import React, { useEffect } from 'react';



const Boryeong = () => {


  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.3043328, 126.5171553),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(36.3043328, 126.5171553); 
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
      대천해수욕장 내에 자리하고 있는 2층 규모의 보령머드체험관은 대한민국 최고의 축제로 자리 잡게 한 보령 머드를 직접 체험하고 머드의 모든 것을 알아볼 수 있는 공간이다. 1층과 2층을 포함해 한 번에 460명을 수용할 수 있는 대형 규모로 원래는 머드마사지와 사우나, 머드 스킨케어, 머드 스파 및 아로마탕을 이용하며 머드를 이용한 다양한 체험을 할 수 있도록 조성되었으나 운영난으로 인해 1층은 홍보관 겸 머드 샤워실로, 2층은 머드박물관으로 전환하게 되었다. 입구에는 보령 머드축제를 즐기는 외국인들의 사진과 함께 머드의 효능과 머드테라피, 보령머드 화장품, 대천의 갯벌과 대천해수욕장에 관한 자료들을 모아놓아 보령 머드의 우수성에 대해 알아볼 수 있다. 머드화장품은 다량의 미네랄을 함유하고 보습 효과가 좋은 보령머드를 이용해 만든 스킨, 로션, 에센스 등의 기초화장품으로 대천해수욕장이나 인터넷으로도 구매 가능하다. 머드샤워실에서는 청정 해수로 샤워를 하며 피부에 좋은 보령 머드를 체험해 볼 수 있고 2층의 머드박물관에서는 머드의 모든 것을 한자리에서 살펴볼 수 있다.      </p>
    </Wrapper>
    </>
  )
}



export default Boryeong;