import React, {useEffect, useState} from 'react';
import {useParams, useHistory } from 'react-router-dom';
import {ProductGetPost} from '../../../api/product';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import OrderView from './components/OrderView';
import HomeFooter from '../../Home/components/HomeFooter';
import {OrderWrapper,
        } from './styled';

const Order = () => {
    const params = useParams();
    const History = useHistory();
    const [product_item, set_product_item] = useState(0);
    useEffect(() => {
        if(!product_item) {
            ProductGetPost({
                product_ID: params.product_ID
            })
            .then((response) => {
                if(response.data.code == '200') {
                    set_product_item(response.data.body);
                }
            })
            .catch(err=>console.log(err));
        }
    });
    return (
        <MainContainer>
            <OrderWrapper>
                <Header hamburger onBack onClick={(e)=> History.goBack()} title="주문∙결제하기" background="white" />
                {/* <Header hamburger onBack to={'/shop/detail/'+params.product_ID+'/'+params.funeral_ID} title="주문∙결제하기" background="white" /> */}
                {/* 주문폼 */}
                <OrderView product_item={product_item ? product_item : ''}/>
                <HomeFooter />
            </OrderWrapper>
        </MainContainer>
    );
};

export default Order;