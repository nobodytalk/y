import React, { useState, useRef, useEffect } from 'react';
import MainContainer from '../../../components/MainContainer';
import {Link} from 'react-router-dom';
import Joi from 'joi-browser';
import { useInterval } from 'react-interval-hook';
import Header from '../../../components/Header';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';
import Label from '../../../components/Label';
import {AuthWrapper,
    Container,
    Timer,
    AuthExp,
    Policy,
} from './styled';
import { smsAuth, smsSignUp } from '../../../api/auth';


const checkIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                        <g fill="none" fill-rule="evenodd">
                            <g>
                                <g>
                                    <g transform="translate(-35 -97) translate(20 80) translate(15 17)">
                                        <circle cx="13.5" cy="13.5" r="13" fill="#FFF" stroke="#CFCFCF"/>
                                        <path fill="#CFCFCF" fill-rule="nonzero" d="M11.546 18c-.163 0-.327-.062-.451-.185l-3.908-3.868c-.25-.247-.25-.647 0-.893.25-.247.653-.247.902 0l3.457 3.421 7.365-7.29c.25-.247.652-.247.902 0s.25.646 0 .893l-7.816 7.737c-.124.123-.288.185-.451.185z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>)

const Auth = (props) => {
    const [countDown, setCountdown] = useState(180);
    const [request, on_request] = useState(0);
    const [button_type, set_button_type] = useState("");
    const [button_color, set_button_color] = useState("#888");
    
    const [user_name, set_user_name] = useState('');
    const [user_birth_1, set_user_birth_1] = useState('');
    const [user_birth_2, set_user_birth_2] = useState('');
    const [user_phone_company, set_user_phone_company] = useState('');
    const [user_phone, set_user_phone] = useState('');
    const [sms_auth_code, set_sms_auth_code] = useState('');
    const [term_ok, set_term_ok] = useState(0);

    const onPhoneAuth = (e) => {
        const schema = {
            term_ok: Joi.bool()
                .required()
                .error(() => ({message: '이용약관에 동의해주세요.'})),
            user_name: Joi.string()
                .required()
                .error(() => ({message: '이름을 확인해주세요.'})),
            // user_phone_company: Joi.string()
            //     .required()
            //     .error(() => ({message: '통신사를 선택해주세요.'})),
            user_phone: Joi.string()
                .required()
                .error(() => ({message: '휴대폰번호를 확인해주세요.'})),
        };
        const {error} = Joi.validate({
            term_ok: term_ok,
            user_name: user_name,
            user_phone: user_phone,
        },schema)

        if(error) {
            alert(error.details[0].message);
        } else {

            smsAuth({
                user_name: user_name,
                user_phone: user_phone
            }).then(res => {
                if(res.data.code == '200') {
                    alert('인증번호가 발송되었습니다.');
                    on_request(1);
                    setCountdown(180);
                    start();
        
                    set_button_type("primary");
                    set_button_color("#fff");
                }
            }).catch(error => alert(error));
        }
        
    }

    const SubmitAuth = (e) => {
        e.preventDefault();

        const schema = {
            term_ok: Joi.bool()
                .required()
                .error(() => ({message: '이용약관에 동의해주세요.'})),
            user_name: Joi.string()
                .required()
                .error(() => ({message: '이름을 확인해주세요.'})),
            // user_phone_company: Joi.string()
            //     .required()
            //     .error(() => ({message: '통신사를 선택해주세요.'})),
            user_phone: Joi.string()
                .required()
                .error(() => ({message: '휴대폰번호를 확인해주세요.'})),
            sms_auth_code: Joi.string()
                .required()
                .error(() => ({message: '인증번호를 입력해주세요.'})),
        };

        const {error} = Joi.validate({
            term_ok: term_ok,
            user_name: user_name,
            user_phone: user_phone,
            sms_auth_code: sms_auth_code,
        },schema)

        if(error) {
            alert(error.details[0].message);
        } else {
            smsSignUp({
                user_name: user_name,
                user_phone: user_phone,
                sms_auth_code: sms_auth_code
            }).then(res => {
                if(res.data.code == 200) {
                    //반환값을 통해 로그인 처리
                    localStorage.setItem('user_token', res.data.body.user_token);
                    window.location.href='/';
                } else {
                    alert(res.data.body.message);
                }
            }).catch(err => alert(err));
            
        }
    }
    
    

   
    // var tim = 0;
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.round(seconds % 60);
        return [
          h,
          m > 9 ? m : (h ? '0' + m : m || '0'),
          s > 9 ? s : '0' + s
        ].filter(Boolean).join(':');
      }

    const { start, stop, isActive } = useInterval(
        () => {
            // console.log('Callback every 500 ms');
            setCountdown(countDown => countDown - 1);
            if(countDown <= 1) {
                stop();
            }
        },
        1000,
        {
            autoStart: false,
            immediate: false,
            selfCorrecting: false,
            onFinish: () => {
                console.log('Callback when timer is stopped');
            },
        }
    );


    const setBirth1TextLength = e => {
        if (e.target.value.length === 7) return;
        set_user_birth_1(e.target.value);
        
    }
    const setBirth2TextLength = e => {
        if (e.target.value.length === 2) return;
        set_user_birth_2(e.target.value);
    }

    return (
        <MainContainer>
            {/* <KCPCert/> */}
            <AuthWrapper>
                <Header title="휴대폰 본인인증" onBack to='/login' border="#f2f2f2"/>
                <Container>
                    <InputGroup bottom='20px'>
                        <InputBind>
                            <Input type='checkbutton' onChange={(e)=>set_term_ok(e.target.checked)} id="1" value="본인확인 서비스 이용약관 전체 동의" width="100%">
                                {checkIcon}
                            </Input>
                        </InputBind>
                    </InputGroup>
                    <InputGroup bottom='20px'>
                        <InputBind>
                            <Label>이름</Label><Input type='textbox' placeholder='이름' onChange={(e)=>set_user_name(e.target.value)} name="user_name"/>
                        </InputBind>
                    </InputGroup>
                    <InputGroup bottom='5px'> 
                        <InputBind>
                            <Label>휴대번호</Label><Input type='phoneNum' onChange={(e)=>set_user_phone(e.target.value)} placeholder='직접 입력'/>
                        </InputBind>
                    </InputGroup>
                    <Button onClick={onPhoneAuth} color="#ba8600" bgColor="#f7f7f7" borderColor="#ededed" size="15px">{!request ? '인증번호 발송' : '재발송' }</Button>
                    {!request ? '' : <>
                        <InputGroup top="15px" border="#111">
                            <InputBind>
                                <Input type="number" onChange={(e)=>set_sms_auth_code(e.target.value)}/>
                                <Timer>{formatTime(countDown)}</Timer>
                            </InputBind>
                        </InputGroup>
                    </>}
                    <AuthExp>※본인 명의 휴대폰 번호만 인증이 가능합니다</AuthExp>
                    <Policy><Link to='/policy/service'>이용약관</Link> 및 <Link to='/policy/privacy'>개인정보처리방침</Link></Policy>
                </Container>
                <ButtonGroup position='bottom'>
                    <Button onClick={SubmitAuth} color={button_color} type={button_type}>
                        동의하고 시작하기
                    </Button>
                </ButtonGroup>
            </AuthWrapper>
        </MainContainer>
    );
};

export default Auth;