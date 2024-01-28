import styled from 'styled-components';

export const PrivacyWrapper = styled.div`
    height: 500px;
    overflow-y: scroll;

`;

export const Wrapper = styled.div`
    text-align: left;
`;

export const Privacy = styled.div`
    h1{
        padding: 20px 0px;
        font-size: 16px;
    }
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
        line-height: 24px;
        margin-bottom: 26px;
    }
    p:nth-of-type(2){
        color: #111;
    }
`;

export const Title = styled.div`

`;

export const Content = styled.div`
    color: #000;
    p{
        color: #000;
    }
    td,tr{
        margin: 10px 0;
        border: 1px solid #111;
        padding: 5px 0;
        font-size: 13px;
    }
    li{
        font-size: 14px;
    }
`;