import styled from 'styled-components';

export const ShopWrapper = styled.div`
    overflow-x: hidden;
`;
// WreathTitle End //

export const FuneralBar = styled.div`
    z-index:99;
    width: 100%;
    background:#333333;
    height: 40px;
    position: relative;
    h3 {
        font-size:14px;  
        font-family: "NotoSansKR";
        font-weight: 500;  
        color: #fff;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        span {
            font-weight: normal;
            color:#e1a770;
        }
    }
    a {
        position: absolute;
        height: 26px;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #f0f0f0;
        border-radius: 17.5px;
        p{
            font-family: "NotoSansKR";
            font-size: 12px;
            font-weight: bold;
            line-height: 26px;;
            color: #333333;
        }
    }
`;

// WreathTab //

export const WreathTabWrapper = styled.div`
    margin-top: -3px;
`;

export const WreathContent = styled.div`
    max-width: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
`;

export const WreatchContentList = styled.ul`
    position: relative;
    width: ${props=>(props.items * 110)+'px'};
    min-width: 100%;
    border-top: 1px solid #f2f2f2;
    height: auto;
    box-sizing: border-box;
    background: #f7f7f7;
    li{
        padding: 20px 0px 20px 5px;
        display: inline-block;
    }
    li:first-child{
        padding-left: 20px;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: 500;
        line-height: normal;
        margin-top: 6px;
        text-align: center;
        color: #888888;
        border: 1px solid#d2d2d2;
        border-radius: 17.5px;
        padding: 7px 12px;
    }
    a{
        text-decoration: none;
    }
    li.active p {
        border: 1px solid #24243a;
        color: #24243a;
    }
`;

export const WreatchContentLists = styled.div`
    position: relative;
    width: ${props=>(props.items * 95)+'px'};
    min-width: 100%;
    border-top: 1px solid #f2f2f2;
    height: auto;
    box-sizing: border-box;
    background: #f7f7f7;
    li{
        padding: 20px 0px 20px 5px;
        display: inline-block;
    }
    li:first-child{
        padding-left: 20px;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: 500;
        line-height: normal;
        margin-top: 6px;
        text-align: center;
        color: #888888;
        border: 1px solid#d2d2d2;
        border-radius: 17.5px;
        padding: 7px 12px;
    }
    a{
        text-decoration: none;
    }
    li.active p {
        border: 1px solid #24243a;
        color: #24243a;
    }
`;

export const WreatchContentListd = styled.div`
    position: relative;
    width: ${props=>(props.items * 80)+'px'};
    min-width: 100%;
    border-top: 1px solid #f2f2f2;
    height: auto;
    box-sizing: border-box;
    background: #f7f7f7;
    li{
        padding: 20px 0px 20px 5px;
        display: inline-block;
    }
    li:first-child{
        padding-left: 20px;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: 500;
        line-height: normal;
        margin-top: 6px;
        text-align: center;
        color: #888888;
        border: 1px solid#d2d2d2;
        border-radius: 17.5px;
        padding: 7px 12px;
    }
    a{
        text-decoration: none;
    }
    li.active p {
        border: 1px solid #24243a;
        color: #24243a;
    }
`;

export const Wreatch = styled.div`
    border: 1px solid #fff;
    border-radius:50%;
    ${props => props.url ? `background-image: url("${props.url}");` : ''};
    background-size: cover;
    width: 60px;
    height: 60px;
    :after{
        
    }
    li.active > a > & {
        border: 1px solid #000;
    }
`;


// Wreath Tab End //

// Wreath List //

export const WreathListWrapper = styled.div`
    background-color: #f7f7f7;
    height: auto;
    padding: 0px 20px 20px 20px;
`;

export const ListContent = styled.div`
    border: 1px solid #ededed;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 24px 0px 23px 10px;
    background-color: #fff;
    position: relative;
    a{
        text-decoration: none;
    }
    div{
        position: absolute;
        width: 100px;
        height: 100%;
        bottom: 0px;
        right: 0px;
        ${props => props.url ? `background: url("${props.url}");` : ''};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    h1{
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        color: #111;
        padding-bottom: 7px;
    }
    p{
        margin-top: 7px;
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #888;
        text-decoration: line-through;
    }
    small{
        font-size: 18px;
        font-weight: normal;
        line-height: normal;
        color: #ba8600;
    }
    strong{
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 600;
        line-height: normal;
        color: #ba8600;
    }
    span{
        font-family: "NotoSansKR";
        font-size: 12px;
        color: #111;
        font-weight: normal;
    }
`;


