import styled from 'styled-components';
import {RowWrap, ColWrap} from '../../../components/Grid/styled';
// Details Title //

export const Wrapeer = styled.div`
    padding-bottom: 60px;
`;

export const DetailsTitle = styled.div`
    padding: 40px 30px 30px 30px;
    text-align: center;
    background-color: #24243a;
    background-image: url('/obituary_flower.png');
    background-size: 117px 150px;
    background-position: 105% bottom;
    background-repeat: no-repeat;
    color: white;
    h1{
        font-family: "Noto Serif KR";
        font-size: 25px;
        font-weight: 500;
        line-height: normal;
        strong {
            font-family: "Noto Serif KR";
            font-weight:bold;
        }
        span {
            font-weight: 300 !important;
            font-family: "Noto Serif KR";
        }
    }
    p{
        margin-top: 15px;
        font-family: "Noto Serif KR";
        font-size: 14px;
        font-weight: 300;
        line-height: 1.6;
        color:#FFF4B9;
        /* line-height: normal; */
    }
    img {
        position: fixed;
        width: 52px;
        height: auto;
        top: 12px;
        top: calc(constant(safe-area-inset-top) + 12px);
        top: calc(env(safe-area-inset-top) + 12px);
        left: calc(50% - 26px);
        z-index: 101;
    }
`;

export const DetailsWrapper = styled.div`
    border-bottom: 12px solid #f0f0f0;
`;

export const DetailsContent = styled.div`
    padding: 35px 20px 25px 20px;
    h2{
        margin-bottom: 15px;
        font-family: "NotoSansKR";
        font-size: 18px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
    p{
        margin-bottom: 15px;
        font-family: "NotoSansKR";
        font-size: 17px;
        font-weight: normal;
        line-height: normal;
        color: #666666;
    }
    span{
        display: block;
        margin-bottom: 10px;
        font-family: "NotoSansKR";
        font-size: 17px;
        font-weight: normal;
        line-height: normal;
        color: black;
        position: relative;
        a {
            font-size:15px;
            font-weight:500;
            color:#B4966B;
            text-decoration:none;
            margin-left:10px;
            position:absolute;
            top:-4px;
            right:0px;
            i {
                display:inline-block;
                margin-right:2px;
                width: 12px;
                height:17px;
                background-image: url('/icon-call.png');
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                vertical-align:middle;
            }
        }
    }
    .border{
        margin-bottom: 15px;
        border-bottom: 1px solid #ebebeb;
    }
`;

// Details Title End//

// Details Gallery //

export const GalleryWrapper = styled.div`
    border-bottom: 12px solid #f0f0f0;
    background:#FFF7EA;
`;

export const Gallery = styled.div`
    padding: 0px;
    /* padding: 35px 20px 40px 20px; */
`;

export const GalleryTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 19px;
        text-align: center;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
`;

export const GalleryContent = styled.div`
    padding-top: 0px;
    margin: 0px;
    /* div:nth-of-type(3) {
        position: relative;
        :after {
            display: ${props => props.total ? 'block' : 'none'};
            position: absolute;
            content: "";
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 5px;
        }
        :before {
            display: block;
            position: absolute;
            content: "${props => props.total ? '+' + props.total : ''}";
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            color: #fff;
            font-size: 26px;
            z-index: 3;
        }
    } */
    ${props => props.total > 0 ? `` : `<Link to={"/obituary/"+params.obituary_ID+"/messagelist/"}>
                            <MessageSubContent>
                                <h3>조문 메시지 모두 보기</h3>
                            </MessageSubContent>
                        </Link>
        div:nth-of-type(3){
            :after{
                display: none;
            }
            :before{
                display: none;
            }
        }`
    };
