import React, {useState} from 'react';
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';
import { QnaInsertPost } from '../../../api/qna';
import Joi from 'joi-browser';
import {QnaWrapper,
    QnaTitle,
    QnaContent,
    Counter
} from '../styled';

const Qna = () => {

    const [user_email, set_user_email] = useState('');
    const [user_question, set_user_question] = useState('');
    const [textLength, set_textLength] = useState(0);
    const setQuestion = (e) => {
        set_user_question(e.target.value);
        set_textLength(e.target.value.length);
    }

    const Submit = (e) => {
        const schema = {
            user_email: Joi.string()
                .required()
                .error(() => ({message: '이메일을 확인해주세요.'})),
            user_question: Joi.string()
                .required()
                .error(() => ({message: '문의하실 내용을 확인해주세요.'}))
        };
        const {error} = Joi.validate({
            user_email: user_email,
            user_question: user_question
        }, schema)
        if(error) {
            alert(error.details[0].message);
        } else {
            QnaInsertPost({

            })
            .then((response) => {
                if(response.data.code == '200') {
                    window.location.href='/qna/complete';
                }
            })
            .catch(error => console.log(error))
        }
    } 

    return (
        <MainContainer>
            <Header onHome hamburger onBack to="/#/" title="1:1 문의"/>
            <QnaWrapper>
                <QnaTitle>
                    <h1>소중한 문의 감사합니다.</h1>
                </QnaTitle>
                <QnaContent>
                    <InputGroup bottom="6px">
                        <InputBind>
                            <Input type='textbox' name="user_name" onChange={(e) => set_user_email(e.target.value)} width="100%" padding placeholder='이메일을 입력해주세요.' />
                        </InputBind>
                    </InputGroup>
                    <InputGroup>
                        <InputBind>
                            <Input type="textarea" name="user_question" onChange={setQuestion} width="100%" padding="20px 20px 20px 0px" placeholder="문의하실 내용을 입력하세요." maxLength="200"/>
                            <Counter>{textLength} / 200</Counter>
                        </InputBind>
                    </InputGroup>
                </QnaContent>
            </QnaWrapper>
            <ButtonGroup position="bottom">
                <Button type="primary" onClick={Submit}>문의하기</Button>
            </ButtonGroup>
        </MainContainer>
    );
};

export default Qna;