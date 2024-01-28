import styled from 'styled-components';
import {ColWrap} from '../../components/Grid/styled';

export const HomeWrapper = styled.div`
    background-color: #f3f4fa;
    background-size: cover;
    width: 100%;
    height: auto;
    padding-top: 6px;
    padding-top: calc(constant(safe-area-inset-top) + 6px);
    padding-top: calc(env(safe-area-inset-top) + 6px);
`;

export const HomeTitle = styled.div`
    margin-top: 0px;
    margin-left: 26px;
    h1{
        font-size: 21px;
        font-weight: 600;
        line-height: normal;
        color: #333333;
    }
    small{
        color:  #b37c29;
    }
    p{
        margin-top: 15px;
        font-size: 15px;
        font-weight: 400;
        line-height: normal;
        color: #999999;
    }
    span{
        font-size: 15px;
        font-weight: 400;
        line-height: normal;
        color: #333;
    }
`;

// Home Title End //

// Home Header //

export const HomeHeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
`;

export const HeaderSection = styled.div`
    position: fixed;
    top: 0;
    top: calc(constant(safe-area-inset-top) - 0px);
    top: calc(env(safe-area-inset-top) - 0px);
    left: 0;
    z-index: 1;
    width: 100%;
    height: 80px;
    background: #f3f4fa;
    transition: .4s ease;
    &.hide {
        transform: translateY(-80px);
    }
`;

export const HeaderImg = styled.div`
    img{
        margin: 0 auto;
        margin-top: 32px;
        display: block;
        width: 60px;
        height: auto;
    }
`;

export const SearchToggle = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    img {
        width: 18px;
        height: auto;
    }
`;

export const HamBurger = styled.div`
    position: absolute;
    line-height: 50px;
    top: 30px;
    left: 20px;

    z-index: 999997;
    div {

        width: 30px;
        height: 20px;
        position: relative;
        cursor: pointer;
        & > i {
            border-radius: 1px;
            display: block;
        }

        & > .l , .s {
            ${props => props.background == '#24243a' ? `
                background: white;
            
                
            ` : `background:#111;`}
            position: absolute;
            line-height: 50px;
            width: 18px;
            height: 2px;
            transition: 0.3s;
        }

        & > .l {
            top: 0px;
        }
        & > i:last-child {
            bottom: 0px;
            top: auto;
            width: 60%;
        }
        & > .s {
            top: 5px;
            margin-top: 4px;
            margin-bottom: 4px;
        }
        ${props => {
            if(props.isopen) {
                return `
                    & > .s {
                        display:none;
                    }
                    & > .l {
                        background: white;
                        width: 150%;
                    }
                    & > i:first-child {
                        transform:rotate(-45deg);
                        top: 8px;
                        left: 6px;
                        width: 80%;
                    }
                    & > i:last-child {
                        transform:rotate(45deg);
                        top: 8px;
                        left: 6px;
                        bottom: auto;
                        width: 80%;
                    }
                `;
            }
        }}
    }
`;

export const SideMenu = styled.div`
    width: 100%;
    height: 100%;
    transition: .4s;
    position: fixed;
    top: 0px;
    z-index: 99999;
    color: #fff;
    background:#24243a;
    box-sizing: border-box;
    overflow-y: scroll;
    ${props=>props.isopen ? `display:block` : `display:none`}
`;

export const SideWrapper = styled.div`
    /* padding: 98px 25px 62px 25px; */
    padding: 0;
    padding-top: calc(constant(safe-area-inset-top) + 0px);
    padding-top: calc(env(safe-area-inset-top) + 0px);
`;

export const EmptyBox = styled.div`
    position: fixed;
    width: 100%;
    height: 98px;
    background:#24243a;
    z-index: 100;
`;

export const TopMenu = styled.div`
    position: fixed;
    top: 30px;
    top: calc(constant(safe-area-inset-top) + 30px);
    top: calc(env(safe-area-inset-top) + 30px);
    right: 20px;
    z-index: 999997;
    h1{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
        text-align: right;
        color: #e1a770;
    }
`;

export const Content = styled.div`
    padding: 98px 26px 42px 26px;
    a{
        text-decoration: none;
    }
    a:last-child{
        display: block;
    }
    h2{
        position: relative;
        font-family: "NotoSansKR";
        font-size: 22px;
        font-weight: 500;
        line-height: 46px;
        color: #ffffff;
    }
    div{
        position: relative;
        margin: 20px 0px;
        border-bottom: 1px solid rgba(255, 255, 255 , 0.1);
    }

`;

export const SearchWrapper = styled.div`

`;

export const SearchBar = styled.div`

`;

export const Overlay = styled.div`

`;

// Home Header End //

// Home Slider //

export const HomeSliderWrapper = styled.div`
    overflow-x: hidden;
    position: relative;
    margin: 40px 0px 40px 16px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    -moz-border-top-left-radius: 20px;
    -moz-border-bottom-left-radius: 20px;
    -webkit-border-top-left-radius: 20px;
    -webkit-border-bottom-left-radius: 20px;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    a{
        text-decoration: none;
    }
