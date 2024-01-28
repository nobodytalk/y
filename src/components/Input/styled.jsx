import styled from 'styled-components';


export const StyleInputText = styled.input`
    box-sizing: border-box;
    display: inline-block;
    width: ${props => props.width ? props.width : '75%'};
    padding-left: ${props => props.padding ? props.padding : '20px'}; 
    height: ${props => props.height ? props.height : '60px'}; 
    background: #fff;
    border: 1px solid #E2E2E2;
    font-size: 15px;
    line-height: 15px;
    ${props => props.readOnly ? `
        color: green;
    ` : ''}
    ::placeholder{
        font-size: 15px;
        color: #9e9e9e;
    }
`;

export const StyleInputTextArea = styled.textarea`
    box-sizing: border-box;
    width: ${props => props.width ? props.width : '75%'};
    padding: ${props => props.padding ? props.padding : '0px'}; 
    height: ${props => props.height ? props.height : '180px'};
    background: #fff;
    border: 1px solid #E2E2E2;
    font-size: 15px;
`;

export const StyleInputNumber = styled.input`
    box-sizing: border-box;
    display: inline-block;
    width: ${props => props.width ? props.width : '75%'};
    height: 60px;
    padding-left: 20px;
    background: #fff;
    border: 1px solid #E2E2E2;
    font-size: 15px;
    line-height: 15px;
    ::placeholder{
        font-size: 15px;
        line-height: 60px;
        color: #9e9e9e;
    }
`;

export const StyleInputBirth1 = styled.input`
    box-sizing: border-box;
    display: inline-block;
    width: ${props => props.width ? props.width : '75%'};
    height: 60px;
    padding-left: 20px;
    background: #fff;
    border: 1px solid #E2E2E2;
    font-size: 15px;
    line-height: 15px;
    ::placeholder{
        font-size: 15px;
        color: #9e9e9e;
    }
`;

export const StyleInputBirth2 = styled.input`
    box-sizing: border-box;
    display: inline-block;
    width: ${props => props.width ? props.width : '75%'};
    height: 60px;
    padding-left: 20px;
    background: #fff;
    border: 1px solid #E2E2E2;
    font-size: 15px;
    line-height: 15px;
    position: relative;
    ::placeholder{
        font-size: 15px;
        position: relative;
        :after{
            display: block;
            position: absolute;
            top:0;
            left:0;
            content: '';
            width: 15px;
            height: 15px;
            background: #000;
        }
    }
    :after{
            display: block;
            position: absolute;
            top:0;
            left:0;
            content: '';
            width: 15px;
            height: 15px;
            background: #000;
    }
`;

export const InputSelectWrapper = styled.div`
    display:inline-block;
    vertical-align:top;
    position:relative;
    width: ${props => props.width ? props.width : '75%'}; 
    @media(max-width: 360px) {
        width: ${props => props.width ? props.width : '70%'};
    }
    &:after{
        display:none !important;
    }
`;
export const Arrow = styled.label`
    z-index:0;
    display:block;
    position: absolute;
    transform: rotate(90deg) translateX(-50%);
    position: absolute;
    top: 50%;
    right: 10px;
    &:after{
        display:none;
    }
`;

export const StyleInputSelect = styled.select`
    box-sizing: border-box;
    z-index:1;
    position:relative;
    background:transparent;
    width: ${props => props.width ? props.width : '100%'}; 
    padding-left: ${props => props.padding ? props.padding : '20px'}; 
    padding-right: ${props => props.paddingRight ? props.paddingRight : '20px'}; 
    height: 60px;
    border: 1px solid #E2E2E2;
    font-size: 15px;
`;

export const StyleInputDate = styled.input`
    box-sizing: border-box; 
    width: ${props => props.width ? props.width : '75%'};   
    height: 60px;
    background: #fff;
    border: 1px solid #E2E2E2;
    font-size: 15px;
`;

export const StyleInputCheckbox = styled.input`
    box-sizing: border-box;
    font-size: 15px;
    :hover{
        cursor: pointer;
    }
`;

export const CheckButtonWrapper = styled.div`
    box-sizing: border-box;
    display: inline-block;
    width: ${props => props.width ? props.width : '75%'};  
    label{
        position: relative;
        width: 100%;
        display: inline-block;
        height: 44px;
        line-height: 42px;
        border: 1px solid #E2E2E2;
        cursor: pointer;
        color: #666;
        font-size: 15px;
        text-align: center;
        vertical-align: bottom;
        background: #fff;
        transition: all ease 0.4s 0s;     
        -webkit-tap-highlight-color: transparent; 
     };
    input[type=radio] + label{
        color: #888;
        ${props => props.background && `background: `+props.background+`;`};
    }
    input[type=radio],
    input[type=checkbox] {
        display: none;  
    }
    input[type=checkbox] + label {
        svg{
            g > path {
                transition: all ease 0.4s 0s;      
            }
            g > circle {
                transition: all ease 0.4s 0s;      
            }
        }
    }
    input[type=checkbox]:checked + label {
        color: #111;
        svg{
            g > path {
                fill: #fff;
            }
            g > circle {
                stroke: #24243a;
                fill:  #24243a; 
            }
        }
    }
    input[type=radio]:checked + label {
        color: #111;
        background: #fff;
        border: 2px solid #24243a;
        line-height: 40px;
        transition: all ease 0.25s 0s;      
        :before{
            display: inline-block;
            position: relative;
            content: '';
            width: 8px;
            height: 8px;
            bottom: 2px;
            background-image: url(/check.png);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            margin-right: 5px;
        }
    } 
`;

