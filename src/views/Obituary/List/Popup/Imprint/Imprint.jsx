import React from 'react';
import Button from '../../../../../components/Button';
import ButtonGroup from '../../../../../components/ButtonGroup';
import Popup from '../../../../../components/Popup';
import{ ImprintPopupWrapper, Content } from './styeld';


const ImprintPopup = (props) => {
    return (
        <ImprintPopupWrapper>
            <Popup show={props.show} onClose={props.onClose} onCloseButton buttonType padding="40px 0px 90px 0px">
                <Content>해당부고는 발인되었습니다.</Content>
                <ButtonGroup position="bottom">
                    <Button type="default" size="Popup" onClick={props.onClose}>닫기</Button>
                    <Button type="primary" size="Popup" color="white" onClick={props.potato }>보기</Button>
                </ButtonGroup>
            </Popup>
        </ImprintPopupWrapper>
    );
};

export default ImprintPopup;