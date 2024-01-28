import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import Header from '../../../components/Header';
import {Tab} from '../../../components/Tab';
import { Link, useParams, useHistory } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import SingleSlider from './components/SingleSlider';
import SingleView from './components/SingleView';
import SingleOrder from './components/SingleOrder';
import SingleChange from './components/SingleChange';
import SharePopup from './Popup/index';
import HomeFooter from '../../Home/components/HomeFooter';
import {
    SingleWrapper,
    SingleTitleWrapper,
    SingleTitle,
    SingleSubTitle,
    SingleTab,
} from './styled';
import {ProductGetPost} from '../../../api/product';
import {ObituaryGetPost} from '../../../api/obituary';
import {FuneralGetPost} from '../../../api/funeral';


const ShopSingle = (props) => {
    const Dispatch = useDispatch();
    const params = useParams();
    const History = useHistory();
    const [load_id, set_load_id] = useState(0);
    const [product_item, set_produt_item] = useState(0);
    const [obituary_item, set_obituary_item] = useState(0);
    const [funeral_item, set_funeral_item] = useState(0);

    const [active_tab, set_active_tab] = useState(1);
    const ChangeTab = (e) => {
        e.preventDefault();
        set_active_tab(e.target.dataset.id)
    }

    const [SharePopup_isshow,show_SharePopup] = useState(0);
    const showSharePopup = (e) => {
        e.preventDefault();
        if(SharePopup_isshow) {
            show_SharePopup(0);
        } else {
            show_SharePopup(1);
        }
    }
    
    useEffect(() => {
        if(load_id != params.product_ID) {
            Dispatch(SetLoading(1));
            set_load_id(params.product_ID);
            ProductGetPost({ product_ID: params.product_ID })
            .then((response) => {
                if(response.data.code == '200') {
                    set_produt_item(response.data.body);
                }
                Dispatch(SetLoading(0)); 
            })
            .catch(err => console.log(err));
        }
        if(!obituary_item) {
            if(params.obituary_ID){
                ObituaryGetPost({
                    obituary_ID: params.obituary_ID
                })
                .then((response) => {
                    if(response.data.code == '200') {
                        set_obituary_item(response.data.body);
                    }
                })
            }
        }
        if(!funeral_item) {
            if(params.funeral_ID !== '0'){
                FuneralGetPost({
                    funeral_ID: params.funeral_ID
                })
                .then((response) => {
                    if(response.data.code == '200') {
                        set_funeral_item(response.data.body);
                    }
                })
            }
        }
    })
    
    const isfront = window.location.pathname.slice(1,6);
    //title={product_item.title ? product_item.title : ''} //
    return (
        <MainContainer>
            <SingleWrapper>
            <Header onHome={isfront == 'front' ? 0 : 1} onBack to={(params.obituary_ID ) ? ((isfront == 'front' ? '/front' : '')+"/shop/obituary/"+params.obituary_ID) : 
            (params.funeral_ID && params.funeral_ID != 0 ? ((isfront == 'front' ? '/front' : '')+"/shop/funeral/")+params.funeral_ID : (isfront == 'front' ? '/front' : '')+"/shop")} background="white" onShare={showSharePopup}/>
                <SingleTitleWrapper>
                    <SingleSlider gallery={product_item.gallery ? product_item.gallery : ''}/>
                    <SingleTitle>
                        <h1>{product_item.title ? product_item.title : ''}</h1>
                        {product_item.sale_price ? <>
                            <p>{product_item.regular_price ? product_item.regular_price : ''}</p>   
                            <strong><small>{product_item.sale_percent ? product_item.sale_percent : ''}</small> {product_item.sale_price ? product_item.sale_price : ''}<span>원</span></strong>
                        </> : <>
                            <strong>{product_item.regular_price ? product_item.regular_price : ''}<span>원</span></strong>
                        </>}
                    </SingleTitle>
                    <SingleSubTitle>
                        <p>가장 필요할때, 위로가 되어드립니다.</p>
                        <strong>오늘 3시간 내 배송 예정</strong> <span>(저녁 20시까지 주문 시)</span>
                    </SingleSubTitle>
                </SingleTitleWrapper>
                <SingleTab>
                    <Tab>
                        <li className={(active_tab == 1) ? 'active' : ''}><Link to={"shop/single/"} data-id="1" onClick={ChangeTab}>상세정보</Link></li>
                        <li className={(active_tab == 2) ? 'active' : ''}><Link to={"shop/single/?tab=2"} data-id="2" onClick={ChangeTab}>배송 ∙ 교환</Link></li>     
                    </Tab>
                </SingleTab>
                {(active_tab == 1 ) ? (<SingleView product_item={product_item ? product_item : ''} params={params}/>) : ''}
                {(active_tab == 2 ) ? (<SingleChange product_item={product_item ? product_item : ''} params={params}/>) : ''}
                <HomeFooter />

            </SingleWrapper>
            <SharePopup show={SharePopup_isshow} onClose={showSharePopup} product_item={product_item} />
        </MainContainer>
    );
};

export default ShopSingle;