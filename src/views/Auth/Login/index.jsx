import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import KaKaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';
import AppleSignin from 'react-apple-signin-auth'
import {LoginWrapper,
    Logo,
    MainText,   
    LoginContainer,
    LoginButton,
} from './styled';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import {SnsAuth} from '../../../api/auth';
import { Link } from 'react-router-dom';

const KaKaoBtn = styled(KaKaoLogin)`
`;

const Login = () => {
    const Dispatch = useDispatch();
    const ResponseKaKao = (res) => {
        console.log(res.profile.id);
        Dispatch(SetLoading(1)); // 로딩
        
        SnsAuth({
            id: res.profile.id,
            type: 'kakao'
        })
        .then(response=> {
            if(response.data.code == '200') {
                localStorage.setItem('user_token', response.data.body.user_token);
                window.location.href='/';
            } else if (response.data.code == '400') {
                window.location.href='/auth/kakao/'+res.profile.id;
            } 
            Dispatch(SetLoading(0)); // 로딩
        })
        .catch(err=>{
            alert('서버오류가 발생하였습니다.');
            Dispatch(SetLoading(0)); // 로딩
        });
    }

    const ResponseNaver = (res) => {
        console.log(res.id);
        Dispatch(SetLoading(1)); // 로딩
        
        SnsAuth({
            id: res.id,
            type: 'naver'
        })
        .then(response=> {
            if(response.data.code == '200') {
                localStorage.setItem('user_token', response.data.body.user_token);
                window.location.href='/';
            } else if (response.data.code == '400') {
                window.location.href='/auth/naver/'+res.id;
            } 
            Dispatch(SetLoading(0)); // 로딩
        })
        .catch(err=>{
            alert('서버오류가 발생하였습니다.');
            Dispatch(SetLoading(0)); // 로딩
        });
    }

    const ResponseApple = (res) => {
        console.log(res);
    }
    return (
        <LoginWrapper>
            <Logo/>
            <MainText>
                예를 다하여 품격을<br />
                높여드립니다
            </MainText>
            <LoginContainer>
                <LoginButton className="obituary">
                    <Link to="/front/obituary/make/">로그인 없이 <strong>부고 작성하기</strong></Link>
                </LoginButton>
                <hr/>
                <LoginButton className="phone">
                    <Link to="/auth">휴대폰 번호로 로그인하기</Link>
                </LoginButton>
                <LoginButton className="kakao">
                    <KaKaoBtn
                jsKey={'391b73b3a2b9ff332b5d9e4538578ba2'}
                buttonText='카카오 계정으로 로그인'
                onSuccess={ResponseKaKao}
                getProfile={true}
              />
                </LoginButton>
                <LoginButton className="naver">
                    <NaverLogin 
    clientId="3G_WcMoZqgw9Tcbr42Pd"
    callbackUrl="https://app.yepum.co.kr/login/"
    render={(props) => <div onClick={props.onClick}>네이버로 간편 로그인</div>}
    onSuccess={ResponseNaver}
    onFailure={(result) => console.error(result)}
  />
                </LoginButton>
                <LoginButton className="apple">
                    <AppleSignin
                        authOptions={{
                            clientId: 'com.yepum.apple.signin',
                            scope: 'email',
                            redirectURI: 'https://wp.yepum.co.kr/callback',
                            // state: 'state',
                        }} 
                        uiType="dark"
                        onSuccess={(response) => console.log(response)} // default = undefined
                        onError={(error) => console.error(error)} // default = undefined
                        skipScript={false} // default = undefined
                        iconProp={{ style: { marginTop: '10px' } }} // default = undefined
                        render={(props) => <div {...props}>Apple로 로그인</div>}
                        // responseMode="query" 
                        // responseType="code" 
                        // clientId="com.yepum.apple.signin" 
                        // callback={ResponseApple} 
                        // redirectURI="https://app.yepum.co.kr/login" 
                    />
                </LoginButton> 
            </LoginContainer>
            {/* <ButtonGroup position="bottom">
                <Button type="primary" to="/auth">시작하기</Button>
            </ButtonGroup> */}
        </LoginWrapper>
    );
};

export default Login;