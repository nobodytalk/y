import React, {useEffect, useState} from 'react';
import OrderPopup from '../Popup/OrderPopup';
import RibbonPopup from '../components/Popup/RibbonPopup';
import Input from '../../../../components/Input';
import InputBind from '../../../../components/InputBind';
import InputGroup from '../../../../components/InputGroup';
import Label from '../../../../components/Label';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import Joi from 'joi-browser';
import {
    OredrTitle,
    OrderItem,
    PayMent,
    OrderViewWrapper,
    OrderUser,
    Title,
    UserLocation,
    OrederUserInformation,
    UserInformation,
    Infromation,
    OrderRibbonPhrase,
    Phrase,
    PaymentMethod,
    Method,
    ErrorMsg,
} from '../styled';
import { useParams } from 'react-router-dom';
import { FuneralGetPost } from '../../../../api/funeral';
import { ObituaryGetPost } from '../../../../api/obituary';
import { OrderMakeOrder } from '../../../../api/order';

const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#111" fill-rule="nonzero">
                            <g>
                                <g>
                                    <path d="M69.92 11.515l-.4-.43c-.054-.056-.116-.085-.185-.085-.07 0-.131.029-.184.086L66 14.462l-3.15-3.376c-.054-.057-.115-.086-.185-.086-.07 0-.13.029-.184.086l-.4.43c-.054.057-.081.123-.081.197 0 .075.027.14.08.198l3.736 4.003c.053.057.115.086.184.086.07 0 .13-.029.184-.086l3.736-4.003c.053-.058.08-.123.08-.198 0-.074-.027-.14-.08-.198z" transform="translate(-319 -504) translate(20 492) translate(236 3) rotate(-90 66 13.5)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

