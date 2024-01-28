import styled from 'styled-components';

// Service Popup //

export const ServicePopupWrapper = styled.div`
    margin: -20px 0px;
`;

export const ServicePopupContent = styled.div`
    text-align: initial;
    padding: 0px 18px;
    h1{
        margin-bottom: 9px;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: normal;
        line-height: 24px;
        color: #888888;
    }
`;

export const Notion = styled.div`
    margin-top: 19px;
    h1{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: normal;
        line-height: 1.08;
        text-align: center;
        color: #111111;
    }
`;

export const CheckBox = styled.div`
    label{
        border: 0px;
    }
    svg{
        position: absolute;
        top: -30px;
        left: 0px;
        width: 20px;
        height: 20px;
    }
`;

// Service Popup End //

// Guide Popup //

export const GuideWrapper = styled.div`
    position: relative;
`;

export const Guide = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: 1.33;
        text-align: center;
        color: #111111;
    }
`;

export const InputBox = styled.div`
    position: relative;
    input{
        margin-top: 26px;
        height: 45px;
    }
`;

export const InputCheck = styled.div`
    label{
        border: 0px;
        
    }
    svg{
        position: absolute;
        top:-35px;
        left: -105px;
    }
`;

export const GudieContent = styled.div`
    margin-top: 20px;
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        color: #111111;
    }
`;

export const Icon = styled.div`
    position: absolute;
    right: 50px;
    bottom: 10px;
`;

export const GuideButton = styled.div`
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

// Guide Popup End //