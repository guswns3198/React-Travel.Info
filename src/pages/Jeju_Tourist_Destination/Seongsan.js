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

const Seongsan = () => {

    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.456814, 126.942900),
            level: 5
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(33.456814, 126.942900); 
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
                성산일출봉(城山日出峰)은 제주특별자치도 서귀포시 성산읍 성산리에 있는 산이다.

커다란 사발 모양의 분화구가 특징으로, 분화구 내부의 면적은 129,774m2이다. 높이는 182m이다. 성산 일출봉에서의 일출은 대한민국에서 가장 아름다운 해돋이로 꼽히며 영주십경(瀛州十景) 중 하나이다. 일출봉 분화구와 주변 1km 해역이 성산일출봉 천연보호구역(城山日出峰 天然保護區域, 영어: Seongsan Ilchulbong Tuff Cone Natural Reserve)으로 2000년 7월 18일 대한민국의 천연기념물 제420호로 지정되었다. 또한 2007년 성산 일출봉 응회구의 1.688km2가 제주 화산섬과 용암 동굴의 일부로 세계자연유산으로 등재되었다. 또한 성산일출봉은 일출을 화려하게 구경할수있다.
                </p>
            </Wrapper>
        </>
    )
}

export default Seongsan