const OrderView = (props) => {
    const params = useParams();
    const [OrderPopup_isshow,show_OrderPopup] = useState(0);
    const showOrderPopup = (e) => {
        e.preventDefault();
        if(OrderPopup_isshow) {
            show_OrderPopup(0);
        } else {
            show_OrderPopup(1);
        }
    }

    const [RibbonPopup_isshow,show_RibbonPopup] = useState(0);
    const showRibbonPopup = (e) => {
        e.preventDefault();
        if(RibbonPopup_isshow) {
            show_RibbonPopup(0);
        } else {
            show_RibbonPopup(1);
        }
    }
    
    const [funeral_load, set_funeral_load] = useState('');
    const [funeral_item, set_funeral_item] = useState('');
    const [funeral_home, set_funeral_home] = useState('');
    const [errorMsg, SetErrorMsg] = useState('');
    const [mourner, set_mourner] = useState('');
    const [shipping_name, set_shipping_name] = useState('');
    const [shipping_phone, set_shipping_phone] = useState("");
    const [billing_name, set_billing_name] = useState("");
    const [billing_phone, set_billing_phone] = useState("");
    const [ribbon_name, set_ribbon_name] = useState("");
    const [ribbon_color, set_ribbon_color] = useState("");
    const [product_option_1, set_product_option_1] = useState("");
    const [product_option_1_price, set_product_option_1_price] = useState(0);
    const [product_option_2, set_product_option_2] = useState("");
    const [product_option_2_price, set_product_option_2_price] = useState(0);
    const [ribbon_memo, set_ribbon_memo] = useState("삼가 故人의 冥福을 빕니다");
    const [payment_method, set_payment_method] = useState('');
    const [ribbonmemo_toggle, update_ribbonmemo_toggle] = useState(0);
    
    const isfront = window.location.pathname.slice(1,6);

    const typing_billing_phone = (e) => {
        set_billing_phone(e.target.value);
    }
    const typing_shipping_phone = (e) => {
        set_shipping_phone(e.target.value);
    }
    const typing_billing_name = (e) => {
        set_billing_name(e.target.value);
    }
    const typing_ribbon_name = (e) => {
        set_ribbon_name(e.target.value);
    }
    const typing_ribbon_color = (e) => {
        set_ribbon_color(e.target.value);
    }
    const typing_ribbon_memo = (e) => {
        set_ribbon_memo(e.target.value);

        if(e.target.id == 'select_id') {
            if(e.target.value == "직접입력") {
                update_ribbonmemo_toggle(1);
            } else {
                update_ribbonmemo_toggle(0);
            }
        }
    }

    const Submit = (e) => {
        const schema ={
            shipping_name: Joi.string()
                .required()
                .error(() => ({message: '이름을 입력해주세요.'})),
            shipping_phone: Joi.string()
                .required()
                .min(10)
                .error(() => ({message: '핸드폰 번호를 10자리 이상 입력해주세요.'})),
            billing_name: Joi.string()
                .required()
                .error(() => ({message: '이름을 입력해주세요.'})),
            billing_phone: Joi.string()
                .required()
                .min(10)
                .error(() => ({message: '핸드폰 번호를 10자리 이상 입력해주세요.'})),
            funeral_home: Joi.string()
                .required()
                .error(() => ({message: '빈소명을 입력해주세요.'})),
            ribbon_color: Joi.string()
                .required()
                .error(() => ({message: '리본 컬러를 선택 해주세요.'})),
            ribbon_name: Joi.string()
                .required()
                .error(() => ({message: '이름을 입력해주세요.'})),
            ribbon_memo: Joi.string()
                .required()
                .error(() => ({message: '리본 문구를 선택해주세요.'})),
            payment_method: Joi.string()
                .required()
                .error(() => ({message: '결제수단을 선택해주세요.'}))
        }
        const {error} = Joi.validate({
            shipping_name: shipping_name,
            shipping_phone: shipping_phone,
            billing_name: billing_name,
            billing_phone: billing_phone,
            funeral_home: funeral_home,
            ribbon_color: ribbon_color,
            ribbon_name: ribbon_name,
            ribbon_memo: ribbon_memo,
            payment_method: payment_method,
        }, schema);

        if(error){
            alert(error.details[0].message);
            console.log(error);
        } else {
            const order_field = {  // post - 
                product_ID: params.product_ID,
                shipping_name: shipping_name,
                shipping_phone: shipping_phone,
                funeral_ID: params.funeral_ID ? params.funeral_ID : '',
                funeral_home: funeral_home,
                obituary_ID: params.obituary_ID ? params.obituary_ID : '', // 선택옵션
                billing_name: billing_name,
                billing_phone: billing_phone,
                ribbon_color: ribbon_color,
                ribbon_name: ribbon_name,
                ribbon_memo: ribbon_memo,
                payment_method: payment_method,
                product_option_1: product_option_1,
                product_option_1_price: product_option_1_price,
                product_option_2: product_option_2,
                product_option_2_price: product_option_2_price,
            };
            OrderMakeOrder(order_field)
            .then((response) => {
                if(response.data.code == '200') {
                    var IMP = window.IMP; // 생략가능
                    IMP.init('imp27668152'); 
                    IMP.request_pay({
                        pg : 'kcp', // version 1.1.0부터 지원.
                        pay_method : payment_method,
                        merchant_uid : response.data.body.order_ID,
                        name : props.product_item.title,
                        amount : response.data.body.amount,
                        // buyer_name : '구매자이름',
                        buyer_tel : billing_phone,
                        m_redirect_url : 'https://app.yepum.co.kr/payment/callback/'
                    }, function(rsp) {
                        if ( rsp.success ) {
                            var msg = '결제가 완료되었습니다.';
                            msg += '고유ID : ' + rsp.imp_uid;
                            msg += '상점 거래ID : ' + rsp.merchant_uid;
                            msg += '결제 금액 : ' + rsp.paid_amount;
                            msg += '카드 승인번호 : ' + rsp.apply_num;
                            alert('https://app.yepum.co.kr/payment/callback/?imp_uid='+rsp.imp_uid+'&merchant_uid='+rsp.merchant_uid+'&imp_success=true');
                            window.location.href='https://app.yepum.co.kr/payment/callback/?imp_uid='+rsp.imp_uid+'&merchant_uid='+rsp.merchant_uid+'&imp_success=true';
                        } else {
                            var msg = '결제에 실패하였습니다.';
                            msg += '에러내용 : ' + rsp.error_msg;
                        }
                        alert(msg);
                    });
                }
            })
            .catch(err => console.log(err))
        }
    }
    
    useEffect(() => {
        if(!funeral_load && (params.funeral_ID != '0' )) {
            FuneralGetPost({
                funeral_ID: params.funeral_ID,
                is_order: params.product_ID
            })
            .then((response) => {
                if(response.data.code == '200') {
                    set_funeral_item(response.data.body);
                    set_funeral_load(1);
                }

                if(response.data.code == '400') {
                    alert(response.data.body.message);
                    window.location.href= "/shop/detail/"+params.product_ID+"/0/";
                }
            })
            .catch(err=>console.log(err));
        }
        if(!funeral_load && params.obituary_ID) {
            ObituaryGetPost({ obituary_ID: params.obituary_ID })
            .then((response) => {
                if(response.data.code == '200') {

                    set_shipping_name(response.data.body.mourner[0].name);
                    set_mourner(response.data.body.mourner);

                    FuneralGetPost({
                        funeral_ID: response.data.body.funeral_ID,
                        is_order: params.product_ID
                    })
                    .then(response => {
                        if(response.data.code == '200') {
                            set_funeral_item(response.data.body);
                            set_funeral_load(1);
                        }
                        if(response.data.code == '400') {
                            alert(response.data.body.message);
                            window.location.href= "/shop/detail/"+params.product_ID+"/0/";
                        }
                    })
                }
            })
            .catch(err => console.log(err))
            set_funeral_load(1);
        }
    })
    return (
        <>
            <OredrTitle>
                <OrderItem>
                    <table>
                        <tr>
                            <td>{props.product_item.title ? props.product_item.title : ''}</td>

                            <td>{props.product_item.sale_price ? props.product_item.sale_price : props.product_item.regular_price}원</td>
                        </tr>
                        <tr>
                            <td>배송비 (도서산간지역 추가 배송)</td>
                            <td>무료배송</td>
                        </tr>
                    </table>
                </OrderItem>
                <PayMent>
                    <strong>총 결제금액</strong>
                    <span>{props.product_item.sale_price ? props.product_item.sale_price : props.product_item.regular_price}원</span>

                    {ribbon_color == 'black' ? (
                        <p>
                            <strong><small>추가 옵션 (검정색 리본)</small></strong>
                            <span><small>+ 5,000원</small></span>
                            </p>
                    ) : ''}

                    {product_option_1_price ? (
                        <p>
                            <strong><small>추가 옵션 ({props.product_item.product_options_1_name})</small></strong>
                            <span><small>+ {parseInt(product_option_1_price).toLocaleString()}원</small></span>
                        </p>) : ''}
                    {product_option_2_price ? (
                        <p>
                            <strong><small>추가 옵션 ({props.product_item.product_options_2_name})</small></strong>
                            <span><small>+ {parseInt(product_option_2_price).toLocaleString()}원</small></span>
                        </p>) : ''}
                </PayMent>
            </OredrTitle>
            <OrderViewWrapper>
                <OrderUser>
                    {params.obituary_ID && (<>
                        <Title>
                            {/* <strong>{user_data ? user_data.user_name : ''}</strong> */}
                            <small>{shipping_name ? shipping_name : ''}</small><strong> 상주</strong>
                            <Button type="secondary" borderColor="#d5d5d5" borderRadius="17.5px" width="84px" size="small" onClick={showOrderPopup}><p>상주변경 {arrowIcon}</p></Button>
                            {/* <button></button> */}
                        </Title>
                    </>)}
                    
                    <Infromation>
                        <InputGroup>
                            {!params.obituary_ID && (
                                <InputBind>
                                    <Label>상주명</Label><Input type='textbox' placeholder='홍길동' onChange={(e) => set_shipping_name(e.target.value)}/>
                                </InputBind>
                            )}
                            <InputBind>
                                <Label>휴대번호</Label><Input type='phoneNum' placeholder='010-0000-0000' onChange={typing_shipping_phone}/>
                            </InputBind>
                        </InputGroup>
                    </Infromation>
                    <UserLocation>
                        {/* <strong>{props.}</strong>
                        <p>{props.}</p> */}
                        <strong>{funeral_item ? funeral_item.post_title : ''}</strong>
                        <p>{funeral_item ? funeral_item.address : ''}</p>
                    </UserLocation>

                    <Infromation>
                        <InputGroup>
                            <InputBind>
                                <Label>빈소명</Label><Input type='textbox' placeholder='빈소명을 입력해주세요' value={funeral_home} onChange={(e) => set_funeral_home(e.target.value)}/>
                            </InputBind>
                        </InputGroup>
                    </Infromation>
                </OrderUser>
                <OrederUserInformation>
                    <UserInformation>
                        <Title>
                            <strong>주문자 정보</strong>
                        </Title>
                        <Infromation>
                            <InputGroup>
                                <InputBind>
                                    <Label>이름</Label><Input type='textbox' placeholder='이름' onChange={typing_billing_name} />
                                </InputBind>
                                <InputBind>
                                    <Label>휴대번호</Label><Input type='phoneNum' placeholder='010-0000-0000' onChange={typing_billing_phone}/>
                                </InputBind>
                            </InputGroup>
                        </Infromation>
                    </UserInformation>
                </OrederUserInformation>
                <OrderRibbonPhrase>
                    <Title>
                        <strong>화환 리본 문구</strong>
                        <Button type="secondary" borderColor="#d5d5d5" borderRadius="17.5px" width="84px" size="small" onClick={showRibbonPopup}><p>리본예시 {arrowIcon}</p></Button>
                    </Title>
                    <Phrase>
                        <Input type="radiobutton" width="50%" name="choice" background="#f7f7f7" title="흰색" value="white" id="white" onChange={typing_ribbon_color}/>
                        <Input type="radiobutton" width="50%" name="choice" background="#f7f7f7" title="검정색 (+5000원)" value="black" id="black" onChange={typing_ribbon_color}/>
                    </Phrase>
                    <Infromation>
                        <InputGroup>
                            <InputBind>
                                <Label>이름</Label><Input type='textbox' placeholder='회사/모임/이름을 입력하세요.' onChange={typing_ribbon_name}/>
                            </InputBind>
                            <InputBind>
                                <Label>리본문구</Label>
                                <Input type='select' width="75%" id="select_id" onChange={typing_ribbon_memo}>
                                    <option value="삼가 故人의 冥福을 빕니다">삼가 故人의 冥福을 빕니다</option>
                                    <option value="삼가 고인의 명복을 빕니다">삼가 고인의 명복을 빕니다</option>
                                    <option value="근조">근조</option>
                                    <option value="謹弔">謹弔</option>
                                    <option value="謹 삼가 故人의 冥福을 빕니다 弔">謹 삼가 故人의 冥福을 빕니다 弔</option>
                                    <option value="근 삼가 故人의 冥福을 빕니다 조">근 삼가 故人의 冥福을 빕니다 조</option>
                                    <option value="謹 삼가 고인의 명복을 빕니다 弔">謹 삼가 고인의 명복을 빕니다 弔</option>
                                    <option value="근 삼가 고인의 명복을 빕니다 조">근 삼가 고인의 명복을 빕니다 조</option>
                                    <option value="冥福극락왕생발원">冥福극락왕생발원</option>
                                    <option value="하나님의 위로가 함께 하시길 빕니다">하나님의 위로가 함께 하시길 빕니다</option>
                                    <option value="직접입력">직접입력</option>
                                </Input>
                                {ribbonmemo_toggle ? (
                                    <>
                                        <Label></Label>
                                        <Input type="textbox" placeholder="직접 입력해주세요" onChange={typing_ribbon_memo}/>
                                    </>
                                ) : ''}
                            </InputBind>
                        </InputGroup>
                    </Infromation>
                </OrderRibbonPhrase>

                {/* 상품 옵션 처리 */}
                {props.product_item.product_options_1_enable ? 
                <OrderRibbonPhrase>
                    <Title>
                        <strong>{props.product_item.product_options_1_name}</strong>
                    </Title>
                    <Phrase>
                        {props.product_item.product_options_1 ? props.product_item.product_options_1.map((option, key) => 
                            <Input type="radiobutton" width="50%" name="product_options_1" background="#f7f7f7" price={parseInt(option.price)} title={option.name+' (+'+parseInt(option.price).toLocaleString()+'원)'} value={option.name} id={"options_1_"+key} onChange={(e)=>{
                                set_product_option_1_price(e.currentTarget.dataset.price);
                                set_product_option_1(e.currentTarget.value);
                                console.log(e.currentTarget.dataset.price);
                            }}/>
                        ) : ''}
                        {/* <Input type="radiobutton" width="50%" name="choice" background="#f7f7f7" title="검정색 (+5000원)" value="black" id="black" onChange={typing_ribbon_color}/> */}
                    </Phrase>
                </OrderRibbonPhrase>
                : ''}

                {/* 상품 옵션 처리 */}
                {props.product_item.product_options_2_enable ? 
                <OrderRibbonPhrase>
                    <Title>
                        <strong>{props.product_item.product_options_2_name}</strong>
                    </Title>
                    <Phrase>
                        {props.product_item.product_options_2 ? props.product_item.product_options_2.map((option, key) => 
                            <Input type="radiobutton" width="50%" name="product_options_2" background="#f7f7f7" price={parseInt(option.price)} title={option.name+' (+'+parseInt(option.price).toLocaleString()+'원)'} value={option.name} id={"options_2_"+key} onChange={(e)=>{
                                set_product_option_2_price(e.currentTarget.dataset.price);
                                set_product_option_2(e.currentTarget.value);
                                console.log(e.currentTarget.dataset.price);
                            }}/>
                        ) : ''}
                        {/* <Input type="radiobutton" width="50%" name="choice" background="#f7f7f7" title="검정색 (+5000원)" value="black" id="black" onChange={typing_ribbon_color}/> */}
                    </Phrase>
                </OrderRibbonPhrase>
                : ''}
                <PaymentMethod>
                    <Title>
                        <strong>결제 수단</strong>
                    </Title>
                    <Method>
                        <Phrase>
                            <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="신용카드" value="card" id="card" onChange={(e) => set_payment_method(e.target.value)}/>
                            {/* <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="휴대폰소액결제" value="phone" id="phone" onChange={(e) => set_payment_method(e.target.value)}/> */}
                            <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="가상계좌(계좌이체)" value="vbank" id="vbank" onChange={(e) => set_payment_method(e.target.value)}/>
                            <Input type="radiobutton" width="50%" name="payment_method" background="#f7f7f7" title="실시간계좌이체" value="trans" id="trans" onChange={(e) => set_payment_method(e.target.value)}/>
                        </Phrase>
                    </Method>
                </PaymentMethod>
                <ButtonGroup position="bottom">
                    <Button type="primary" bgColor="#a9823d" onClick={Submit}>결제하기</Button>
                </ButtonGroup>
            </OrderViewWrapper>
            {mourner && (<OrderPopup show={OrderPopup_isshow} mourner={mourner} set_shipping_name={set_shipping_name} onClose={showOrderPopup}/>)}
            <RibbonPopup show={RibbonPopup_isshow} onClose={showRibbonPopup}/>
        </>
    );
};

export default OrderView;