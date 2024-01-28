import React from 'react';
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import {
    QnaCompleteWrapper,
    CompleteContent,
    Complete,
} from '../styled';

const QnaComplete = () => {
    return (
        <MainContainer>
            <Header onHome title="1:1 문의" onClose to="/question/qna"/>
            <QnaCompleteWrapper>
                <CompleteContent>
                    <Complete url="/img/completeimg1.png"/>
                    <h1>고객님의 문의사항이<br /> 접수 완료되었습니다.</h1>
                    <p>빠른 시간안에 답변드리도록<br /> 노력하겠습니다.</p>
                </CompleteContent>
            </QnaCompleteWrapper>
            <ButtonGroup position="bottom">
                <Button type="primary" to="/#/">홈으로 돌아가기</Button>
            </ButtonGroup>
        </MainContainer>
    );
};

export default QnaComplete;