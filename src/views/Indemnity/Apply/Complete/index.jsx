import React from 'react';
import MainContainer from '../../../../components/MainContainer';
import Header from '../../../../components/Header';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';
import {
    Wrapper,
    Container,
    MainContent,
} from './styled';

const IndemnityComplete = () => {
    return (
        <MainContainer>
            <Wrapper>
                <Header title="부의금 서비스 신청 완료" onHome to="/" />
                <Container>
                    <MainContent>
                        <img src={process.env.PUBLIC_URL + '/checkRound.png'} />
                        <p>
                            부의금 서비스 신청이<br/>
                            완료 되었습니다.
                        </p>
                        <span>
                            상주님이 등록하신 은행 계좌번호로<br/>
                            부득이 조문을 못오는 조문객들이<br/>
                            요청이 있을 경우에 한하여 <br/>
                            정중하게 전달 됩니다.
                        </span>
                    </MainContent>
                </Container>
                <ButtonGroup position="bottom">
                    <Button type="primary" to="/obituary/list">완료</Button>
                </ButtonGroup>
            </Wrapper>
        </MainContainer>
    );
};

export default IndemnityComplete;