import styled from 'styled-components';

export const RibbonExampleWrapper = styled.div`
    position: relative;
`;

export const RibbonWrapper = styled.div`

`;

export const RibbonShape = styled.div` 
    padding: 40px 0px 18px 0px;
    background: #f7f7f7;
    position: relative;
`;

export const Ribbon = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 132px;
    height: 150px;
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
    padding: 25px 20px 25px 20px;
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



