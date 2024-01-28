import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../../../components/Button';
import ButtonGroup from '../../../../components/ButtonGroup';
import { useParams } from 'react-router-dom';
import {
    SingleViewWrapper,
    SingleViewButtonGroup,
    ViewTitle,
    ViewContent,
    ViewSub,
    ViewSubs,
    // Admin User //
    AdminWrapper,

} from '../styled';

import {FuneralGetPost} from '../../../../api/funeral';
import {ObituaryGetPost} from '../../../../api/obituary';
import {ProductGetPost} from '../../../../api/product';
import { FuneralAlert } from '../../Loop/components/Popups';

const SingleView = (props) => {
    const params = useParams();
    const [funeral_name, set_funeral_name] = useState('');
    const [obi_deceased, set_obi_deceased] = useState('');
    const [product_item, set_product_item] = useState('');

    const [SearchPopup_isshow,show_SearchPopup] = useState(0);
    const showSearchPopup = (e) => {
        e.preventDefault();
        if(SearchPopup_isshow) {
            show_SearchPopup(0);
        } else {
            show_SearchPopup(1);
        }
    }

    useEffect(()=>{
        if(!funeral_name && params.funeral_ID != '0') {
            FuneralGetPost({
                funeral_ID: params.funeral_ID
            })
            .then(response => {
                if(response.data.code == '200') {
                    set_funeral_name(response.data.body.post_title);
                }
            })
        }

        if((params.funeral_ID == '0') && params.obituary_ID) {
            ObituaryGetPost({ obituary_ID: params.obituary_ID })
            .then((response) => {
                if(response.data.code == '200') {
                    console.log(response.data);
                    set_obi_deceased(response.data.body.deceased);
                    if(response.data.body.funeral_ID){
                        FuneralGetPost({
                            funeral_ID: response.data.body.funeral_ID
                        })
                        .then(response => {
                            if(response.data.code == '200') {
                                set_funeral_name(response.data.body.post_title);
                            }
                        })
                    }
                }
            })
            .catch(err => console.log(err))
        }
        
        
    })

    const isfront = window.location.pathname.slice(1,6);

    return (
        <>
            <SingleViewWrapper>
                {props.product_item.content ?  (
                    <AdminWrapper
                        dangerouslySetInnerHTML={{
                            __html: props.product_item.content
                        }}
                    />
                ) : 
                <>
                    <ViewTitle url="/img/singleimg2.png">
                        <h1>추도,추모,장례식장</h1>
                        <h1>고인의 명복을 비는 장소에</h1>
                        <h1>적합합니다.</h1>
                        <h2>꽃과 소재는 계절에 따라 이미지가</h2>
                        <h2>달라질 수 있는 점 양해 부탁드립니다.</h2>
                    </ViewTitle>
                    <ViewContent>
                        <h1>필수정보</h1>
                        <p>·품명 및 모델명 - 근조</p>
                        <p>·꽃 원산지 - 한국, 중국, 베트남</p>
                        <p>·고객센터 - <span>1544-3553</span></p>
                        <p>·제조지 - 한국</p>
                        <p>·배송방법 - 주문제작(업체배송)</p>
                        <p>·묶음배송 여부 - 가능</p>
                    </ViewContent>
                    <ViewSub url="/img/shopimg4.png" />
                
                    <ViewSub url="/img/shopimg5.png" />
            
                    <ViewSub url="/img/shopimg6.png" />
                            
                    <ViewSubs url="/img/shopimg7.png" />
                </>
                }
            </SingleViewWrapper>
            <SingleViewButtonGroup>
                <ButtonGroup position="bottom">
                    <Button type="primary" onClick={(props.params.funeral_ID && props.params.funeral_ID == 0 ? '' : props.params.funeral_ID ) || props.params.obituary_ID  ? (e)=> window.location.href=((isfront == 'front' ? '/front' : '')+"/order/"+props.product_item.ID+'/'+(props.params.funeral_ID ? props.params.funeral_ID : '0')+'/'+(props.params.obituary_ID ? props.params.obituary_ID : '')) : showSearchPopup} flex="100%">{params.obituary_ID ? '故'+obi_deceased+'님의 빈소로 보내기' : '주문하기'}</Button>
                </ButtonGroup>
            </SingleViewButtonGroup>
            <FuneralAlert product_ID={params.product_ID} show={SearchPopup_isshow} onClose={showSearchPopup}/>
        </>
    );
};

export default SingleView;