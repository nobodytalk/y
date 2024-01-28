import React, {useEffect, useState} from 'react';
import Joi from 'joi-browser';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../store/global'; 
import {useLocation, useParams} from 'react-router-dom';
import {SnsAuth} from '../../api/auth';

const AppleCallback = () => {
    let { search } = useLocation();
    let params = useParams();
    const query = new URLSearchParams(search);
    const Dispatch = useDispatch();
    const [is_load, set_load] = useState(0);
    useEffect(() => {
        if(!is_load) {
            set_load(1);
            Dispatch(SetLoading(1));
            
            if(params.sns_id) {
                localStorage.setItem('user_token', params.sns_id);
                window.location.href='/';
            }
            // // console.log(params.sns_id);
            // SnsAuth({
            //     id: params.sns_id,
            //     type: 'apple'
            // })
            // .then(response=> {
            //     if(response.data.code == '200') {
            //         localStorage.setItem('user_token', response.data.body.user_token);
            //         window.location.href='/';
            //     } else if (response.data.code == '400') {
            //         window.location.href='/auth/apple/'+params.sns_id;
            //     } 
            //     Dispatch(SetLoading(0)); // 로딩
            // })
            // .catch(err=>{
            //     alert('서버오류가 발생하였습니다.');
            //     Dispatch(SetLoading(0)); // 로딩
            // });
        //     const schema = {
        //         user_name: Joi.string()
        //             .required()
        //             .error(() => ({message: '인증정보가 잘못되었습니다. 처음부터 다시 진행해주세요.'})),
        //         user_birth_1: Joi.string()
        //             .required()
        //             .error(() => ({message: '인증정보가 잘못되었습니다. 처음부터 다시 진행해주세요.'})),
        //         user_birth_2: Joi.string()
        //             .required()
        //             .error(() => ({message: '인증정보가 잘못되었습니다. 처음부터 다시 진행해주세요.'})),
        //         user_phone_company: Joi.string()
        //             .required()
        //             .error(() => ({message: '인증정보가 잘못되었습니다. 처음부터 다시 진행해주세요.'})),
        //         user_phone: Joi.string()
        //             .required()
        //             .error(() => ({message: '인증정보가 잘못되었습니다. 처음부터 다시 진행해주세요.'})),
        //     };
        //     const {error} = Joi.validate({
        //         user_name: query.get('user_name'),
        //         user_birth_1: query.get('birth_day'),
        //         user_birth_2: query.get('sex_code'),
        //         user_phone_company: query.get('comm_id'),
        //         user_phone: query.get('phone_no'),
        //     },schema)

        //     // console.log({
        //     //     user_name: query.get('birth_day'),
        //     //     user_birth_1: query.get('birth_day'),
        //     //     user_birth_2: query.get('sex_code'),
        //     //     user_phone_company: query.get('comm_id'),
        //     //     user_phone: query.get('phone_no'),
        //     // });

        //     if(error) {
        //         alert(error.details[0].message);
        //         window.location.href='/';
        //         Dispatch(SetLoading(0));
        //     } else {
        //         SignUp({
        //             user_name: query.get('user_name'),
        //             user_birth_1: query.get('birth_day'),
        //             user_birth_2: query.get('sex_code'),
        //             user_phone_company: query.get('comm_id'),
        //             user_phone: query.get('phone_no'),
        //             sms_auth_code: '',
        //             sns_auth: query.get('param_opt_3') ? {
        //                 type: query.get('param_opt_2'),
        //                 sns_id: query.get('param_opt_3')
        //             } : 0
        //         })
        //         .then((response) => {
        //             if(response.data.code == '200') {
        //                 localStorage.setItem('user_token', response.data.body.user_token);
        //                 window.location.href='/joincomplete/';
        //             } else {
        //                 alert('서버 요청 오류');
        //             }
        //             Dispatch(SetLoading(0));
        //         })
        //         .catch(error => alert('서버 요청 오류'));
        //     }
        }
    }, [is_load]);
    return (
        <div>
        </div>
    );
};

export default AppleCallback;