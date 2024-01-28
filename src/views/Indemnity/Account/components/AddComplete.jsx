import React, {useEffect, useState} from 'react';
import MainContainer from '../../../../components/MainContainer';
import Header from '../../../../components/Header';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';
import{
    CompleteWrapper,
    Container,
    MainContent,
} from '../styled';

import {IndemnityGetPosts} from '../../../../api/indemnity';
import {useParams} from 'react-router-dom';

const AddComplete = () => {

    const params = useParams();
    const [obi_add, set_obi_add] = useState('');


    useEffect(() => {
        if(!obi_add) {
            IndemnityGetPosts({
                obituary_ID: params.obituary_ID
            })
            .then((response) =>{
                if(response.data.code == "200"){
                }
            })
            .catch((error) => console.log(error))
        }
        
    })
    return (
        <MainContainer>
            <CompleteWrapper>
                <Header title="부의금 서비스 추가 완료" onHome to={"/obituary/"+params.obituary_ID+"/indemnity/account"}/>
                <Container>
                    <MainContent>
                        <img src={process.env.PUBLIC_URL + '/checkRound.png'} />
                        <p>
                            부의금 계좌 추가 등록이<br/>
                            완료 되었습니다.
                        </p>
                        <span>
                            등록하신 계좌로 방문하신<br/>
                            조문객들에게 정중하게 전달됩니다.
                        </span>
                    </MainContent>
                </Container>
                <ButtonGroup position="bottom">
                    <Button type="primary" to={"/obituary/"+params.obituary_ID+"/indemnity/account"}>완료</Button>
                </ButtonGroup>
            </CompleteWrapper>
        </MainContainer>
    );
};

export default AddComplete;