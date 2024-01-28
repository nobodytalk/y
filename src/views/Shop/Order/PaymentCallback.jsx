import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import {useLocation} from 'react-router-dom';
import qs from 'qs';
import {OrderPaymentCallback} from '../../../api/order';

const PaymentCallback = () => {
    const params = useLocation();
    const Dispatch = useDispatch();
    const [is_load, set_is_load] = useState(0);
    const query = qs.parse(params.search, {
        ignoreQueryPrefix: true // /about?details=true 같은 쿼리 주소의 '?'를 생략해주는 옵션입니다.
    });

    useEffect(() => {
        if(!is_load) {
            Dispatch(SetLoading(1));
            set_is_load(1);
            OrderPaymentCallback({
                imp_uid: query.imp_uid,
                merchant_uid: query.merchant_uid,
            })
            .then(response => {
                console.log(response);
                if(response.data.code == '200') {
                    window.location.href='/complete/'+query.merchant_uid;
                } else {
                    alert(response.data.body.message);
                    window.history.go(-3);
                }
                Dispatch(SetLoading(0));
            })
            .catch(err => console.log(err));
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default PaymentCallback;