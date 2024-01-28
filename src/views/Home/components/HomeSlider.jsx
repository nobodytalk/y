import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import {Link, useParams} from 'react-router-dom';
import {
        SliderFirstList,
        SliderSecondList,
        SliderThirdList,
        SliderContent,
        SliderSecondContent,
        HomeSliderWrapper,
        SliderWrapper,
        SliderForList,
        } from '../styled';

import {ObituaryGetPosts} from '../../../api/obituary';

export const settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed : 6000, 	
    autoplay: true,
    arrows: false,
    dots: true,
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
    .slick-dots{
        button{
            display: none;
        }
    }
    .slick-dots {
        text-align: center;
        position: absolute;
        bottom: 30px;
        li {
            margin: 5px;
            color: white;
            display: inline-block;
        }
        button {
            display: inline-block;
            width: 10px;
            height: 10px;
            padding: 0;
            font-size: 0px;
            border: none;
            border-radius: 100%;
            background-color: #999999;
            opacity: 0.5;
        }
        li.slick-active button {
            background-color: #999999;
            opacity: 1;
        }
    }
    .slick-dots li button:before{
        display: none;
    }
    
`;


const HomeSlider = () => {
    
    return(
        <HomeSliderWrapper>
            <SliderWrapper>
                <SlickWrap>
                    <Slider {...settings}>
                        <Link to={"/shop/"}>
                            <SliderFirstList url="/img/mainimg1.png">
                                <SliderContent>
                                    <h1>화환 보내기</h1>
                                    <p>예품의 품격있는 화환을</p>
                                    <p>보내세요.</p>
                                    <div className="line" />
                                </SliderContent>
                            </SliderFirstList>
                        </Link>
                        <Link to={"/obituary/make"}>
                            <SliderThirdList url="/img/mainimg2.png">
                                <SliderContent>
                                    <h1>부고장 작성</h1>
                                    <p>편하고 쉽게 부고장을 작성하여</p>
                                    <p>부고를 전하세요.</p>
                                    <div className="line" />
                                </SliderContent>
                            </SliderThirdList>
                        </Link>
                        <Link to={"/obituary/list"}>
                            <SliderSecondList url="/img/mainimg3.png">
                                <SliderContent>
                                    <h1>나의부고 수정하기</h1>
                                    <p>작성하신 부고장을 확인하고</p>
                                    <p>지인분들께 알리세요.</p>
                                    <div className="line" />
                                </SliderContent>
                            </SliderSecondList>
                        </Link>
                        <Link to={"/search"}>
                            <SliderForList url="/img/mainimg0.png">
                                <SliderContent>
                                    <h1>부고 찾기</h1>
                                    <p>찾으시려는 지인의 부고를</p>
                                    <p>검색하세요.</p>
                                    <div className="line" />
                                </SliderContent>
                            </SliderForList>
                        </Link>
                    </Slider>
                </SlickWrap>
            </SliderWrapper>
        </HomeSliderWrapper>
    )
}

export default HomeSlider;

