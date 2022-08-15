/*global kakao*/
import React, { useEffect } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
display: flex;
justify-content: center;

.castle {
    width: 400px;
    height: 300px;
}

.describe {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 300px;
    padding: 0px 30px;
    font-weight: 600;
}

`

const Halla_mountain = () => {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.213795, 126.320850),
            level: 5
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(33.24749501, 126.553175); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

        }, [])

    return (
        <>
            <Wrapper>
                <div className="castle" id="map" style={{width:"400px", height:"300px"}}></div>
                
                <p className="describe">
                대한민국에서 가장 큰 섬인 제주도에 있으며 대한민국의 실효 지배 영토 내의 최고봉[6]이자 가장 높은 산(해발 1,947m).[7] 대한민국의 국립공원 중 하나다.[8] 국립공원 전역이 유네스코 세계유산으로 지정되었다.[9] 그리고 대한민국의 실효지배 영토 내 해상 활화산이다.[10] 이름을 풀이하면 운한(雲漢: 은하수, 또는 높은 하늘)을 당긴다(拏)는 뜻으로 은하수를 붙잡을 정도로 높은 산이라는 뜻이다.[11] 금강산, 지리산과 함께 대한민국 삼신산(三神山) 중 하나로 꼽힌다.
                </p>
            </Wrapper>
        </>
    )
}

export default Halla_mountain;