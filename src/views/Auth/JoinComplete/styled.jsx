import styled from 'styled-components';

export const JoinWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(/img/joinimg1.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    :after{
        display: block;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index:1;
        opacity: 0.87;
        mix-blend-mode: overlay;
        background-image: linear-gradient(29deg, #24243a, #3b3b5b);
    }
    a{
        margin-left: -1px;
    }
`;

export const Join = styled.div`

`;

export const JoinContent = styled.div`
    padding: 53px 130px 296px 30px;
    position: relative;
    z-index: 3;
    h1{ 
        font-family: "Noto Serif KR";
        font-size: 20px;
        font-weight: normal;
        line-height: 1.4;
        color: #ffffff;
    }
    h1:nth-of-type(2){
        margin: 35px 0px;
    }
    h2{
        font-family: "Noto Serif KR";
        font-size: 20px;
        font-weight: bold;
        line-height: 1.4;
        color: #ffffff;
    }
`;