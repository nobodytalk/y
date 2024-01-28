import styled from 'styled-components';

// Account Service //

export const ServiceWrapper = styled.div`
    background: #24243a;
    padding: 23px 0px 27px 15px;
`;

export const ServiceTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: normal;
        line-height: normal;
        color: #ffffff;
    }
    p{
        margin-top: 12px;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #a3a3c7;
    }
    img{
        width: 15px;
        height: 15px;
        margin: -2px 0px 0px 5px;
    }
`;

export const ServiceContentWrapper = styled.div`
    margin: 20px;
    a{
        border-top: 1px solid #ebebeb;
    }
    a:nth-of-type(1){
        border-bottom-left-radius: 4px;
        border-right: 1px solid #ebebeb;
    }
    a:nth-of-type(2){
        border-bottom-right-radius: 4px;
    }
`;

export const ServiceContent = styled.div`
    padding: 20px 0px 0px 0px;
    border-radius: 4px;
    border: solid 1px #ededed;
    background-color: #f7f7f7;
`;

export const Service = styled.div`
    text-align: center;
    h1{
        margin-bottom: 17px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        font-weight: 500;
        color: #111111;
    }
    h2{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #888888;
        display: inline-block;
    }
    strong, small{
        margin-bottom: 28px;
    }
    strong{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
        padding: 3px 10px;
        border-radius: 15px;
        border: 1px solid #d5d5d5;
    }
    small{
        margin-left: 9px;
        display: inline-block;
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
    }
`;

// Account Service End //