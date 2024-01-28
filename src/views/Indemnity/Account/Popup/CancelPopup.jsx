import React from 'react';
import Popup from '../../../../components/Popup';
import {ContentStyle

} from './styled';

const CancelPopup = (props) => {

    const button = [
        {
            onClick: props.onClose,
            width: '40%'
        },
        {
            to: '/',
            width: '60%'
        }
    ]

    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="primary" button={button} >
            <ContentStyle>
                부의금 계좌개설이 완료되지 않았습니다.<br/>
                <span>여기서 나가시겠습니까?</span>
            </ContentStyle>
        </Popup>
    );
};

export default CancelPopup;