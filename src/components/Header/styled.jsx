import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 50px;
    position: fixed;
    top:0;
    height: calc(constant(safe-area-inset-top) + 50px);
    height: calc(env(safe-area-inset-top) + 50px);
    /* padding-top: constant(safe-area-inset-top); */
    /* padding-top: 50px; */
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: ${props => props.border ? ` 1px solid `+props.border : '1px solid #f2f2f2'};  
    background: ${props => props.background ? props.background : '#fff'};    
    ${props => props.type == 'secondary' ? `
        height: 66px;
        height: calc(constant(safe-area-inset-top) + 66px);
        height: calc(env(safe-area-inset-top) + 66px);
    ` : ``}; 
    .obituary-header {
        /* display: inline-flex;
        align-items: center;
        line-height: normal;
        justify-content: center; */
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 10px 70px 0 90px;
        box-sizing: border-box;
    }
`;

export const TitleStyle = styled.div`
    position: absolute;
    top: constant(safe-area-inset-top);
    top: env(safe-area-inset-top);
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 100;
    color: ${props => props.color ? props.color : '#111'};   
    ${props => props.type == 'secondary' ? `
        height: 66px;
        line-height: 66px;
    ` : ``}; 
`;


export const LeftArea = styled.div`
    position: absolute;
    line-height: 50px;
    top: 7px;
    top: calc(constant(safe-area-inset-top) + 7px);
    top: calc(env(safe-area-inset-top) + 7px);
    left: 20px;
    z-index: 300;
    color: #111111;
    & path{
        ${props => props.color && `fill:`+props.color+`;`}
    }
    a{
        text-decoration: none;
    }
    span{
        color: ${props => props.color ? props.color : '#111'};   
        position: fixed;
        margin-top: -7px;
        margin-left: 10px;
    }
    ${props => props.type == 'secondary' ? `
        height: 66px;
        top: 15px;
        top: calc(constant(safe-area-inset-top) + 15px);
        top: calc(env(safe-area-inset-top) + 15px);
    ` : ``}; 
`;
export const RightArea = styled.div`
    line-height: 50px;
    position: absolute;
    top: 0px;
    top: calc(constant(safe-area-inset-top) + 0px);
    top: calc(env(safe-area-inset-top) + 0px);
    right: 20px;
    color: #111111;
    a{
        text-decoration: none;
        color: #111;
        z-index: 999999;

    }
    .icon-close {
        position: relative;
        top: 5px;
    }
    .icon-share{
        position: relative;
        top: 7px;
    }
    .carbon_home{
        position: relative;
        top: 5px;
        right: 15px;
    }
    & path{
        ${props => props.color && `fill:`+props.color+`;`}
    }
    ${props => props.type == 'secondary' ? `
        height: 66px;
        top: 8px;
        top: calc(constant(safe-area-inset-top) + 8px);
        top: calc(env(safe-area-inset-top) + 8px);
    ` : ``}; 
`;

export const HamBurger = styled.div`
    position: absolute;
    line-height: 50px;
    top: 15px;
    top: calc(constant(safe-area-inset-top)+15px);
    top: calc(env(safe-area-inset-top)+15px);
    left: 18px;
    float: left;
    z-index: 999997;
    div {
        float: left;
        width: 30px;
        height: 20px;
        position: relative;
        cursor: pointer;
        & > i {
            border-radius: 1px;
            display: block;
        }

        & > .l , .s {
            ${props => props.background == '#24243a' ? `
                background: white;
            
                
            ` : `background:#111;`}
            position: absolute;
            line-height: 50px;
            width: 18px;
            height: 2px;
            transition: 0.3s;
        }

        & > .l {
            top: 0px;
        }
        & > i:last-child {
            bottom: 0px;
            top: auto;
            width: 60%;
        }
        & > .s {
            top: 5px;
            margin-top: 4px;
            margin-bottom: 4px;
        }
        ${props => {
            if(props.isopen) {
                return `
                    & > .s {
                        display:none;
                    }
                    & > .l {
                        background: white;
                        width: 150%;
                    }
                    & > i:first-child {
                        transform:rotate(-45deg);
                        top: 15px;
                        left: 5px;
                        width: 80%;
                    }
                    & > i:last-child {
                        transform:rotate(45deg);
                        top: 15px;
                        left: 5px;
                        bottom: auto;
                        width: 80%;
                    }
                `;
            }
        }}
    }
`;

export const SideMenu = styled.div`
    width: 100%;
    height: 100%;
    transition: .4s;
    position: fixed;
    top: 0px;
    z-index: 99999;
    color: #fff;
    background:#24243a;
    box-sizing: border-box;
    overflow-y: scroll;
    ${props=>props.isopen ? `display:block` : `display:none`}
`;

export const SideWrapper = styled.div`
    padding: 98px 25px 62px 25px;
`;

export const TopMenu = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 999997;
    h1{
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
        text-align: right;
        color: #e1a770;
    }
`;

export const Content = styled.div`
    a{
        text-decoration: none;
    }
    h2{
        position: relative;
        font-family: "NotoSansKR";
        font-size: 22px;
        font-weight: 500;
        line-height: 46px;
        color: #ffffff;
    }
    div{
        position: relative;
        margin: 20px 0px;
        border-bottom: 1px solid rgba(255, 255, 255 , 0.1);
    }
`;