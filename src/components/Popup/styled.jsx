import styled from 'styled-components';

export const PopupWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    display:none;   
    z-index: 999999;
    ${props => props.show && `display:block`};
    ${props => props.width && `width:`+props.width+`;`}
`;

export const PopupInner = styled.div`
    max-width: 85%;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 100;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    background: #FFFFFF;
    overflow: hidden;
    border-radius: ${props => props.borderRadius ? props.borderRadius : `6px`};
    ${props => {
        if(props.show) {
            return `
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                ${props.position == 'bottom' ? `
                    max-width: 100%;
                    top: 100%;
                    transform: translateX(-50%) translateY(-100%);
                    border-radius: 12px 12px 0px 0px;
                    text-align: left;
                    font-size: 14px;
                    font-weight: 500;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #666;
                ` : ``}
                ${props.position == 'side' ? `
                    
                ` : ``}
            `;
        } else {
            return `
                top:-500vh;
                ${props.position == 'bottom' ? `
                    
                ` : ``}
            `;
        }
    }}
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

export const PopupClose = styled.div`
    a{
        text-decoration: none;
        z-index: 100;
    }
    .icon-close{
        position: absolute;
        top: 17px;
        right: 17px;
        color: #111;
        
    }
`;

export const PopupContent = styled.div`
    padding: ${props => props.padding ? props.padding : '36px 0px'};
    ${props => props.position == 'bottom' ? `
        padding: ${props => props.padding ? props.padding : '25px 20px'};
    ` : ``}
    border-bottom: ${props => props.borderBottom ? `1px solid` +props.borderBottom : ''};
`;

export const PopupButton = styled.div`  
    a{
        text-decoration: none;
    }
    cursor: pointer;
    ${props => props.buttonType === 'default' ? `
        a{  
            color: ${props.button[0].color ? props.button[0].color : '#111'};
            background: ${props.button[0].bgColor ? props.button[0].bgColor : '#fff'};
            border-top: 1px solid #ebebeb;
            border-radius: 0 0 6px 6px;
        }    
    ` : ``}

    ${props => props.buttonType === 'primary' ? `
        a:first-child{
            width: ${props.button[0].width ? props.button[0].width : '50%'};
            color: ${props.button[0].color ? props.button[0].color : '#111'};
            background: ${props.button[0].bgColor ? props.button[0].bgColor : ''};
            border-right: 1px solid #ebebeb;
   
     
        }
        a:last-child{
            width: ${props.button[1].width ? props.button[1].width : '50%'};
            color: ${props.button[1].color ? props.button[1].color : '#fff'};
            background: ${props.button[1].bgColor ? props.button[1].bgColor : '#24243a'};
            border-radius: 0 0 6px 0;
        }
        
    ` : ``}

`;

export const LinkPopup = styled.div`
    .CloseButton{
        div{

        }
    }
`;

export const LinkButton = styled.div`
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