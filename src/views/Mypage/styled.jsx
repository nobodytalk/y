import styled from 'styled-components';

export const MypageWrapper = styled.div`

`;

// Stamp //

export const StampWrapper = styled.div`
    overflow-x: hidden;
    background-color: #24243a;
    padding: 33px 0px 40px 0px;
`;

export const StampTitle = styled.div`
    position: relative;
    font-family: "NotoSansKR";
    text-align: center;
    strong{
        font-family: "NotoSansKR";
        font-size: 26px;
        font-weight: normal;
        line-height: 1.38;
        color: #ffffff;
    }
    small{
        font-family: "NotoSansKR";
        font-size: 26px;
        font-weight: bold;
        line-height: 1.38;
        color: #ffffff;
    }
`;

export const StampTitleContent = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center center; 
    background-repeat: no-repeat;
    width: 320px;
    height: 380px;
    position: relative;
    margin: -50px auto;
`;

export const StampImg = styled.div`
    position: absolute;
    top: 50px;
    right: -5px;
    img{
        width: 119px;
        height: 131px;
    }
`; 

export const StampTitleSubContent = styled.div`
    margin-bottom: 37px;
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #ffffff;
    }
`;

export const Notice = styled.div`
    width: 221px;
    padding: 6px 27px;
    border-radius: 20px;
    margin: 0 auto;
    background: #ffffff;
    p{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: #24243a;
    }
    span{
        display: inline-block;
        font-weight: bold;
        color: #ff5540;
    }
`;


// Stamp Section End //

// Stamp Content //

export const StampContentWrapper = styled.div`
    background: #f9f9f9;
    padding: 10px;
`;

export const StbWrapper = styled.div`
    margin: 40px 0px;
`;

// Stamp Top //

export const StampTopWrapper = styled.div`
    border-radius: 10px;
    background: #ececec;
    margin-bottom: 76px;
    padding: 36px 15px 63px 15px;
`;

export const TopTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: #888888;
    }
`;

export const TopContent = styled.div`
    margin-top: 27px;
    ul {
        height: 60px;
        li{
            position: relative;
            display: block;
            float: left;
            width: 20%;
            height: 80px;
            padding: 0px 4px;
            div{
                display: block;
                background: #fff;
                border-radius: 100px;
                width: 100%;
                height: 0px;
                padding-bottom: 100%;
                position: relative;
                text-align: center;
                p{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    color: #24243a
                }
            }
        }
        li:nth-of-type(-n + ${props => props.count ? props.count : ''}){
            div{
                :after {
                    display: block;
                    position: absolute;
                    content: "";
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    background-image: url(/img/StampImg3.png);
                    background-size: 100% 100%;
                }
            }
        }
    }
`;

export const TopNotice = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 38px;
    margin-bottom: 0px;
    width: 280px;
    height: 50px;
    border-radius: 30px;
    box-shadow: 0 5px 20px 0 rgba(193, 193, 193, 0.5);
    background: #24243a;
    p{
        font-family: "NotoSansKR";
        font-size: 18px;
        font-weight: 500;
        line-height: 50px;
        text-align: center;
        color: #ffffff;
    }
    ${props => props.count < 5 ? `
        background: #aaa;
    ` : ``};
`;

// Stamp Top End //


// Stamp Bottom //

export const StampBottomWrapper = styled.div`
    border-radius: 10px;
    background: #ececec;
    padding: 36px 15px 63px 15px;
    margin-bottom: 76px;
`;

export const BottomTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: #888888;
    }
`;

export const BottomContent = styled.div`
    margin-top: 27px;
    ul {
        height: 60px;
        li{
            position: relative;
            display: block;
            float: left;
            width: 20%;
            height: 80px;
            padding: 0px 4px;
            div{
                display: block;
                background: #fff;
                border-radius: 100px;
                width: 100%;
                height: 0px;
                padding-bottom: 100%;
                position: relative;
                text-align: center;
                p{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    color: #24243a;
                }
            }
        }
        li:nth-of-type(-n + ${props => props.count ? props.count : ''}){
            div{
                :after {
                    display: block;
                    position: absolute;
                    content: "";
                    top: 50%;
                    left: 50%;
                    width: 160%;
                    height: 160%;
                    transform: translateX(-50%) translateY(-50%);
                    background-image: url(/img/StampImg2.png);
                    background-size: 100% 100%;
                }
                p{
                    color: #fff;
                }
            }
        }
    }
`;

export const BottomNotice = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 38px;
    margin-bottom: 0px;
    width: 280px;
    height: 50px;
    border-radius: 30px;
    box-shadow: 0 5px 20px 0 rgba(193, 193, 193, 0.5);
    background: #24243a;
    p{
        font-family: "NotoSansKR";
        font-size: 18px;
        font-weight: 500;
        line-height: 50px;
        text-align: center;
        color: #ffffff;
    }
    ${props => props.count < 5 ? `
        background: #aaa;
    ` : ``};
`;

// Stamp Bottom  End//

// Stamp Content End //

// Stamp End //

// Wreath //

export const WreathWrapper = styled.div`
    margin-top: 50px;
    a{

    }
`;

export const WreathTitle = styled.div`
    padding: 21px 22px 29px 29px;
    h1{
        font-family: "NotoSansKR";
        font-size: 24px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
    }
