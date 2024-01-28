import styled from 'styled-components';

export const OrderWrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 60px;
`;

// Order Title //

export const OredrTitle = styled.div`
    background: #24243a;
    padding: 25px 20px;
`;

export const OrderItem = styled.div`
    font-family: "NotoSansKR";
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    color: #ffffff;
    padding-bottom: 14px;
    border-bottom: 1px solid #ffffff;
    table{
        width: 100%;
        td{
            width: 60%;
            font-size: 14px;
        }
        td:nth-of-type(1){

        }
        td:nth-of-type(2){
            text-align: right;
        }
    }
`;

export const PayMent = styled.div`
    font-family: "NotoSansKR";
    font-size: 18px;
    padding-top: 9px;
    strong{
        display: inline-block;
        color: #ffffff;
        font-weight: normal;
        line-height: normal;
        small {
            font-size:15px;
        }
    }
    span{
        color: #ffffff;
        float: right;
        font-weight: normal;
        line-height: normal;
        small {
            font-size:15px;
        }
    }
`;


// Oredr Title End //

// Order View //

export const OrderViewWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 33px 20px 60px 20px;
    background: #f7f7f7;
`;

export const OrderUser = styled.div`
    
`;

export const Title = styled.div`
    strong{
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        color: #111;
    }
    small{
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        color: #ba8600;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: 23px;
        color: #111111;
    }
    a{
        float: right;
        margin-bottom: 5px;
    }
`;

export const UserLocation = styled.div`
    background: #e9e9eb;
    margin-top: 11px;
    padding: 18px;
    strong{
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        color: #111111;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #888888;
    }
`;

export const OrederUserInformation = styled.div`
    
`;

export const UserInformation = styled.div`
    margin-top: 34px;
`;

export const Infromation = styled.div`
    margin-top: 10px;
    select{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        height: 60px;
    }
    label{
        svg{
            position: absolute;
            bottom: 0px;
            left: -10px;
        }
    }
`;

export const OrderRibbonPhrase = styled.div`
    margin-top: 33px;
`;

export const Phrase = styled.div`
    margin-top: 26px;
`;

export const PaymentMethod = styled.div`
    margin-top: 34px;
`;

export const Method = styled.div`
    margin-top: 11px;
    width: 100%;
    /* height: 300px; */
    /* background: #5d5d5d; */
`;

export const ErrorMsg = styled.div`
    color: red;
`;

// Order View End //

// Ribbon Example //

export const RibbonExampleWrapper = styled.div`
    position: relative;
`;

export const RibbonWrapper = styled.div`

`;

export const RibbonShape = styled.div` 
    padding: 30px 0px 18px 0px;
    background: #f7f7f7;
`;

export const Ribbon = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 210px;
    height: 230px;
    margin: 0 auto;
`;

export const RibbonSender = styled.div`
    padding-top: 33px;
    p{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #888888;
    }
