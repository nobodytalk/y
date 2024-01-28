import styled from 'styled-components';

export const ItemBox = styled.div`
    padding-top: 36px;
    padding-bottom: 10px;
    text-align: center;
    > div:first-child {
        margin-right: 60px
    }
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
