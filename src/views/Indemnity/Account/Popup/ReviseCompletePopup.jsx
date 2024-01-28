import React from 'react';
import Popup from '../../../../components/Popup';
import{
    Revise,
} from './styled';

const ReviseCompletePopup = (props) => {
    const button = [
        {
            title:"확인",
        }
    ]
    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="default" button={button}>
            <Revise>
                <h1>부의금 계좌가 수정되었습니다.</h1>
            </Revise>
        </Popup>
    )
}

export default ReviseCompletePopup;