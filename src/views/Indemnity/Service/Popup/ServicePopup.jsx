import React from 'react';
import Popup from '../../../../components/Popup';
import {
    ServicePopupWrapper,
    ServicePopupContent,
} from './styled';

const ServicePopup = (props) => {
    return (
        <Popup show={props.show} onClose={props.onClose} onCloseButton buttonType>
            <ServicePopupWrapper>
                <ServicePopupContent>
                    <h1>부의금 보내기 안내</h1>
                    <p>∙부의금서비스를 신청하신 상주의 계좌번호를 안내합니다.</p>
                    <p>∙개인정보보호를 위해 상주 계좌번호는 모두 노출되지 않습니다</p>
                    <p>∙계좌복사 : 상주계좌를 금융권앱에 바로 입력</p>
                    <p>∙안내받기 : 문자, 카카오톡으로 안내받기</p>
                </ServicePopupContent>
            </ServicePopupWrapper>
        </Popup>
    );
};


export default ServicePopup;