`;

export const WreathTab = styled.div`
    li:nth-of-type(1){
        display:inline-block;
        width: 40%; 
        margin-left: 10px;
    }
    li:nth-of-type(2){
        display:inline-block;
        width: 40%;
        margin-right: 40%;
    }
    a{  
        display: block;
        font-size: 15px;
        line-height: 48px;
        text-align: center;
        text-decoration: none;
        color: #888;
        border-bottom: 3px solid transparent;
        letter-spacing: -0.55px;
        :focus
            {outline: none;
        }
    }
    li.active a {
        position: relative;
        font-weight: 500;
        color: #111;
        :after{
            display: block;
            position: absolute;
            content: '';
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 75%;
            height: 3px;
            border-bottom: 3px solid #111;
        }
    }
`;

// Wreath Get //

export const WreathCommonWrapper = styled.div`
    margin: 30px 20px 40px 20px;
`;

export const WreatNotContent = styled.div`
    margin-top: 122px;
    h1{
        margin-top: 14px;
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #8c8c8c;
    }
`;

export const WreathNot = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''};
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 54px;
    height: 77px;
    margin: 0 auto;
`;

export const WreathCommonContent = styled.div`
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #f7f7f7; 
    
`;

export const CommonContent = styled.div`
    padding: 10px 10px 10px 20px;
    position: relative;
    div{
        ${props => props.url ? `background: url("${props.url}");` : ''};
        background-size: cover;
        background-position: center center; 
        background-repeat: no-repeat;
        position: absolute;
        width: 100px;
        height: 100%;
        bottom: 0px;
        left: 0px;
    }
    strong{
        /* display: inline-block; */
        padding-left: 100px;
        margin-bottom: 9px;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #ba8600;
        small{
            /* margin-left: 5px; */
            display: block;
            padding-left: 100px;
            margin-top: 2px;
            font-family: "Poppins";
            font-size: 12px;
            font-weight: normal;
            line-height: normal;
            color: #888888;
        }
    }
    p{
        padding-left: 100px;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: 19px;
        color: #888888;
    }
    p:nth-of-type(4){
        padding-left: 100px;
        margin-top: 12px;
        font-family: "AppleSDGothicNeo";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
    }
    span{
        padding-left: 5px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
    a{
        position: relative;
        margin-top: 6px;
        margin-left: 100px;
        width: auto;
        height: 26px;
        padding: 5px 12px;
        border-radius: 17.5px;
        background: #24243a;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #ffffff;
    }   
`;

export const UserInfor = styled.div`

`;

// Wreath Common End //

// Wreath End //

// Search //

export const Wrapper = styled.div`
    height: auto;
`;

export const Container = styled.div`
    padding: 0 20px;
`;

export const SearchBar = styled.div`
    position: relative;
    padding-top: 25px;
    border-bottom: 1px solid #000;
    width: 100%;
    margin-bottom: 30px;
    input{
        box-sizing: border-box;
        border: none;
        width: 100%;
        height: 36px;
        font-size: 16px;
        // padding-left: 30px;
    }
`;

export const STT = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    img{
        width: 13px;
        height: 18px;
    }
`;

export const SearchButton = styled.div`
    position: absolute;
    bottom: 12px;
    right: 0;
    img{
        width: 15px;
        height: 15px;
    }
`;

export const SearchResult = styled.div`
    height: 30px;
    padding-left: 20px;
    line-height: 30px;
    color: #9e9e9e;
    font-size: 12px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    strong{
        font-family: "Poppins";
        font-weight: bold;
        color: #ba8600;
    }
`;

export const List = styled.div`
    overflow-y: scroll;
    height: 73vh;
    table{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        text-align: center;
        border-bottom: 1px solid #ebebeb;
        thead{
            tr{
                th{
                    vertical-align: middle;
                    height: 50px;
                    font-family: "NotoSansKR";
                    font-size: 13px;
                    font-weight: normal;
                    line-height: 1.23;
                    width: calc(100% / 6);
                    color: #444444;
                    background: #f4f4f4;
                }
            }
        }
    }
`;

export const ListRow = styled.div`
    table{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        text-align: center;
        border-bottom: 1px solid #ebebeb;
        tbody{
            tr{
                td{
                    width: calc(100% / 6);
                    vertical-align: middle;
                    height: 62px;
                    font-family: "NotoSansKR";
                    font-size: 13px;
                    font-weight: bold;
                    line-height: 1.23;
                    color: black;
                }
            }
        }
    }
`;

export const NullPage = styled.div`
    position: absolute;
    @media(max-width: 330px){
        top: 270px;
    }
    @media(max-width: 380px){
        top: 300px;
    }
    top: 330px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    img {
        width: 44px;
        height: 44px;
        margin-bottom: 7px;
    }
    p {
        font-size: 16px;
        color: #8c8c8c;
    }
`;

// Search End //

// ReturnMessage //

export const MessageWrpaeer = styled.div`
    padding: 22px 20px 100px 20px;
    background: #f7f7f7;
    position: absolute;
    width: 100%;
    height: calc(100vh - 50px);
`;

export const MessageTitle = styled.div`
    margin-bottom: 34px;
    h1{
        font-family: "NotoSansKR";
        font-size: 22px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
    }
`;

export const MessageButton = styled.div`
    p{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
    }
    a{
        height: 50px;
        line-height: 50px;
    }
    a:nth-of-type(1){
        img{
            margin-right: 5px;
            margin-top: -3px;
            width: 18px;
            height: 15px;
        }
    }
    a:nth-of-type(2){
        img{
            margin-right: 2px;
            width: 28px;
            height: 28px;
        }
    }
`;


// ReturnMessage End//

