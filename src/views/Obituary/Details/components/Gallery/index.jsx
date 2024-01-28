import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import {Link, useParams} from 'react-router-dom';
import Header from '../../../../../components/Header';

import {GalleryWrapper,
    Card} from './styled';
import {ObituaryGetGallery} from '../../../../../api/obituary';


export const settings ={

    responsive: [
        {
            breakpoint: 770,
            settings: {
                infinite : true, 	//무한 반복 옵션	 
                slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
                slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
                speed : 750,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
                arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
                dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
                autoplay : false,			// 자동 스크롤 사용 여부
                autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
                pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            }
        }
    ]
}

const SlickWrap = styled.div`

    .slick-arrow {
        z-index:200;
    }
    .slick-prev:before {
        opacity: 1;
        color: #fff;
    }
    .slick-next:before {
        opacity: 1;
        color: #fff;
    }

    .slick-slide{
        display: inline-block;
    }
    .slick-dots {
        position: absolute;
        bottom: -100px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
    }

    .slick-dots li button:before {
        color: #d8d8d8;
    }
    .slick-dots li.slick-active button:before {
        opacity: 1;
    }
    .slick-dots li {
        position: relative;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 2px;
        padding: 0;
        cursor: pointer;
    }
    .slick-prev {
        position: absolute;
        top: -30%;
        left: 20%;
        z-index: 200;
    }
    .slick-next {
        top: -30%;
        right: 20%;
        z-index: 200;
    }

`;



const Gallery = () => {
    const params = useParams();

    const [gallery, set_gallery] = useState(0);

    useEffect(() => {
        if(!gallery) {
            ObituaryGetGallery({
                obituary_ID: params.obituary_ID,
                posts_per_page: 50,
                page: 0
            })
            .then((response) => {
                if(response.status == 200) {
                    set_gallery(response.data.body);
                    console.log(response.data.body);
                }
            })
            .catch((err) => console.log(err));
        }
    });

    return (
        <GalleryWrapper>
            <Header onBack color="#fff" title="추모갤러리" background="#000" border="rgba(242, 242, 242, 0.1)"/>
            <SlickWrap>
                <Slider {...settings}>
                    {gallery ? gallery.map((item,key) => (
                        <Card url={item.thumb_image_url} />
                    )) : ''}
                </Slider>
            </SlickWrap>
        </GalleryWrapper>
    );
};

export default Gallery;