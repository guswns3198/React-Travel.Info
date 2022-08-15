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


const Cheonjiyeon = () => {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.239244, 126.554417),
            level: 5
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(33.239244, 126.554417); 
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
                천지연폭포(天地淵瀑布)는 제주도 서귀포시 서귀동에 있는 폭포이다. ‘천지연’이란 이름은 ‘하늘(天)과 땅(地)이 만나서 이룬 연못’이라는 뜻이다.

폭포의 절벽은 화산활동으로 인해 생성된 조면암이 섞인 안산암으로 이루어져있다. 폭포수의 폭은 약 12 m 높이는 22 m, 연못의 수심은 약 20 m이다. 계곡에는 아열대성·난대성의 각종 상록수와 양치식물 등이 밀생하는 울창한 숲을 이룬다.
                </p>
            </Wrapper>
        </>
    )
}

export default Cheonjiyeon