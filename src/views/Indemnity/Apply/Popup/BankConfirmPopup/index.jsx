import React from 'react';
import Popup from '../../../../../components/Popup';
import {

} from './styled';

const BankConfirmPopup = (props) => {

    const button = [
        {
            color: '#000',              //default '#111'
            bgColor: '#fff',        //default '#ddd'
            onClick: props.onClose
        }
    ]

    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="default" button={button} >
            상주님의 계좌로 인증 되었습니다.
        </Popup>
    );
};

export default BankConfirmPopup;