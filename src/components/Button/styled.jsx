import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 60px;
    font-family: "NotoSansKR";
    font-size: 18px;
    font-weight: normal;
    line-height: 60px;
    text-align: center;
    text-decoration: none;
    color: #111;
    background: #ddd;
    ${props => {
        var out = ``;
        if(props.size == 'medium')
                out += `height: 44px;
                        font-size: 15px;
                        line-height: 44px;
                        `;

        if(props.size == 'small')
                out += `height: 26px;
                        font-size: 12px;
                        line-height: 28px;`;

        if(props.size == 'Popup')
                out += `height: 50px;
                        line-height: 50px;`;

        switch(props.type) {
            case 'default': // default 버튼일때
                out += `
                    color: #111;
                    background: #ddd;
                `;
            break;
            case 'primary': // primary 버튼일때
                out += `
                    color: #fff;
                    background: #24243a;
                `;
            break;
            case 'secondary': // secondary 버튼일때
                out += `
                    color: #000;
                    background: #fff;
                `;
            break;
            case 'Popup': // Popup 버튼일때
                out += `
                    height: 50px;
                    line-height: 50px;
                `;
            break;
            case 'bottom': // Popup 버튼일때
                out += `
                    background: #fff;
                    border-top: 1px solid #eee;
                    margin-top: 10px;
                    div{
                        border-right: 1px solid #eee;
                    }
                `;
            break;
        }
        return out;
    }}
    ${props => props.width && `width:`+props.width+`;`};
    ${props => props.height && `height:`+props.height+`;`};
    ${props => props.color && `color:`+props.color+`;`};
    ${props => props.bgColor && `background:`+props.bgColor+`;`};
    ${props => props.borderColor && `border: 1px solid `+props.borderColor+`;`};
    ${props => props.borderRadius && `border-radius:`+props.borderRadius+`;`};
    ${props => props.flex ? `flex:`+props.flex+`;` : `flex: 1`};
    
`;
export const StyledA = styled.a`
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 60px;
    font-family: "NotoSansKR";
    font-size: 18px;
    font-weight: normal;
    line-height: 60px;
    text-align: center;
    text-decoration: none;
    color: #111;
    background: #ddd;
    border: none;
    ${props => {
        var out = ``;
        if(props.size == 'medium')
                out += `height: 44px;
                        font-size: 15px;
                        line-height: 44px;
                        `;

        if(props.size == 'small')
                out += `height: 26px;
                        font-size: 12px;
                        line-height: 26px;`;

        switch(props.type) {
            case 'default': // default 버튼일때
                out += `
                    color: #111;
                    background: #ddd;
                `;
            break;
            case 'primary': // primary 버튼일때
                out += `
                    color: #fff;
                    background: #24243a;
                `;
            break;
            case 'secondary': // secondary 버튼일때
                out += `
                    color: #000;
                    background: #fff;
                `;
            break;
            case 'Popup': // Popup 버튼일때
                out += `
                    height: 50px;
                    line-height: 50px;
                `;
            break;
            case 'bottom': // Popup 버튼일때
                out += `
                    background: #fff;
                    border-top: 1px solid #eee;
                    margin-top: 10px;
                    div{
                        border-right: 1px solid #eee;
                    }
                `;
            break;
        }
        return out;
    }}
    ${props => props.width && `width:`+props.width+`;`};
    ${props => props.height && `height:`+props.height+`;`};
    ${props => props.color && `color:`+props.color+`;`};
    ${props => props.bgColor && `background:`+props.bgColor+`;`};
    ${props => props.borderColor && `border: 1px solid `+props.borderColor+`;`};
    ${props => props.borderRadius && `border-radius:`+props.borderRadius+`;`};
    ${props => props.flex ? `flex:`+props.flex+`;` : `flex: 1`};
    
`;