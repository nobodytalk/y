import React, { useState, useEffect } from 'react';
import { Row,Col } from '../../../components/Grid';
import {useParams} from 'react-router-dom';
import {
    WreathCommonWrapper,
    WreatNotContent,
    WreathNot,
    WreathCommonContent,
    WreathPostImg,
    Background,
    CommonContent,
    } from '../styled';

import {OrderGetOrders} from '../../../api/order';

const WreathPost = (props) => {
    // var today = new Date();
    
    // const date = today.getFullYear() + ("00" + (today.getMonth() + 1)).slice(-2) + ("00" + today.getDate()).slice(-2) + ("00" + today.getHours()).slice(-2) + ("00" + today.getMinutes()).slice(-2) ;

    return (
        <WreathCommonWrapper>
            {props.items ? props.items.map((item, key)=> (
                <WreathCommonContent onClick={()=> window.location.href='/mypage/order/'+item.order_ID}>
                    <CommonContent url={item.payment_data.product_image ? item.payment_data.product_image : ''}>
                        <div />
                        <strong>
                            {item.order_data.order_status ? item.order_data.order_status : ''}
                            <small>
                                {item.order_data.order_date ? item.order_data.order_date : ''}
                            </small>
                        </strong>
                        <p>{item.shipping_data.shipping_name ? item.shipping_data.shipping_name : ''}</p>
                        <p>{item.payment_data.product_name ? item.payment_data.product_name : ''}</p>
                        <p>{item.payment_data.total ? item.payment_data.total : ''}</p>
                        <p>From.<span>{item.order_data.billing_name ? item.order_data.billing_name : ''}</span></p>
                    </CommonContent>
                </WreathCommonContent>
             )) : (
                <WreatNotContent>
                    <WreathNot url="/img/wreathimg2.png" />
                    <h1>보낸 화환 내역이 없습니다.</h1>
                </WreatNotContent>
            )}
        </WreathCommonWrapper>
    );
};

export default WreathPost;