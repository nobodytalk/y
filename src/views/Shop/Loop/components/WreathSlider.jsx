import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import {
    WreathSliderWrapper,
    SliderList,
    SliderWreath,
    SliderDelivery,
    SliderLists,
    SliderListd,
    SliderStamp,
} from '../styled';

import ListPopup from '../Popup/ListPopup';

import { ProductGetFlowerSlider } from '../../../../api/product';

export const settings ={
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000, 	
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
    ]
}

const SlickWrap = styled.div`
    .slick-slide{
        display: inline-block;
    }
`;

const WreathSlider = (props) => {

    const [active_item, update_active_item] = useState(-2);
    const showListPopup = (e) => {
        e.preventDefault();
        if(e.currentTarget.dataset.key) { 
            if(active_item == e.currentTarget.dataset.key) {
                update_active_item(-2);
            } else {
                update_active_item(e.currentTarget.dataset.key);
            }
        } else {
            update_active_item(-2);
        }
    }

    const [slider_item, set_slider_item] = useState('');

    useEffect(()=>{
        if(!slider_item){
            ProductGetFlowerSlider()
            .then(response=>{
                if(response.data.code == '200');
                set_slider_item(response.data.body.items)
            })
        }
    }, [window])

    //()=>window.location.href=item.link//

    return (
        <WreathSliderWrapper>
            <SlickWrap>
                <Slider {...settings}>
                    {slider_item ? slider_item.map((item, key) => (
                        <SliderList url={item.image} onClick={item.content ? showListPopup : ()=>window.location.href=item.link} data-key={key+1}>
                            <SliderWreath>
                                <p>{item.badge}</p>
                            </SliderWreath>
                        </SliderList>
                    )) : ''}
                    {/* <SliderList url="/img/shopimg1.png">
                        <SliderWreath>
                            <strong>마음을 담은 메시지</strong>
                            <small>정성으로 동행합니다</small>
                            <p onClick={showListPopup}>STORY</p>
                        </SliderWreath>
                    </SliderList>
                    <SliderLists>
                        <SliderDelivery>
                            <p>결제 완료 후</p>
                            <p>3시간 내 배송</p><p>됩니다!</p> 
                            <img src={process.env.PUBLIC_URL + '/Delivery.png'} alt=""/>
                            <img src={process.env.PUBLIC_URL + '/Delivery2.png'} alt=""/>
                            <img src={process.env.PUBLIC_URL + '/Delivery3.png'} alt=""/>
                            <span onClick={showListsPopup}>배송안내보기</span>
                        </SliderDelivery>
                    </SliderLists>
                    <SliderListd>
                        <SliderStamp>
                            <p>스탬프 모으면</p>
                            <p>스타벅스음료</p><p>를 선물로!</p>
                            <img src={process.env.PUBLIC_URL + '/img/shopimg8.png'} alt=""/>
                            <span onClick={showListdPopup}>스탬프안내</span>
                        </SliderStamp>
                    </SliderListd> */}
                </Slider>
            </SlickWrap>
            <ListPopup show={active_item} content={ ((active_item > 0) && slider_item) ? (slider_item[active_item - 1].content ? slider_item[active_item - 1].content : '') : ''} onClose={showListPopup} />
        </WreathSliderWrapper>
    );
};

export default WreathSlider;