`;

export const GalleryListWrapper = styled.div`
    width: 100%;
    position:relative;
    .play {
        position:absolute;
        width:100%;
        height:100%;
        left:0px;
        top:0px;
        background:rgba(0,0,0,0.4);
        i {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            display:block;
            width: 50px;
            height: 50px;
            background-image:url('/play.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size:100%;

        }
    }
    div:not(:last-child){
        /* margin-right: 5%; */
    }
`;

export const GalleryList = styled.div`
    ${props => props.url ? `background-image: url("${props.url}");` : ''};
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 0px;
    padding-bottom: 57%;
    display: inline-block;
    /* border: 1px solid #ebebeb; */
    /* border-radius: 5px; */
`;

export const GallerySlickWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: calc(100vh + 50px);
    top: 0;
    left:0;
    z-index: 999;
    background: #000;
    padding-top: 0px;
    overflow-y: hidden;
    ${props => props.isopen ? `display: block;` : `display: none;`};
`;

export const GalleryContainer = styled.div`
    position: relative;
`;

export const Card = styled.div`
    height: 100vh;
    ${props => props.url ? `background-image: url("${props.url}");` : ''};
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const SlickWrap = styled.div`
    .slick-next,
    .slick-prev{
        
    }
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
        bottom: 20px;
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

export const settings ={

    swipe: true, // 마우스로 드래그 기능, 마우스 슬라이드로 밀어주는 기능
    fade: true, // 사라지는 효과, 페이드 기능 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			// 자동 스크롤 사용 여부
    autoplaySpeed : 7000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    responsive: [
        {
            breakpoint: 770,
            settings: {
                swipe: true, //마우스로 드래그 기능, 마우스 슬라이드로 밀어주는 기능
                fade: true, // 사라지는 효과, 페이드 기능 
                infinite : true, 	//무한 반복 옵션	 
                slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
                slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
                speed : 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
                arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
                dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
                autoplay : true,			// 자동 스크롤 사용 여부
               }
        }
    ]
}




// Details Gallery End //

// Details Map //

export const MapWrapper = styled.div`
    border-bottom: 12px solid #f0f0f0;
`;

export const MapView = styled.div`
    padding: 35px 20px;
`;

export const MapTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
`;

export const MapLocation = styled.div`
    margin-top: 16px;
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    position:relative;
    a {
        display:block;
        background:rgba(0,0,0,0);
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        position:absolute;
        z-index:50;
    }
`;

export const MapContent = styled.div`
    background: #fafafa;
    border-radius: 6px;
    padding: 15px 14px 14px 10px;
    img{
        width: 15px;
        height: 20px;
        margin-right: 8px;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 14px;
        width: 100%;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
`;

export const MapSubContent = styled.div`
    margin-top: 30px;
    padding: 0 -28px;
    display: flex;
    justify-content: space-around;
    div{
        display: inline-block;
        text-align: center;
        width: 52px;
        img{
            width: 20px;
            height: 20px;
        }
        p{
            margin-top: 6px;
            font-size: 12px;
            font-weight: 500;
            line-height: normal;
            color: #666666;
        }
    }
`;

// Details Map End //

// Details Message //

export const MessageWrapper = styled.div`
    border-bottom: 12px solid #f0f0f0;
`;

export const Message = styled.div`
    padding: 35px 20px;
    a{
        text-decoration: none;
    }
    p{
        margin-top: 20px;
    }
`;

export const MessageTitle = styled.div`
    img{
        margin-top: -12px;
        width: 42px;
        height: 42px;
        float: right;
    }
    h1{
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
    span{
        font-family: "Poppins";
        font-size: 16px;
        font-weight: bold;
        line-height: normal;
        color: #ff5540;
    }
`;

export const MessageContent = styled.div`
    h2{
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        color: black;
    }
    span{
        float: right;
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #666666;
    }
    p{
        margin-top: 8px;
        margin-bottom: 16px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
    div{
        margin-top: 20px;
        border-bottom: 1px solid #ebebeb;
    }
    div:nth-of-type(3){
        margin-bottom: 26px;
        border-bottom: 0px;
    }
`;

export const MessageSubContent = styled.div`
    padding: 7px;
    text-align: center;
    border-radius: 6px;
    border: solid 1px #d2d2d2;
    background-color: #ffffff;
    h3{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        color: black;
    }
`;

// Details Message End //

// Details User //

export const UserWrapper = styled.div`
    padding: 35px 20px;    
`;

export const UserTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
`;

export const UserContent = styled.div`
    margin-top: 16px;
    div {
        margin-bottom:10px;
    }
    img{
        width: 31px;
        height: 31px;
        border-radius: 50%;
    }
    h2{
        margin-left: 8px;
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        color: black;
    }
`;

// Details User End //

// Details Footer //

export const DetailsFooter = styled.div`
    padding: 8px 20px;
    background: #fafafa;
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    z-index: 99;
`;

export const FooterButton = styled.div`
    margin: 0 auto;
    padding-bottom: calc(constant(safe-area-inset-bottom) + 0px);
    padding-bottom: calc(env(safe-area-inset-bottom) + 0px);
    margin: 0 -5px;
    a{  
        height: 44px;
        border: solid 1px #d2d2d2;
        border-radius: 6px;
        margin: 0 5px;
    }
    a:nth-of-type(3){
        color: #fff;
        background: #24243a;
    }
    div{
        text-align: center;
        justify-content: space-around;
    }

`;

// Details Footer End //

// Message List //

export const MessageListWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 50px);
    background: #f7f7f7;
`;

export const MessageListTitleWrapper = styled.div`
    background: #24243a;
    padding: 15px 0px 30px 0px;
`;

export const MessageListTitle = styled.div`
    text-align: center;
    h1{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: normal;
        line-height: normal;
        color: #ffffff;
    }
    p{
        font-family: "Poppins";
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
        color: #e1a770;
        display: inline-block;
    }
    span{
        font-family: "Poppins";
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
        color: #ffffff;
    }
`;

export const MessageListContent = styled.div`
    padding: 0px 20px;
    background: #f7f7f7;
    a{
        text-decoration: none;
    }
`;

export const ListContent = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
    img{
        width: 60px;
        height: 87px;
    }
    h2{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
    p{
        margin-top: 7px;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: black;
    }
    span{
        display: block;
        margin-top: 3px;
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #8c8c8c;
    }
`;

export const ListShortcuts = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1300;
    img{
        width: 60px;
        height: 60px;
    }
`;

// Message List End //

// Message Write //

export const MessageWriteWrapper = styled.div`
    padding: 30px 20px 115px 20px;
    background: #f7f7f7;
`;

export const MessageWriteTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 24px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
`;

export const MessageWrteContent = styled.div`
    margin-top: 33px;
`;

export const Counter = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #8c8c8c;
`;



// Message Write End //

// Message Single //

export const MessageSlickLayerPopup = styled.div`
    ${props => props.isopen ? `opacity:1; visibility: visible;` : 'opacity:0; visibility: hidden;'};
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left:0;
    z-index: 999;
    overflow-y: hidden;
    padding-top: 50px;
`;

export const MessageSingleWrapper = styled.div`
    position: relative;
    height: calc(100vh - 50px);
    background:#f7f7f7;
`;

export const MessageSingleTitleWrapper = styled.div`
    background: #24243a;
    padding: 13px 0px 20px 0px;
`;

export const MessageSingleTitle = styled.div`
    text-align: center;
    h1{
        font-size: 16px;
        font-weight: normal;
        line-height: normal;
        color: #ffffff;
    }
    strong{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: #ffffff;
    }
    small{
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 400;
        color: #e1a770;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        color: #e1a770;
    }
`;

export const SingleContentWrapper = styled.div`
    background-color: #f7f7f7;
    height: calc(100vh - 146px);
    ${props => props.url ? `background: url("${props.url}");` : ''};
    background-size: 80%;
    background-position: left bottom; 
    background-repeat: no-repeat;
`;

export const MessageSingleContent = styled.div`
    padding: 53px 40px 0px 40px;
`;


export const SingleContent = styled.div`
    text-align: center;
    position: relative;
    p{
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
    p:first-child {
        margin-bottom: 30px;
    }
    p:nth-of-type(2) {
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 8px;
    }
    p:nth-of-type(4){
        margin-top: 32px;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: black;
    }
    span{
        display: block;
        margin-top: 8px;
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #8c8c8c;
    }
`;

export const SingleShortcuts = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    img{
        width: 60px;
        height: 60px;
    }
`;

export const Hidden = styled.div`position:absolute;left:-1000px;`;


export const MessageSlickWrap = styled.div`
    height: calc(100vh - 50px);
    
    .slick-arrow {
        z-index:1000;
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

    .slick-prev {
        position: absolute;
        top: 37px;
        left: 40px;
        z-index: 1200;
    }
    .slick-next {
        top: 37px;
        right: 40px;
        z-index: 1200;
    }

    .slick-prev:before {
        content: "〈";
    }

    .slick-next:before {
        content: "〉";
    }
    .slick-slider {
        display: none;
    }
    .slick-initialized {
        display: block;
    }

`;

export const Messagesettings ={

    infinite : true, 	//무한 반복 옵션	 
    initialSlide: '',
    slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 750,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : false,			// 자동 스크롤 사용 여부
    autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    responsive: [
        {
            breakpoint: 770,
            settings: {
                infinite : true, 	//무한 반복 옵션	 
                slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
                slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
                speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
                arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
                dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
                autoplay : false,			// 자동 스크롤 사용 여부
                autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
                pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            }
        }
    ]
}
// Message Single End//


export const MemoWrapper = styled.div`
    padding: 35px 20px;
    border-top: 12px solid #f0f0f0;
`;
export const MemoTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
`;
export const MemoNotice = styled.div`
    margin: 10px 0 0 0;
`;