import styled from 'styled-components';

// Stamp Popup //

export const StampPopupWrapper = styled.div`

`;

export const StampPopupContent = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: 1.2;
        text-align: center;
        color: #111111;
    }
`;

// Stamp Popup End //

// Return Popup //

export const ReturnContent = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
    div{
        position: absolute;
        top: 50px;
        left: 50px;
        width: 0px;
        height: 0px;
        border-top: 5px solid white;
        border-bottom: 5px solid none;
        border-right: 5px solid transparent;
        border-left: 5px solid  transparent;
    }
`;

// Return Popup End //
