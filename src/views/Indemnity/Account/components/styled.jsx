import styled from 'styled-components';

//부의금 추가 오백원 결제 페이지 스타일 페이지//


export const OrderWrapper = styled.div`
    height: calc(100vh - 50px);
    background: #f7f7f7;

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
    }
    span{
        color: #ffffff;
        float: right;
        font-weight: normal;
        line-height: normal;
    }
`;

export const OrderViewWrapper = styled.div`
    width: 100%;
    height: auto;
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