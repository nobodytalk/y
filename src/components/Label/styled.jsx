import styled from 'styled-components';


export const LabelStyle = styled.div`
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    width: 25%;
    height: 60px;
    background: #FFFFFF;
    font-size: 15px;
    line-height: 60px;
    :after{
        display: block;
        position: absolute;
        content: "";
        top: 24px;
        right: 0;
        width: 2px;
        height: 12px;
        background: #e9e9e9;
    }
`;