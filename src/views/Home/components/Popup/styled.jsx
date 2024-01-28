import styled from 'styled-components';

export const PopupWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    display:none;   
    background: #fff;
    z-index: 999999;
    overflow-y: scroll;
    ${props => props.show && `display:block`};
    ${props => props.width && `width:`+props.width+`;`}
`;

export const Wrapper = styled.div`
    padding: 0 25px;
    padding: 30px;
    height: 100%;

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
        line-height: 25px;
        margin-bottom: 30px;
    }
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