import React, {useState, useEffect} from 'react';
import {ObituaryInit} from '../../api/obituary';

const InitTmp = () => {
    // const [Tmp, SetTmp] = useState(0);

    useEffect(() => {
        ObituaryInit()
        .then(response => {
            if(response.data.code == '200') {
                window.location.href='/obituary/make/'+response.data.body.obituary_ID;
            }
        })
        .catch(err => console.log(err));
    })
    return (
        <div>            
        </div>
    );
};

export default InitTmp;