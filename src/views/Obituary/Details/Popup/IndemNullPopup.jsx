import React from 'react';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';
import Popup from '../../../../components/Popup';
import { IndemNullStyle } from './styled';

const IndemNullPopup = (props) => {
    return (
        <Popup show={props.show} onClose={props.onClose} padding="20px 10px 75px 10px">
            <IndemNullStyle>
                <p>해당 서비스는 장례식장 방문이<br /> 어려운분들을 위한 편의 기능입니다.</p>
                <p>현재, 상주님이 부의금 서비스를<br/> 신청하지 않아 이용하실 수 없습니다.</p>
                <ButtonGroup position="bottom">
                    <Button onClick={props.onClose} type="popup" bgColor="#24243a" color="#fff">
                        확인
                    </Button>
                </ButtonGroup>
            </IndemNullStyle>
        </Popup>
    );

};

export default IndemNullPopup;