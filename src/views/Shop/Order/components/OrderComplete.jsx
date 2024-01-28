import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../../store/global';
import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import MainContainer from '../../../../components/MainContainer';
import {useParams} from 'react-router-dom';
import {
    OrderCompleteWrapper,
    CompleteContent,
    Complete,
    CompleteSubContent,
    ButtonWrapper
} from '../styled';
import { OrderGetOrder } from '../../../../api/order';
import { ObituaryGetPost } from '../../../../api/obituary';
import HomeFooter from '../../../Home/components/HomeFooter';

const OrderComplete = () => {
    const params = useParams();
    const Dispatch = useDispatch();
    const [is_load_order, set_is_load_order] = useState(0);
    const [order_data, set_order_data] = useState('');
    const [obituary_item, set_obituary_item] = useState(0);

    useEffect(() => {
        if(!is_load_order) {
            Dispatch(SetLoading(1));
            OrderGetOrder({
                order_ID: params.order_ID
            })
            .then(response => {
                if(response.data.code == '200') {
                    set_order_data(response.data.body);
                
                } else {
                    alert('주문데이터를 가져올수 없습니다.');
                    // window.location.href='/';
                }
                Dispatch(SetLoading(0));
            })
            .catch(err => console.log(err));
            set_is_load_order(1);
        }
    })

    const isfront = window.location.pathname.slice(1,6);

    return (
        <MainContainer>
            <Header onHome={order_data.is_front ? 0 : 1} onBack={order_data.is_front ? 0 : 1} title="구매완료" to={"/mypage/wreath"} background="white" />
            <OrderCompleteWrapper>
                <CompleteContent>
                    <Complete url="/img/completeimg1.png"/>
                    <h1>주문 완료</h1>
                    <p>삼가 고인의 명복을 빕니다</p>
                </CompleteContent>
                <CompleteSubContent>   
                    <table>
                        <tr>
                            <td>배송지 (빈소)</td>
                            <td>{order_data && order_data.shipping_data.funeral_name}</td>
                        </tr>
                        <tr>
                            <td>화환</td>
                            <td>{order_data && order_data.payment_data.product_name}</td>
                        </tr>
                    </table>

                    {order_data.payment_info ? ( 
                        <>
                            {order_data.payment_info.vbank_name ? ( 
                                <>
                                    <p>24시간 이내에 미입금시 주문이 자동으로 취소됩니다.</p>
                                    <table>
                                        <tr>
                                            <td>은행</td>
                                            <td>{order_data.payment_info.vbank_name}</td>
                                        </tr>
                                        <tr>
                                            <td>계좌번호</td>
                                            <td>{order_data.payment_info.vbank_num}</td>
                                        </tr>
                                        <tr>
                                            <td>예금주</td>
                                            <td>{order_data.payment_info.vbank_holder}</td>
                                        </tr>
                                    </table>
                                </>
                            ) : ''}
                        </>
                    ) : '' }
                </CompleteSubContent>
                <ButtonWrapper>
                    <Button  title="primary" bgColor="#24243a" color="#fff" to={(order_data.is_front ? '/front' : '/mypage')+"/order/"+params.order_ID}><p>주문상세 보기</p></Button>
                    <Button  title="primary" bgColor="#fff" color="#111" to={(order_data.is_front ? '/front/shop' : '/')}><p>홈으로 돌아가기</p></Button>
                </ButtonWrapper>
            </OrderCompleteWrapper>
            <HomeFooter />

        </MainContainer>
    );
};

export default OrderComplete;