`;

export const RibbonContent = styled.div`
    padding: 25px 20px 70px 20px;
    h1{
        margin-bottom: 7px;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
`;

export const RibbonColor = styled.div`
    label{
        margin-bottom: 15px;
    }
`;

export const RibbonSending = styled.div`

`;
// Ribbon Example End//

// Ribbon Complete //

export const OrderCompleteWrapper = styled.div`
        margin-bottom: 30px;
`;

export const CompleteContent = styled.div`
    padding: 136px 0px 106px 0px;
    margin: 0 20px;
    border-bottom: solid 1px #ebebeb;
    font-family: "NotoSansKR";
    text-align: center;
    h1{
        margin-top: 20px;
        font-size: 24px;
        font-weight: normal;
        line-height: 1.67;
        color: #111111;    
    }
    p{
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #888888;
    }
`;

export const Complete = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    margin: 0 auto;
`;

export const CompleteSubContent = styled.div`
    padding: 19px 30px 27px 30px;
    p {
        font-size: 13px;
        color:#666;
        padding-top:20px;
        margin-top:10px;
        margin-bottom:20px;
        background: #f7f7f7;
        padding:15px;
        font-size:13px;
    }
    table{
        width: 100%;
        td{
        }
        td:nth-of-type(1){
            padding-bottom: 10px;
            font-family: "NotoSansKR";
            font-size: 14px;
            font-weight: normal;
            line-height: normal;
            color: #666666;
        }
        td:nth-of-type(2){
            font-family: "AppleSDGothicNeo";
            font-size: 14px;
            font-weight: normal;
            line-height: normal;
            text-align: right;
            color: var(--black);
        }
    }
`;

export const ButtonWrapper = styled.div`
    padding: 0 10px;
    a{
        border-radius: 4px;
    }
`;    

// Ribbon Complete End //

// Order Detail // 

export const PageWrapper = styled.div`
    margin-bottom: 60px;
`;

export const InformationWrapper = styled.div`
    padding: 24px 20px 90px 20px;
`;

export const Information = styled.div`
    .bottom{
        border-bottom: 12px solid #f0f0f0;
        margin: 0 -20px;
        margin-top: 32px;
        margin-bottom: 34px;
    }
`;

export const InforTitle = styled.div`
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 16px;
    h1{
    display: inline-block;
        margin-bottom: 16px;
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
`;

export const Revise = styled.div`
    float: right;
    margin-top: -12px;
    img{
        width: 42px;
        height: 42px;
    }

`;

export const InforContent = styled.div`


    table{
        width: 100%;
        td{
            width: 62%;
            font-size: 14px;
            padding-bottom: 20px;
            p {
                margin-bottom:0px;
                // border-top: 1px solid #eee;
                background: #f7f7f7;
                padding:15px;
                font-size:13px;
            }
        }
        td:nth-of-type(1){
            padding-left: 0px;
            color: #666;
        }
        td:nth-of-type(2){
            padding-right: 0px;
            text-align: right;
        }
    }
    .bold{
        font-weight: bold;
        font-size: 15px;
        color: #111;
    }
    .colorbold{
        font-size: 18px;
        font-weight: bold;
        color: #ba8600;
    }
    .left{
        td{
            width: 50%;
        }
        td:nth-of-type(2){
            text-align: left;
        }
    }
`;

export const InforRevise = styled.div`

    ${props => props.dnjdlek ? `display: block;` : `display:none;`}

    table{
        width: 100%;
        td{
            position: relative;
            width: 62%;
            font-size: 14px;
            padding-bottom: 20px;
            p {
                margin-bottom:0px;
                // border-top: 1px solid #eee;
                background: #f7f7f7;
                padding:15px;
                font-size:13px;
            }
        }
        td:nth-of-type(1){
            padding-left: 0px;
            color: #666;
        }
        td:nth-of-type(2){
            padding-right: 0px;
            text-align: right;
        }
    }
    .bold{
        font-weight: bold;
        font-size: 15px;
        color: #111;
    }
    .colorbold{
        font-size: 18px;
        font-weight: bold;
        color: #ba8600;
    }
    .left{
        td{
            width: 50%;
        }
        td:nth-of-type(2){
            text-align: left;
        }
    }
    input{
        width: 100%;
        border: none;
        border: 1px solid #e2e2e2;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: normal;
        color: #000;
        padding: 5px 0 5px 5px;
        margin-bottom: 5px;
    }
    select{
        position: relative;
        width: 100%;
        border: none;
        border: 1px solid #e2e2e2;
        background-color: transparent;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: normal;
        color: #000;
        padding: 5px 0 5px 5px;
        margin: 10px 0 0 0;
        z-index: 0;
    }
    label {
        z-index: -1;
        position: absolute;
        display:block;
        content: '';
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        img{
            width: 24px;
            height: 24px;
        }
    }
`;

export const ReviseButton = styled.div`
    margin: 20px 0 0 0;
    button{
        border: none;
        border: 1px solid #eee;
        text-align: center;
        width: 100%;
        display: inline-block;
        padding: 10px 0;
    }
`;



// Order Detail End //

export const ReceiptLayer = styled.div`
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background:#fff;
    z-index:999999999;
    .layer {
        height:100%;
        .layer-header {
            position:relative;
            height: 70px;
            height: calc(70px + constant(safe-area-inset-top));
            border-bottom: 1px solid #eee;
            line-height: 70px;
            padding:0px 20px;
            padding-top: constant(safe-area-inset-top);
            h3 {
                font-size: 18px;
                font-weight:bold;
                line-height: 70px;
            }
            a {
                position:absolute;
                top:0px;
                right:20px;
                font-size:15px;
                text-decoration:underline;
                color:#888;
            }
        }
        .layer-body {
            height:calc(100% - 70px);
            height:calc(100% - 70px - constant(safe-area-inset-top));
            width:100%;
            iframe {
                width:100%;
                height:100%;
            }
        }
    }
`;