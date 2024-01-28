import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import qs from 'qs';
import {IndemnityPaymentCallback} from '../../../api/indemnity';

const PaymentCallback = () => {
    const params = useLocation();
    const [is_load, set_is_load] = useState(0);
    const query = qs.parse(params.search, {
        ignoreQueryPrefix: true // /about?details=true 같은 쿼리 주소의 '?'를 생략해주는 옵션입니다.
    });

    useEffect(() => {
        if(!is_load) {
            set_is_load(1);
            IndemnityPaymentCallback({
                imp_uid: query.imp_uid,
                merchant_uid: query.merchant_uid,
            })
            .then(response => {
                console.log(response);
                if(response.data.code == '200') {
                    if(response.data.body.is_complete) {
                        window.location.href = '/obituary/'+response.data.body.obituary_ID+'/indemnity/addcomplete';
                    } else {
                        alert('결제가 취소되었습니다.');
                        // window.history.back(1);
                        window.location.href= ' /obituary/'+response.data.body.obituary_ID+'/indemnity/accountpayment/'+query.merchant_uid;
                    }
                } else {
                    alert(response.data.body.message);
                    window.location.href= ' /obituary/'+response.data.body.obituary_ID+'/indemnity/accountpayment/'+query.merchant_uid;
                }
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