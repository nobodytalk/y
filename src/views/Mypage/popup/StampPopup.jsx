import React from 'react';
import Popup from '../../../components/Popup';
import {
    StampPopupWrapper,
    StampPopupContent,
} from './styled';

const StampPopup = (props) => {
    const button = [
        {
            title: '확인',          //default '취소'
            color: '',              //default '#111'
            bgColor: '#fff',        //default '#ddd'
            onClick: props.onClose,
            width: '100%'            //default '50%'
        },
    ]
    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="default" button={button}>
            <StampPopupWrapper>
                <StampPopupContent>
                    <h1>회원님의 휴대폰 번호로<br/>
                    쿠폰을 발송하였습니다.</h1>
                </StampPopupContent>
            </StampPopupWrapper>
        </Popup>
    );
};

export default StampPopup;