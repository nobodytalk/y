import React from 'react';
import Popup from '../../../components/Popup';
import {
    ReturnContent,
} from './styled';

const ReturnPopup = (props) => {
    return (
        <Popup show={props.show} borderRadius="50px" padding="16px 45px 16px 20px" onClose={props.onClose}>
            <ReturnContent>
                <h1>답례메시지를 수정할 수 있습니다.</h1>
                <div />
            </ReturnContent>
        </Popup>
    );
};

export default ReturnPopup;