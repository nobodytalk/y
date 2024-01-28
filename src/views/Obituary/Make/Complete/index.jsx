import React, {useEffect, useState} from 'react';
import Header from '../../../../components/Header';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';
import {Wrapper,
        Container,
        MainContent,
        SubContent} from './styled';
import MainContainer from '../../../../components/MainContainer';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../../store/global';
import {ObituaryGetPost} from '../../../../api/obituary';

const Complete = () => {
    const Dispatch = useDispatch();
    const params = useParams();
    const [obituary_item, set_obituary_item] = useState('');
    useEffect(() => {
        if(!obituary_item){
            Dispatch(SetLoading(1));
            ObituaryGetPost({ obituary_ID: params.obituary_ID })
            .then(response => {
                if(response.data.code == '200') {
                    set_obituary_item(response.data.body);
                    Dispatch(SetLoading(0));
                }
            })
        }
    });
    return (
        <MainContainer>
            <Wrapper>
                <Header title="부고 등록 완료" onHome />
                <Container>
                    <MainContent>
                        <img src={process.env.PUBLIC_URL + "/checkRound.png"} />
                            <p>부고 등록 완료</p>
                            <span>삼가 고인의 명복을 빕니다</span>
                    </MainContent>
                    <SubContent>
                    <table>
                        <tr>
                            <td>고인명</td>
                            <td>故{obituary_item.deceased}</td>
                        </tr>
                        <tr>
                            <td>별세일</td>
                            <td>{obituary_item.death_date}</td>
                        </tr>
                    </table>
                    </SubContent>
                </Container>
                <ButtonGroup position="bottom">
                    <Button type="default" to={'/obituary/' + params.obituary_ID + "/indemnity/guide"}>부의금 신청</Button>
                    <Button type="primary" to={'/mypage/obituary/' + params.obituary_ID}>부고 보기</Button>
                </ButtonGroup>
            </Wrapper>
        </MainContainer>
    );
};

export default Complete;