`;

export const SliderWrapper = styled.div`
`;

export const SliderFirstList = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 42%; 
    background-repeat: no-repeat;
    transition: .3s;
    height: auto;
`;

export const SliderSecondList = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: 162%;
    background-position: 10% 18%;
    background-repeat: no-repeat;
    transition: .3s;
    height: auto;
`;

export const SliderThirdList = styled.div`
    position: relative;
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: 370% 250%;
    background-position: 40% 12%;
    background-repeat: no-repeat;
    transition: .3s;
    height: auto;
    :after {
        display: block;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.2);
    }
`;

export const SliderContent = styled.div`
    position: relative;
    z-index: 999;
    padding: 113px 0px 45px 31px;
    h1{
        padding-bottom: 6px;
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
        color: #ffffff;
    }
    p{
        font-size: 15px;
        font-weight: 300;
        line-height: normal;
        color: #ffffff;
    }
    .line{
        padding-top: 20px;
        width: 57px;
        border-bottom: 2px solid #ffffff; 
    }
`;

export const SliderForList = styled.div`
    position: relative;
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: .3s;
    height: auto;
`;

// Home Slider End //


// Home Contenet //

export const HomeContentWrapper = styled.div`
    margin: 40px 16px;
`;

export const ContentTitle = styled.div`
    h2{
        font-size: 18px;
        font-weight: 600;
        line-height: normal;
        color: #333333;
        margin-bottom: 16px;
    }
`;

export const ContentList = styled.div`
    .border{
        width: 75px;
        height: 75px;
        padding: 0px;
        border-radius: 30px;
        margin-bottom: 12px;
        box-shadow: 0 0 13px 0 rgba(184, 184, 184, 0.03);
        background: #fff;
        background-position: center center;
        background-repeat: no-repeat;
    }
    > a:nth-of-type(1) {
        .border {
            background-image: url(/img/main_content1.png);
            background-size: 60%;
        }
    }
    > a:nth-of-type(2) {
        .border {
            background-image: url(/img/main_content3.png);
            background-size: 60%;
        }
    }
    > a:nth-of-type(3) {
        .border {
            background-image: url(/img/main_content4.png);
            background-size: 60%;
        }
    }
    > a:nth-of-type(4) {
        .border {
            background-image: url(/img/main_content2.png);
            background-size: 60%;
        }
    }
    > a:nth-of-type(5) {
        .border {
            background-image: url(/img/main_content5.png);
            background-size: 60%;
        }
    }

    a{
        text-decoration: none;
        color: #232323;
    }
    a:last-child{
        display: block;
    }


    ${ColWrap}:nth-of-type(1){ 
        
    }
    ${ColWrap}:nth-of-type(2){
        h3{
            padding-top: 13px;
            font-size: 18px;
            line-height: normal;
        }
        p{
            font-size: 13px;
            font-weight: 400;
            line-height: 26px;
            color: #717070;
        }
    }
        
    @media(max-width: 340px){
        ${ColWrap}:nth-of-type(1){
        }
        ${ColWrap}:nth-of-type(2){
            padding-left: 10px;
            h3{
                padding-top: 5px;
                font-size: 16px;
            }
            p{
                font-size: 12px;
            }
        }
    }
`;


// Home Content End //


// Home Footer //

export const HomeFooterWrapper = styled.div`
    width: 100%;
    padding: 20px 30px 20px 30px;
    background-color: #333333;
`;

export const FooterContent = styled.div`
    text-align: center;
    a{
        text-decoration: none;
    }
    div{
        display: inline-block;
        border: 1px solid #979797;
        background-color: #979797;
        width: 1px;
        height: 10px;
        margin: 0px 7px;
    }
    p{
        display: inline-block;
        color: #979797;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.14;
    }
`;

export const FooterSubWrapper = styled.div`
    > p {
        font-size: 12px;
        color:#ddd;
        margin-top: 20px;
        text-align: center;
    }
`;

export const FooterSub = styled.div`
    p{
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        line-height: 2.14;
        text-align: center;
        margin-top: 10px;
        position: relative;
    }
    span{
        font-family: "Poppins";
        font-weight: normal;
        font-size: 14px;
        line-height: 2.14;
        color: #979797;
        margin-bottom: 5px;
        display: block;
        text-align: center;
    }
`;

export const Arrow = styled.div`
    svg{
        transform: ${props=>props.toggled ? 'rotate(-90deg)' : 'rotate(90deg)'};
        position: absolute;
        top: 27%;
        left: calc(50% + 45px);
        
    }
`;

export const FooterAnswer = styled.div`
    display: block;
`;

export const Answer = styled.div`
    text-align: center;
    
    p{
        font-family: "NotoSansKR";
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        color: #979797;
    }
`;

// Home Footer End //

export const Wrapper = styled.div`
    padding: 0 25px;
    padding-top: 15px;

    h3, p {
        font-size: 14px;
    }

    h3{
        font-weight: 500;
        line-height: 40px;
        color: #111;
    }
    p {
        color: #888;
        line-height: 25px;
        margin-bottom: 30px;
    }
`;