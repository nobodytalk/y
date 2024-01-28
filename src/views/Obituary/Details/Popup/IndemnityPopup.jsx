import React from 'react';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import Popup from '../../../../components/Popup/';

const IndemnityPopup = (props) => {
    return (
        <Popup show={props.show} onCloseButton={props.onClose} onClose={props.onClose} padding="65px 0px 100px 0px">
            부의금 서비스 신청을 하지 않았습니다.
            <ButtonGroup position="bottom">
                <Button type="primary" onClick={props.onClose}>확인</Button>
            </ButtonGroup>
        </Popup>
    );
};

export default IndemnityPopup;