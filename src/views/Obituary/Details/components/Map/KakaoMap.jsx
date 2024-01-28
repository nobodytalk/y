/*global kakao*/
import React,{ useEffect, Component } from 'react';
import {
    MapContents,
} from './styled';


class KakaoMap extends Component {
    
    componentDidMount() {
        // console.log(this.props);
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=391b73b3a2b9ff332b5d9e4538578ba2&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
        kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
                center: new kakao.maps.LatLng(
                    this.props.lat, this.props.lng
                ),
                level: 7
            };
        const map = new window.kakao.maps.Map(container, options);
        map.setDraggable(0);    
        map.setZoomable(0);    

        let markerPosition = new kakao.maps.LatLng(
            this.props.lat, this.props.lng
        );

        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map);
        });
    };
}
    
    render() {
        return <MapContents id="Mymap"><div id="map" style={{ width: "100vw", height: "100vh" }}></div></MapContents>;
    }
}
  
  
export default KakaoMap;