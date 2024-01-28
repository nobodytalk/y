import React from 'react';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import { Wrapper } from './styled';
import {useParams} from 'react-router-dom';


const IndemnityGuide = () => {
    const params = useParams();
    return (
        <MainContainer>
            <Wrapper>
                <Header title="부의금 서비스 신청" onBack  to={"/mypage/obituary/"+params.obituary_ID}/>
                <h3>
                    수수료 없는<br/>
                    부의금 계좌 등록
                </h3>
                <p>
                    조문이 어려운 분에 한해 상주님의 계좌를<br/>
                    정중한 방식으로 전달하는 서비스입니다.
                </p>
                <img src={process.env.PUBLIC_URL + '/indemnityGuide.png'} />
                <ButtonGroup position="bottom">
                    <Button type="primary" to={"/obituary/"+params.obituary_ID+"/indemnity/apply"}>신청하기</Button>
                </ButtonGroup>
            </Wrapper>
        </MainContainer>
    );
};

export default IndemnityGuide;