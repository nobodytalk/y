import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    position: fixed;
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    z-index:9999;
    background: rgba(0, 0, 0, 0.7); 
    .loading {
        position: relative;
        width: 96px;
        height: 96px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        :after {
            display: block;
            position: absolute;
            content: '';
            width: 52px;
            height: 17px;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-image: url(/logo_gray.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
    .circle div {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 76px;
        height: 76px;
        margin: auto;
        border: 1px solid;
        border-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        animation: circle 1.4s linear infinite;
    }
    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
