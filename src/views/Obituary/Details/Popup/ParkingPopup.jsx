import React from 'react';
import Popup from '../../../../components/Popup';
import {
    ParkingWrapper,
    ParkingTitle,
    ParkingContent,
    ParkingNotice,
} from './styled';

const phoneIcon = 
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
        <g fill="none" fill-rule="evenodd">
            <g fill="#D8D8D8" fill-rule="nonzero">
                <g>
                    <g>
                        <path d="M15.198 11.564c-.613 0-1.214-.096-1.783-.284-.28-.095-.623-.008-.793.167l-1.125.849c-1.303-.696-2.107-1.5-2.793-2.793l.824-1.096c.214-.213.29-.526.198-.819-.189-.572-.285-1.173-.285-1.786 0-.442-.36-.802-.802-.802H6.802C6.36 5 6 5.36 6 5.802 6 10.874 10.126 15 15.198 15c.442 0 .802-.36.802-.802v-1.832c0-.442-.36-.802-.802-.802z" transform="translate(-133 -211) translate(70 144) translate(57 62)"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>


const ParkingPopup = (props) => {

    const CopyAccount = (e) => {
        document.execCommand('copy');
        e.target.focus();
        alert('주소가 복사가 완료되었습니다.')
    }
    
    
    return (
        <Popup show={props.show} onClose={props.onClose} onCloseButton={props.onClose} padding="12px" borderRadius="12px">
            <ParkingWrapper>
                <ParkingTitle>
                    <h1>주차안내</h1>
                </ParkingTitle>
                <ParkingContent>
                    <h2>{props.items ? props.items.post_title : ''}</h2>
                    <p onClick={CopyAccount} >{props.items ? props.items.address : ''}</p>
                    <a href={"tel:"+props.items.tel}><span>{phoneIcon}{props.items ? props.items.tel : ''}</span></a>
                    <div />
                </ParkingContent>
                <ParkingNotice>
                    <div>
                        <h3>간편주차</h3>
                        <h4>{props.items_parking.parking_info ? props.items_parking.parking_info : '주차 정보가 아직 등록되지 않았습니다.'}</h4>
                        <p></p>
                    </div>
                    <h3>주차비</h3>
                    <h4>{props.items_parking.parking_amount ? props.items_parking.parking_amount : '주차 정보가 아직 등록되지 않았습니다.'}</h4>
                </ParkingNotice>
            </ParkingWrapper>
        </Popup>
    );
};

export default ParkingPopup;