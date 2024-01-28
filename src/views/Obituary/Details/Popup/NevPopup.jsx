import React from 'react';
import Popup from '../../../../components/Popup';
import {
    NevTitle,
    KakaoNev,
    Tmap,
} from './styled';

const NevPopup = (props) => {
    return (
        <Popup show={props.show} onClose={props.onClose} position="bottom" padding="25px 20px">
            <NevTitle>
                <h1>길안내 받으실 앱을 선택해주세요</h1>
            </NevTitle>
            <KakaoNev>
                <img src={process.env.PUBLIC_URL + '/img/kakaonevimg.png'} alt=""/>
                <h2>
                    <a href={"https://map.kakao.com/link/to/"+encodeURI(props.items.post_title)+","+props.items.y+","+props.items.x}>카카오 내비로 길찾기</a></h2>
            </KakaoNev>
            <Tmap>
                <img src={process.env.PUBLIC_URL + '/img/tmapimg.png'} alt=""/>
                <h2>
                    <a href={"https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xxff548dce540d4e0ebd3c315474b6624b&name="+encodeURI(props.items.post_title)+"&lon="+props.items.x+"&lat="+props.items.y}>티맵으로 길찾기</a>
                </h2>
            </Tmap>
        </Popup>
    );

};

export default NevPopup;