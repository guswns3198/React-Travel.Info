/*global kakao*/ 
import React, { useEffect } from 'react'



const Seoul=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.57965006, 126.97711797),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.57965006, 126.97711797); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{width:"400px", height:"300px"}}></div>
       
        </div>
    )
}

export default Seoul;