import React, { useEffect, useState} from 'react';
import Header from '../../../../components/Header';
import MainContainer from '../../../../components/MainContainer';
import Input from '../../../../components/Input';
import InputBind from '../../../../components/InputBind';
import InputGroup from '../../../../components/InputGroup';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';
import {MessageWriteWrapper,
        MessageWriteTitle,
        MessageWrteContent,
        Counter
    } from '../styled';

import {useParams} from 'react-router-dom';
import Joi from 'joi-browser';
import {ObituaryInsertComments} from '../../../../api/obituary';

const MessageWrite = () => {
    const params = useParams();
    const [textLength, set_textLength] = useState(0);
    const [comment_content, set_comment_content] = useState('');
    const [comment_author_name, set_comment_author_name] = useState('');
    const [select, set_select] = useState('');
    const [readonly, set_readonly] = useState('');
    const resetTextLength = (e) => {
        set_textLength(e.target.value.length);
        set_select(e.target.value);
    }

    const SelectMessage = (e) => {
        set_select(e.target.value);
        console.log(e.target.value);
        if(!(e.target.value)){
            set_readonly(0);
        } else {
            set_readonly(1);
        }
    }

    const Submit = (e) => {
        const schema ={
            select: Joi.string()
                .required()
                .error(() => ({message: '조문 메시지를 입력해주세요.'})),
            comment_author_name: Joi.string()
                .required()
                .error(() => ({message: '메시지 남기는 분의 성함을 입력해주세요.'}))
            }
            const {error} = Joi.validate({
                select: select,
                comment_author_name: comment_author_name,
            }, schema)
            if(error){
                alert(error.details[0].message);
                console.log(error);
            } else {
                ObituaryInsertComments ({
                    obituary_ID: params.obituary_ID,
                    comment_content: select,
                    comment_author_name: comment_author_name,
                })
                .then((response) => {
                    if(response.data.code == "200"){
                        window.location.href=(isfront == 'front' ? '/front' : '')+'/obituary/'+params.obituary_ID+'/messagelist/';
                    }
                })
                .catch((error) => console.log(error))
            }
        }
        
    const isfront = window.location.pathname.slice(1,6);

    return (
        <MainContainer>
            <Header onHome={isfront == 'front' ? 0 : 1} onClose to={(isfront == 'front' ? '/front' : '')+"/obituary/"+params.obituary_ID+"/messagelist"} title="조문 메시지 작성"/>
            <MessageWriteWrapper>
                <MessageWriteTitle>
                    <h1>마지막 가시는 길<br/>조문메시지를 전하세요.</h1>
                </MessageWriteTitle>
                <MessageWrteContent>
                    <InputGroup bottom="6px">
                        <InputBind>
                            <Input type='select' width="100%" padding placeholder='삼가 고인의 명복을 빕니다.' onChange={SelectMessage} paddingRight= "40px">
                                <option value="">직접입력</option>
                                <option value="삼가 고인의 명복을 빕니다.">삼가 고인의 명복을 빕니다.</option>
                                <option value="뜻밖의 비보에 슬픈 마음을 금할 길 없어 삼가 고인의 명복을 빕니다.">뜻밖의 비보에 슬픈 마음을 금할 길 없어 삼가 고인의 명복을 빕니다.</option>
                                <option value="큰 슬픔을 위로하오며 삼가 고인의 명복을 빕니다.">큰 슬픔을 위로하오며 삼가 고인의 명복을 빕니다.</option>
                            </Input>
                        </InputBind>
                    </InputGroup>
                    <InputGroup bottom="6px">
                        <InputBind>
                            <Input type='textarea' value={select} onChange={resetTextLength} width="100%" height="180px" padding="16px 0 32px 0" placeholder='조문 메시지를 직접 입력하세요.' maxLength="200" readOnly={readonly}/>
                            <Counter>{textLength} / 200</Counter>
                        </InputBind>
                    </InputGroup>
                    <InputGroup>
                        <InputBind>
                            <Input type='textbox' width="100%"  padding placeholder='메시지 남기시는 분 성함을 입력해주세요.' onChange={(e)=>set_comment_author_name(e.target.value)}/>
                        </InputBind>
                    </InputGroup>
                </MessageWrteContent>
            </MessageWriteWrapper>
            <ButtonGroup position="bottom">
                <Button type="default" to={(isfront == 'front' ? '/front' : '')+"/obituary/"+params.obituary_ID+"/messagelist"}>취소</Button>
                <Button type="primary" onClick={Submit}>글 남기기</Button>
            </ButtonGroup>
        </MainContainer>
    );
};

export default MessageWrite;