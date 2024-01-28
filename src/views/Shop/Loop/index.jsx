import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import Header from '../../../components/Header';
import {Tab} from '../../../components/Tab';
import Button from '../../../components/Button';
import MainContainer from '../../../components/MainContainer';
import Filters from './components/Filters';
import { Link,useParams } from 'react-router-dom';
import WreathSlider from './components/WreathSlider';
import WreathList from './components/WreathList';
import SharePopup from '../Loop/components/SharePopup';
import Footer from '../../../views/Home/components/HomeFooter';
import {
    ShopWrapper,
    WreathTitle,
    FuneralBar,
    WreathTabWrapper,
    WreathContent,
    WreatchContentList,
    Wreatch,
    WreathListWrapper,
    ListContent,
} from './styled';
import {FuneralAlert} from './components/Popups';
import {ProductGetPosts} from '../../../api/product';
import {FuneralGetPost} from '../../../api/funeral';
import {ObituaryGetPost} from '../../../api/obituary';

const Shop = () => {
    const Dispatch = useDispatch();
    const params = useParams();
    const [funeral_name, set_funeral_name] = useState('');
    const [flower_list, set_flower_list] = useState('');
    const [active_tab, set_active_tab] = useState(1);
    const [filter, update_filter] = useState({
        price_range: '',
        relation: '',
        category: '',
    });
    const [save_filter, update_save_filter] = useState();
    const ChangeTab = (e) => {
        e.preventDefault();
        set_active_tab(e.target.dataset.id)
    }
    
    const UpdateFilter = (name, value) => {
        var draft_filter = {
            price_range: '',
            relation: '',
            category: ''
        };
        draft_filter[name] = value;
        update_filter(draft_filter);
    }

    const isfront = window.location.pathname.slice(1,6);

    useEffect(()=>{
        if(!funeral_name && params.funeral_ID) {
            FuneralGetPost({
                funeral_ID: params.funeral_ID
            })
            .then(response => {
                if(response.data.code == '200') {
                    set_funeral_name(response.data.body.post_title);
                }
            })
        }

        else if(!params.funeral_ID && params.obituary_ID) {
            ObituaryGetPost({ obituary_ID: params.obituary_ID })
            .then((response) => {
                if(response.data.code == '200') {
                    FuneralGetPost({
                        funeral_ID: response.data.body.funeral_ID
                    })
                    .then(response => {
                        if(response.data.code == '200') {
                            set_funeral_name(response.data.body.post_title);
                        }
                    })
                }
            })
            .catch(err => console.log(err))
        }

        if(filter != save_filter) { 
            Dispatch(SetLoading(1));
            update_save_filter(filter);
            ProductGetPosts({
                price_range: filter.price_range,
                relation: filter.relation,
                category: filter.category,
                funeral_ID: params.funeral_ID,
                obituary_ID: params.obituary_ID,
                posts_per_page: 50,
                paged: 0,
            })
            .then((response) => {
                if(response.data.code == '200') {
                    set_flower_list(response.data.body.products);
                    console.log(response.data.body.products);
                } else {

                    set_flower_list('');
                }
                Dispatch(SetLoading(0)); 
            })
            .catch((error) => console.log(error));
        }
        
    })

    const [SharePopup_isshow,show_SharePopup] = useState(0);
    const showSharePopup = (e) => {
        e.preventDefault();
        if(SharePopup_isshow) {
            show_SharePopup(0);
        } else {
            show_SharePopup(1);
        }
    }

    
    return (
        <MainContainer>
           <ShopWrapper>
                
                <Header onHome={isfront == 'front' ? 0 : 1} onBack={isfront == 'front' && !params.obituary_ID ? 0 : 1} to={(params.obituary_ID) ? ((isfront == 'front' ? '/front': '')+"/obituary/"+params.obituary_ID) : '/#/'} onShare={showSharePopup} title="화환 보내기" background="white" />
                <FuneralBar>
                    <h3><span>{funeral_name ? funeral_name : 'OOO 장례식장'}</span>에 배송합니다.</h3>
                    {isfront == 'front' && params.obituary_ID ?
                        '' : <Button width="100px" to={(isfront == 'front' ? '/front' : '')+'/shop/funeral'} color="#333"><p>{params.funeral_ID || params.obituary_ID ? '장례식장 변경' : '장례식장 선택'}</p></Button>
                    }
                </FuneralBar>
                <WreathSlider />
                {/* <WreathSlider items={shop_item.items} /> */}
                <Tab>
                    <li className={(active_tab == 1) ? 'active' : ''}><Link to={"shop/"} data-id="1" onClick={ChangeTab}>가격대</Link></li>
                    <li className={(active_tab == 2) ? 'active' : ''}><Link to={"shop/?tab=1"} data-id="2" onClick={ChangeTab}>지인관계</Link></li>
                    <li className={(active_tab == 3) ? 'active' : ''}><Link to={"shop/?tab=2"} data-id="3" onClick={ChangeTab}>카테고리</Link></li>
                </Tab>
                <WreathTabWrapper>
                    <Filters filter={filter} active_tab={active_tab} UpdateFilter={UpdateFilter}/>
                    
                    <WreathListWrapper>
                        {flower_list ? flower_list.map((product_item, key) => (
                            <ListContent url={product_item.thumbnail ? product_item.thumbnail : ''}>
                                <Link to={(isfront == 'front' ? '/front' : '')+"/shop/detail/"+product_item.ID+'/'+(params.funeral_ID ? params.funeral_ID : 0)+'/'+(params.obituary_ID ? params.obituary_ID : '')}>
                                    <div />

                                    <h1>{product_item ? product_item.title : ''}</h1>
                                    {product_item.sale_price ? <>
                                        <p>{product_item.regular_price}</p>
                                        <strong><small>{product_item.sale_percent}</small> {product_item.sale_price}<span>원</span></strong>
                                    </> : <>
                                        <strong>{product_item.regular_price}<span>원</span></strong>
                                    </>}


                                    {/* {!product_item.sale_price && (<strong>{product_item.regular_price}<span>원</span></strong>)}
                                    {product_item.sale_price && (<strong><small>{product_item.sale_percent}</small> {product_item.sale_price}<span>원</span></strong>) } */}
                                </Link>
                            </ListContent>
                        )) : ''}
                    </WreathListWrapper>
                </WreathTabWrapper>

                {/* {!params.obituary_ID && (
                    <>
                        {!params.funeral_ID ? (<FuneralAlert/>) : ''}
                    </>
                )} */}
                
                {/* <div dangerouslySetInnerHTML={{__html: page_data.post_content}} /> */}

                <Footer />
                <SharePopup show={SharePopup_isshow} onClose={showSharePopup}/>
           </ShopWrapper>
        </MainContainer>
    );
};

export default Shop;