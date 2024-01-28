import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import {SingleSliderWrapper,
        SliderList,
        DotsBadge
        } from '../styled';

export const settings ={
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed : 5000, 	
    autoplay: true,
    arrows: false,
    dots: false,
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


const SingleSlider = (props) => {
    return (
        <SingleSliderWrapper>
            <SlickWrap>
                <Slider {...settings}>
                    {props.gallery && props.gallery.map((gallery_item, key) => (
                        <SliderList url={gallery_item.image_url}>
                            <DotsBadge>{key+1} / {props.gallery.length}</DotsBadge>
                        </SliderList>
                    ))}
                </Slider>
            </SlickWrap>
        </SingleSliderWrapper>
    );
};

export default SingleSlider;