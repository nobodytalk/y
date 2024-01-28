import React, {useEffect, useState} from 'react';
import Header from '../../../../../components/Header';

import {useParams} from 'react-router-dom';
import {ObituaryGetPost} from '../../../../../api/obituary';
import MainContainer from '../../../../../components/MainContainer';
import { Wrapper } from '../../../../Home/styled';

const PrivacyCollection = (props) => {
    const params = useParams();
    const [obituary_ID, set_obituary_ID] = useState('');

    useEffect(() => {
        if(!obituary_ID){
            ObituaryGetPost({
                obituary_ID: params.obituary_ID
            })
            .then((response) => {
                if(response.data.code == '200') {
                }
            })
            .catch((error) => console.log(error))
        }
    })
    return (
        <MainContainer>
            <Wrapper>
                <Header title="개인정보 수집 및 이용 안내" onClose={props.onClose}/>
                <h3>1. 개인정보의 수집 항목 및 이용 목적</h3>
                <p>
                    회사는 회원(상주 또는 상주 업무자)이 회원가입을 할
                    때 서비스 제공을 위해 필요한 필수적인 최소한의 개인정보를 받고 있습니다. 회사가 회원의 개인정볼르 수집하는 목적은 삼가 앱을 통해 회원에게 최적의 서비스를 제공해 드리기 위한 것이며, 회원이 제공한 개인정볼르 바탕으로 회원에게 보다 더 유용한 정보를 선택적으로
                    제공하기 위한 것입니다.<br/>
                    회사는 관련 법령에 의하거나 기타 아래의 항목을 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
                </p>
                <p>
                    (1) 회원의 정보에 대한 수집목적, 수집항목, 보유기간
                </p>
                <p>
                    회사는 회원(상주 또는 상주 업무자)이 회원가입을 할
                    때 서비스 제공을 위해 필요한 필수적인 최소한의 개인정보를 받고 있습니다. 회사가 회원의 개인정볼르 수집하는 목적은 삼가 앱을 통해 회원에게 최적의 서비스를 제공해 드리기 위한 것이며, 회원이 제공한 개인정볼르 바탕으로 회원에게 보다 더 유용한 정보를 선택적으로
                    제공하기 위한 것입니다.<br/>
                    회사는 관련 법령에 의하거나 기타 아래의 항목을 다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다.
                </p>
            </Wrapper>
        </MainContainer>
    );
};

export default PrivacyCollection;