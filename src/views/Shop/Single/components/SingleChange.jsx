import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import { FuneralAlert } from '../../Loop/components/Popups';
import {
    SingleChangeWrapper,
    ChangeTitle,
    ChangeSubTitle,
    LocationWrapper,
    Location,
    LocationBox,
    SingleViewButtonGroup
} from '../styled';


const SingleChange = (props) => {
    const params = useParams();
    const [obi_deceased, set_obi_deceased] = useState('');

    const [SearchPopup_isshow,show_SearchPopup] = useState(0);
    const showSearchPopup = (e) => {
        e.preventDefault();
        if(SearchPopup_isshow) {
            show_SearchPopup(0);
        } else {
            show_SearchPopup(1);
        }
    }
    const isfront = window.location.pathname.slice(1,6);

    return (
        <>
            <SingleChangeWrapper>
                <ChangeTitle>
                    <h1>주문 시 꼭 확인해주세요!</h1>
                </ChangeTitle>
                <LocationWrapper>
                    <Location>
                        <LocationBox>
                            <p>1.고객주문</p>
                            <p>2.결제완료</p>
                            <p>3.주문접수</p>
                            <p>4.상품배송</p>
                            <p>5.고객수령</p>
                        </LocationBox>
                    </Location>
                </LocationWrapper>
                <ChangeSubTitle className="change">
                    <h2>배송안내</h2>
                    <p>∙ 2~3시간 내 전국 배송 가능</p>
                    <p>∙ 당일 : 오후 8시 까지 결제완료된 상품</p>
                    <p>∙ 익일 : 오후 8시 이후 결제 완료된 상품</p>
                    <p>∙ 섬/산간 지역은 배송 시 배송시간이 지연될 수 있습니다. 
                        많이 소요될 경우 지역화원사의 별도요청에 따라 예외적으로 배송료가 
                        추가 되고 있음을 양해 부탁드립니다 (전국 동일)</p>
                </ChangeSubTitle>
                <ChangeSubTitle className="change">
                    <h2>리본문구 수정</h2>
                    <p>∙ 수정가능 : 결제 후 20분이내 고객센터로 문의</p>
                    <p>∙ 수정불가 : 결제 후 20분이 경과 된 이후는 문구 출력 등이 완료되어 수정 및 변경이 불가합니다.</p>
                    <p>∙ 배송완료 후 고객의 변심 또는 정보 오입력으로, 리본수정을 요청할 경우 재배송으로 추가 비용과 
                        2~3시간의 이동시간이 더 소요됩니다. (주문 시 입력한 정보는 자동전산처리 됨으로 오류발생 불가합니다.)</p>
                </ChangeSubTitle>
                <ChangeSubTitle>
                    <h2>교환 및 환불</h2>
                    <p>∙ 상품 출고 시 취소 및 환불 불가합니다. (생화상품의 경우 한번 잘라지면 다시 사용할 수 없는 꽃의 
                        특성상 제작 완료 후 단순 변심으로 인한 교환  및 취소/환불이 불가합니다.)</p>
                    <p>∙ 불량 및 파손, 오배송은 교환 및 반품 가능합니다.</p>
                    <p>∙ 현장에서 받는분이 배송을 거부한 경우 취소/환불이 불가합니다.</p>
                    <p>∙ 취소 : 결제완료 10분 내 주문자가 고객센터에 요청한 경우</p>
                    <p>∙ 취소불가 : 결제완료 10분 후 주문취소, 결제완료 후 입력한 정보의 오류로 인한 주문취소 
                        (배송지, 리본문구 등의 정보 오입력 등) </p>
                </ChangeSubTitle>
            </SingleChangeWrapper>
            <SingleViewButtonGroup>
                <ButtonGroup position="bottom">
                    <Button type="primary" onClick={(props.params.funeral_ID && props.params.funeral_ID == 0 ? '' : props.params.funeral_ID ) || props.params.obituary_ID  ? (e)=> window.location.href=((isfront == 'front' ? '/front' : '')+"/order/"+props.product_item.ID+'/'+(props.params.funeral_ID ? props.params.funeral_ID : '0')+'/'+(props.params.obituary_ID ? props.params.obituary_ID : '')) : showSearchPopup} flex="100%">{params.obituary_ID ? '故'+obi_deceased+'님의 빈소로 보내기' : '주문하기'}</Button>
                </ButtonGroup>
            </SingleViewButtonGroup>
            <FuneralAlert product_ID={params.product_ID} show={SearchPopup_isshow} onClose={showSearchPopup} />
        </>
    );
};

export default SingleChange;