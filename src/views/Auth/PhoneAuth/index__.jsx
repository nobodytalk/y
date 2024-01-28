import React, { useState, useRef, useEffect } from 'react';
import MainContainer from '../../../components/MainContainer';
import {Link, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global'; 
import Joi from 'joi-browser';
import { useInterval } from 'react-interval-hook';
import Header from '../../../components/Header';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';
import Label from '../../../components/Label';
import KCPCert from '../KCPCert';
import {SignUp} from '../../../api/auth';
import {AuthWrapper,
    Container,
    Timer,
    AuthExp,
    Policy,
} from './styled';

const Auth = (props) => {
    const params = useParams();
    
    return (
        <MainContainer>
            <KCPCert sns_auth={params.sns_id ? {sns_id: params.sns_id, platform: params.platform} : ''}/>
        </MainContainer>
    );
};

export default Auth;