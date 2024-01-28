import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from '../../../../components/Grid';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import {SingleOrderWrpaeer,
        OrderTitle,
        OrderContent,
        OrderSubContnet} from '../styled';

const SingleOrder = () => {
    return (
        <>
            <SingleOrderWrpaeer>
                <OrderTitle>
                    <h1>모든 상품은 전국 배송지</h1>
                    <h1>인근에서 제작되어 배송됩니다.</h1>
                    <p>
                        배송지역 및 꽃 수급 상황에 따라 원산지가 달라질 
                        수 있으므로 상품의 포장재 또는 영수증, 배송장, 
                        스티커, 상품 등에 원산지를 표시하여 배송됩니다.
                    </p>
                </OrderTitle>
                <OrderContent>
                    <Row>
                        <Col>원산지</Col>
                        <Col flex="2">품목명</Col>
                    </Row>
                </OrderContent>
                <OrderSubContnet>
                    <Row>
                        <Col>
                            <strong>
                                국산
                            </strong>
                        </Col>
                        <Col flex="2">
                            <small>
                                거베라, 골든볼, 국화, 다알리아, 대국, 금어초, 라넌큘러, 라스(글라디올러스), 
                                레몬잎, 르네브, 메리골드, 미스티블루, 백합, 부바르디아, 소철, 수국, 스타티스, 스토크, 
                                아이리스, 안개, 유칼립투스, 장비, 천일홍, 카네이션 퐁퐁소국, 프리지아, 
                            </small>
                        </Col>
                    </Row>
                </OrderSubContnet>
                <ButtonGroup position="bottom">
                    <Button type="primary" to="/order/" flex="70%">故홍길동님의 빈소로 보내기</Button>
                    <Button type="default" bgColor="#00c73c" to="//" flex="30%"><img src={process.env.PUBLIC_URL + '/img/naverpay.png'} alt="" /></Button>
                </ButtonGroup>
            </SingleOrderWrpaeer>
        </>

    );
};

export default SingleOrder;