// Wreath List End //

// Wreath Slider //

export const WreathSliderWrapper = styled.div`

`;

export const SliderList = styled.div`
    position: relative;
    ${props => props.url ?` background: url("${props.url}");` : ''};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 125px;
    @media(max-width:320px){
        height: 110px;
    }
`;

export const SliderWreath = styled.div`
    /* strong, small{
        padding-left: 25px;
        font-size: 18px;
        line-height: normal;
        color: #fff;
        font-family: "Noto Serif KR";
        display: block;
    }
    strong{
        padding-top: 33px;
        font-weight: bold;
    }
    small{
        font-weight: normal;
    } */
    p{
        font-size: 10px;
        font-weight: normal;
        line-height: normal;
        font-family: "NotoSansKR";
        background: rgba(0,0,0,0.3);
        padding: 7px;
        position: absolute;
        bottom: 14px;
        right: 18px;
        z-index: 99999;
        width: auto;
        float: right;
        text-align:center;
        margin: 0 auto;
        color: #fff;
    }

`;

// export const SliderDelivery = styled.div`
//     padding: 36px 0px 40px 25px;
//     p{
//         font-family: "NotoSansKR";
//         font-size: 18px;
//         font-weight: normal;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: 1.22;
//         letter-spacing: normal;
//         color: #ffffff;
//     }
//     p:nth-of-type(2){
//         font-weight: bold;
//         margin-top: 5px;
//         display: inline-block;
//     }
//     p:nth-of-type(3){
//         display: inline-block;
//     }
//     span{
//         position: absolute;
//         bottom: 19px;
//         right: 18px;
//         font-size: 10px;
//         font-weight: normal;
//         line-height: normal;
//         font-family: "NotoSansKR";
//         background: rgba(0,0,0,0.3);
//         padding: 7px;
//         z-index: 99999;
//         float: right;
//         text-align:center;
//         color: #fff;
//     }
//     img{
//         width: 72px;
//         height: 84px;
//         position: absolute;
//         top: 22px;
//         right: 59px;
//         z-index: 9999;
//     }
//     img:nth-of-type(2){
//         width: 20px;
//         height: 14px;
//         position: absolute;
//         top: 40px;
//         right: 50px;
//         z-index: 999;
//     }
//     img:nth-of-type(3){
//         width: 52px;
//         height: 52px;
//         position: absolute;
//         top: 20px;
//         right: 35px;
//         z-index: 999;
//     }
// `;

// export const SliderStamp = styled.div`
//     padding: 36px 0px 40px 25px;
//     p{
//         font-family: "NotoSansKR";
//         font-size: 18px;
//         font-weight: normal;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: 1.22;
//         letter-spacing: normal;
//         color: #ffffff;
//     }
//     p:nth-of-type(2){
//         font-weight: bold;
//         margin-top: 5px;
//         display: inline-block;
//     }
//     p:nth-of-type(3){
//         display: inline-block;
//     }
//     span{
//         position: absolute;
//         bottom: 19px;
//         right: 18px;
//         font-size: 10px;
//         font-weight: normal;
//         line-height: normal;
//         font-family: "NotoSansKR";
//         background: rgba(0,0,0,0.3);
//         padding: 7px;
//         z-index: 99999;
//         float: right;
//         text-align:center;
//         color: #fff;
//     }
//     img{
//         width: 150px;
//         height: 117px;
//         position: absolute;
//         top: 0px;
//         right: 10px;
//         z-index: 9999;
//     }
// `;


// Wreath Slider End //

export const ItemBox = styled.div`
    padding-top: 38px;
    text-align: center;
    > div:first-child {
        margin-right: 60px
    }
`;

export const Title = styled.div`
    position: absolute;
    top: 25px;
    left: 20px;
`;

export const ShareButton = styled.div`
    display: inline-block;
    text-align: center;    
    .kakao {
        background: url(/kakao.png);
        background-size: cover;
        background-position: center center;
        margin: 0 auto;
        margin-bottom: 12px;
    }
    .message {
        background: url(/message.png);
        background-size: cover;
        background-position: center center; 
        margin: 0 auto;
        margin-bottom: 12px;
    }
    span {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #000;
        position: relative;
    }
    a {
        text-decoration: none;
    }
`;

export const Logo = styled.div`
    width: 45px;
    height: 45px;
`;