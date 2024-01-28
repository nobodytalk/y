import React from 'react';
import Popup from '../../../../components/Popup';
import{
    Revise,
} from './styled';

const RevisePopup = (props) => {
    const button = [
        {
            onClick: props.onClose,
            width: "40%",
        },
        {
            title: "수정",
            width: "60%"
        }
    ]
    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="primary" button={button} >
            <Revise>
                <h1>부의금 계좌를 수정 하시겠습니까?</h1>
            </Revise>
        </Popup>
    );
};

export default RevisePopup;