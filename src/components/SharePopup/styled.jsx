import styled from 'styled-components';

export const PopupWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    display:none;   
    z-index:1000;
    ${props => props.show && `display:block`};
    ${props => props.width && `width:`+props.width+`;`}
`;

export const Overlay = styled.div`
    width: 100%;
    max-width: 100%;
    height: 130%;
    background: rgba(0,0,0,0.6);
    z-index: 50;
    position: absolute;
    top:0px;
    left:0px;
    ${props => {
        if(props.show) {
            return `
                display:block;
            `;
        } else {
            return `
                display:none;
            `;
        }
    }}
`;

export const SharePopup = styled.div`
    .CloseButton{
        div{

        }
    }
`;

export const ShareButton = styled.div`
        position: absolute;
        width: auto;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 100;
        div{
            display: inline-block;
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        div:nth-of-type(1){
            background: url(/kakaotalk.png);
            background-position: center center;
            background-size: cover;
        }
        div:nth-of-type(2){
            background: #fff;
            position: relative;
            a{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                font-size: 18px;
                font-weight: 600;
                text-decoration: none;
                color: #000;
            }
        }
        div:not(:last-child){
            margin-right: 40px;
        }
`;
