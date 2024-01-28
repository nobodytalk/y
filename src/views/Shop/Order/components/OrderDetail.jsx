import React, {useState, useEffect,} from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../../store/global';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import Header from '../../../../components/Header';
import MainContainer from '../../../../components/MainContainer';
import {useParams, useHistory} from 'react-router-dom';
import {OrderGetOrder} from '../../../../api/order';
import {OrderUpdate} from '../../../../api/order';
import Input from '../../../../components/Input';
import { 
    InformationWrapper,
    Information,
    InforTitle,
    InforContent,
    PageWrapper,
    Revise,
    InforRevise,
    ReviseButton,
    ReceiptLayer,
} from '../styled';
import HomeFooter from '../../../Home/components/HomeFooter';
import {ObituaryGetPost} from '../../../../api/obituary';
import {FuneralGetPost} from '../../../../api/funeral';
import {ProductGetPost} from '../../../../api/product';

const OrderDetail = () => {
    const [is_load_order, set_is_load_order] = useState(0);
    const [order_data, set_order_data] = useState('');
    const [payment_data, set_payment_data] = useState('');
    const [shipping_data, set_shipping_data] = useState('');
    const [payment_info, set_payment_info] = useState('');
    const [product_item, set_product_item] = useState(0);
    const [revise, set_revise] = useState(0);
    const [receiptLayer, toggleReceiptLayer] = useState(false);
    const params = useParams();
    const Dispatch = useDispatch();
    const history = useHistory();

    // 보내는 값
    const [shipping_name, set_shipping_name] = useState('');
    const [shipping_phone, set_shipping_phone] = useState('');
    const [funeral_home, set_funeral_home] = useState('');
    const [ribbon_name, set_ribbon_name] = useState('');
    const [ribbon_memo, set_ribbon_memo] = useState('');
    const [ribbon_color, set_ribbon_color] = useState('');

    const Toggle = () => {
        if(!revise){
            set_revise(1);
        } else{
            set_revise(0);
        }
    }

    const submit = () => {
        OrderUpdate({
            order_ID: params.order_ID,
            shipping_name: shipping_name,
            shipping_phone: shipping_phone,
            funeral_home: funeral_home,
            ribbon_name: ribbon_name,
            ribbon_memo: ribbon_memo,
            ribbon_color: ribbon_color,
        })
        .then(response => {
            if(response.data.code == '200') {
                console.log('성공')
            } else {
                console.log('실패')
            }
            history.go(0);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        if(!is_load_order) {
            Dispatch(SetLoading(1));
            OrderGetOrder({
                order_ID: params.order_ID
            })
            .then(response => {
                if(response.data.code == '200') {
                    set_order_data(response.data.body.order_data);
                    set_payment_data(response.data.body.payment_data);
                    set_shipping_data(response.data.body.shipping_data);
                    set_payment_info(response.data.body.payment_info);
                    set_shipping_name(response.data.body.shipping_data.shipping_name);
                    set_shipping_phone(response.data.body.shipping_data.shipping_phone);
                    set_funeral_home(response.data.body.shipping_data.funeral_home);
                    set_ribbon_name(response.data.body.shipping_data.ribbon_name);
                    set_ribbon_memo(response.data.body.shipping_data.ribbon_memo);
                    set_ribbon_color(response.data.body.shipping_data.ribbon_color);
                } else {
                    alert('주문데이터를 가져올수 없습니다.');
                    // window.location.href='/';
                }
                Dispatch(SetLoading(0));
                console.log(shipping_data)
            })
            .catch(err => console.log(err));
            set_is_load_order(1);
        }
    });

    const isfront = window.location.pathname.slice(1,6);

    return (
        <MainContainer>
            <Header onHome={isfront == 'front' ? 0 : 1} onBack={isfront == 'front' ? 0 : 1} title="주문 상세" to={"/mypage/wreath"}/>
            <PageWrapper>
                    <InformationWrapper>
                        <Information>
                            <InforTitle>
                                <h1>주문 정보</h1>
                            </InforTitle>
                            <InforContent>
                                <table>
                                    <tr>
                                        <td>주문번호</td>
                                        <td>{params.order_ID && params.order_ID}</td>
                                    </tr>
                                    <tr>
                                        <td>주문일자</td>
                                        <td>{order_data && order_data.order_date}</td>
                                    </tr>
                                    <tr>
                                        <td>주문자</td>
                                        <td>{order_data && order_data.billing_name}</td>
                                    </tr>
                                    <tr>
                                        <td>주문처리상태</td>
                                        <td className="color">{order_data && order_data.order_status}</td>
                                    </tr>
                                </table>
                            </InforContent>
                            <div class="bottom" />
                        </Information>
                        <Information>
                            <InforTitle>
                                <h1>결제 정보</h1>
                            </InforTitle>
                            <InforContent>
                                <table>
                                    <tr>
                                        <td>주문상품</td>
                                        <td>{payment_data && payment_data.product_name}</td>
                                    </tr>
                                    <tr>
                                        <td>주문금액</td>
                                        <td>{payment_data && payment_data.price}</td>
                                    </tr>
                                    {shipping_data && shipping_data.ribbon_color == 'black' ? (
                                        <tr>
                                            <td>추가옵션 (+검정색 리본)</td>
                                            <td>5,000원</td>
                                        </tr>
                                    ) : ''}
                                    <tr>
                                        <td>배송지(도서산간지역 추가 배송지)</td>
                                        <td>{payment_data && payment_data.shipping_price}</td>
                                    </tr>

                                    {payment_info ? ( 
                                        <>
                                            {payment_info.vbank_name ? ( 
                                                <>
                                                    <tr>
                                                        <td colSpan={2}><p>24시간 이내에 미입금시 주문이 자동으로 취소됩니다.</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>은행</td>
                                                        <td>{payment_info.vbank_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>계좌번호</td>
                                                        <td>{payment_info.vbank_num}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>예금주</td>
                                                        <td>{payment_info.vbank_holder}</td>
                                                    </tr>
                                                </>
                                            ) : ''}
                                        </>
                                    ) : ''}
                                    <tr>
                                        <td className="bold">총 결제 금액</td>
                                        <td className="colorbold">{payment_data && payment_data.total}</td>
                                    </tr>
                                </table>
                            </InforContent>
                            <div class="bottom" />
                        </Information>
                        <Information>
                            <InforTitle>
                                <h1>배송지 정보</h1>
                                {order_data.complete ? '':
                                    <Revise onClick={Toggle}>
                                    <img src={process.env.PUBLIC_URL + '/img/detailsimg5.png'} alt="" />
                                    </Revise>
                                }
                            </InforTitle>
                            <InforRevise dnjdlek={!revise}>
                                <table className="left">
                                    <tr>
                                        <td>받으시는 분(상주)</td>
                                        <td>{shipping_data && shipping_data.shipping_name}</td>
                                    </tr>
                                    <tr>
                                        <td>전화번호</td>
                                        <td>{shipping_data && shipping_data.shipping_phone}</td>
                                    </tr>
                                    <tr>
                                        <td>주소(빈소)</td>
                                        <td>
                                            {shipping_data && shipping_data.funeral_name} {shipping_data && shipping_data.funeral_home}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>화환 리본 문구</td>
                                        <td>
                                            {shipping_data && shipping_data.ribbon_name}<br />
                                            {shipping_data && shipping_data.ribbon_memo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>화환 리본 옵션</td>
                                        <td>색상: {shipping_data && shipping_data.ribbon_color}</td>
                                    </tr>
                                </table>
                            </InforRevise>
                            <InforRevise dnjdlek={revise}>
                                <table className="left">
                                    <tr>
                                        <td>받으시는 분(상주)</td>
                                        <td>
                                            <input type="text" placeholder="받으시는 분" value={shipping_name ? shipping_name : ''} onChange={(e) => set_shipping_name(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>전화번호</td>
                                        <td>
                                            <input type="text" placeholder="전화번호" value={shipping_phone ? shipping_phone : ''} onChange={(e) => set_shipping_phone(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>주소</td>
                                        <td>
                                        {shipping_data && shipping_data.funeral_name} 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>(빈소)</td>
                                        <td>
                                            <input type="text" placeholder="빈소 명" value={funeral_home ? funeral_home : ''} onChange={(e) => set_funeral_home(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>화환 리본 문구</td>
                                        <td>
                                            <input type="text" placeholder="회사/모임/이름" value={ribbon_name ? ribbon_name : ''} onChange={(e) => set_ribbon_name(e.target.value)} /><br />
                                            <input type="text" placeholder="문구" value={ribbon_memo ? ribbon_memo : ''} onChange={(e) => set_ribbon_memo(e.target.value)} />
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>화환 리본 옵션</td>
                                        <td>
                                            색상<br />
                                            <select value={ribbon_color ? ribbon_color : ''} onChange={(e) => set_ribbon_color(e.target.value)} id="color" name="color">
                                                <option value="white">흰색</option>
                                                <option value="black">검정색</option>
                                            </select>
                                            <label for="color">
                                                <img src={process.env.PUBLIC_URL + '/arrow-bottom.png'} alt="" />
                                            </label>
                                        </td>
                                    </tr> */}
                                    <tr>
                                        <td>화환 리본 옵션</td>
                                        <td>색상: {shipping_data && shipping_data.ribbon_color}</td>
                                    </tr>
                                </table>
                                <ReviseButton>
                                    <button onClick={submit}>
                                        저장
                                    </button>
                                </ReviseButton>
                            </InforRevise>
                        </Information>
                    </InformationWrapper>
                <HomeFooter />
            </PageWrapper>
            <ButtonGroup position="bottom">
                {payment_info.receipt_url ? (
                    <Button type="primary" bgColor="#ececec" color="black" width="50%" href="javascript:;" data-url={payment_info.receipt_url} onClick={(e) => toggleReceiptLayer(!receiptLayer)}>영수증 보기</Button>
                ) : ''}
                <Button type="primary" width={payment_info.receipt_url ? "50%" : '100%'} to={(isfront == 'front' ? '/front/shop' : "/mypage/wreath")}>확인</Button>
            </ButtonGroup>
            {receiptLayer ? (<ReceiptLayer>
                <div className="layer">
                    <div className="layer-header">
                        <h3>영수증 보기</h3>
                        <a href="javscript:;" onClick={(e) => toggleReceiptLayer(!receiptLayer)}>닫기 </a>
                    </div>
                    <div className="layer-body">
                        <iframe src={payment_info.receipt_url} frameborder="0"></iframe>
                    </div>
                </div>
            </ReceiptLayer>) :''}
        </MainContainer>
    );
};

export default OrderDetail;