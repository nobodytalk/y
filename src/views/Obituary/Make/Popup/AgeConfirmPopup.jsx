import React from 'react';
import Popup from '../../../../components/Popup';
import {Content} from './styled';

const AgeConfirmPopup = (props) => {

    const button = [
        {
            color: '#000',              //default '#111'
            bgColor: '#fff',        //default '#ddd'
            onClick: props.onClose,
        }
    ]

    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="default" button={button} padding="30px 0">
            <Content>
                고인의 나이는 1~999 사이의<br/>
                2자리 이상 숫자를 입력해주세요.
            </Content>
        </Popup>
    );
};

export default AgeConfirmPopup;