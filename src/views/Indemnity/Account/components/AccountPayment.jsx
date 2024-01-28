import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import MainContainer from '../../../../components/MainContainer';
import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import Input from '../../../../components/Input';
import {IndemnityGetPosts} from '../../../../api/indemnity';
import {GetMe} from '../../../../api/user';
import {OrderWrapper,
    OredrTitle,
    OrderItem,
    PayMent,
    OrderViewWrapper,
    PaymentMethod,
    Title,
    Method,
    Phrase,
} from './styled';

const AccountPayment = () => {


    const params = useParams();
    const [obi_add, set_obi_add] = useState('');
    const [payment_method, set_payment_method] = useState('');
    const [user_data, set_user_data] = useState('');

    useEffect(() => {
        if(!obi_add) {
            IndemnityGetPosts({
                obituary_ID: params.obituary_ID
            })
            .then((response) => {
                if(response.data.code == '200'){
                }
            })
            .catch((error) => console.log(error))
        }
    })

    const Submit = () => {
        GetMe()
        .then(response => {
            if(response.data.code == 200){
                var IMP = window.IMP; // 생략가능
                IMP.init('imp27668152'); 
                IMP.request_pay({
                    pg : 'kcp', // version 1.1.0부터 지원.
                    pay_method : payment_method,
                    merchant_uid : params.indemnity_ID,
                    name : '부의금 서비스 추가결제',
                    amount : 500,
                    // buyer_name : '구매자이름',
                    buyer_tel : response.data.body.user_phone,
                    m_redirect_url : 'https://app.yepum.co.kr/account_payment/callback/'
                }, function(rsp) {
                    if ( rsp.success ) {
                        var msg = '결제가 완료되었습니다.';
                        msg += '고유ID : ' + rsp.imp_uid;
                        msg += '상점 거래ID : ' + rsp.merchant_uid;
                        msg += '결제 금액 : ' + rsp.paid_amount;
                        msg += '카드 승인번호 : ' + rsp.apply_num;
                        // alert('https://app.yepum.co.kr/account_payment/callback/?imp_uid='+rsp.imp_uid+'&merchant_uid='+rsp.merchant_uid+'&imp_success=true');
                        window.location.href='https://app.yepum.co.kr/account_payment/callback/?imp_uid='+rsp.imp_uid+'&merchant_uid='+rsp.merchant_uid+'&imp_success=true';
                    } else {
                        var msg = '결제에 실패하였습니다.';
                        msg += '에러내용 : ' + rsp.error_msg;
                    }
                    alert(msg);
                });
            } 
        })
        .catch(error => console.log(error));

        
        
        // window.location.href = "/obituary/"+params.obituary_ID+"/indemnity/account"
    }


    return (
        <div>
            <MainContainer>
                <OrderWrapper>
                    <Header hamburger onBack to={"/obituary/"+params.obituary_ID+"/indemnity/account"}  title="부의금 계좌 추가 결제" background="white" />
                    <OredrTitle>
                        <OrderItem>
                            <table>
                                <tr>
                                    <td>부의금 계좌 등록</td>

                                    <td>500원</td>
                                </tr>
                                <tr>
                                    <td>부의금 보내기</td>
                                    <td>무료</td>
                                </tr>
                            </table>
                        </OrderItem>
                        <PayMent>
                            <strong>총 결제금액</strong>
                            <span>500원</span>
                            {/* {props.} */}
                        </PayMent>
                    </OredrTitle>
                    {/* 주문폼 */}

                    <OrderViewWrapper>
                        <PaymentMethod>
                        <Title>
                            <strong>결제 수단</strong>
                        </Title>
                        <Method>
                            <Phrase>
                                <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="신용카드" value="card" id="card" onChange={(e) => set_payment_method(e.target.value)}/>
                                {/* <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="휴대폰소액결제" value="phone" id="phone" onChange={(e) => set_payment_method(e.target.value)}/> */}
                                {/* <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="가상계좌" value="vbank" id="vbank" onChange={(e) => set_payment_method(e.target.value)}/> */}
                                {/* <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="실시간계좌이체" value="trans" id="trans" onChange={(e) => set_payment_method(e.target.value)}/> */}
                            </Phrase>
                        </Method>
                    </PaymentMethod>
                    <ButtonGroup position="bottom">
                        <Button type="primary" bgColor="#a9823d" onClick={Submit}>결제하기</Button>
                    </ButtonGroup>
                    </OrderViewWrapper>

                </OrderWrapper>
            </MainContainer>
        </div>
    );
};

export default AccountPayment;