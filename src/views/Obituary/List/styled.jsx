import styled from 'styled-components';

export const ObituaryListWrapper = styled.div`
    padding: 27px 20px 21px 20px;
`;

export const ObituaryList = styled.div`
    margin-bottom: 21px;
    a{
        font-size: 18px;
        text-decoration: none;
    }
    @media(max-width: 340px){
        a{
            font-size: 15px;
        }
    }
`;

export const ListButton = styled.div`
    a:nth-of-type(1){
        position: relative;
        :after{
            content:'';
            top: 45%;
            left:100%;
            position: absolute;
            border-right: 2px solid #e9e9e9;
            height: 12px;
        }
    }
`;

export const ObiList = styled.div`
    svg{
        position: absolute;
        top: 20px;
        right: 20px;
    }
    :after{
        position: absolute;
        content:'';
        width: 50px;
        height: 60px;
        top: 0px;
        right: 0px;
        border: 1px solid #f7f7f7;
    }
`;

export const ObituaryContent = styled.div`
    padding: 20px 34px 26px 34px;
    border: solid 1px #ededed;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background: #f7f7f7;
    position: relative;
    text-decoration: none;
    h1{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #888888;
    }
    strong{
        display: block;
        margin-top: 5px;
        margin-bottom: 21px;
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        text-align: center;
        color: #111111;
    }
    p{
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        color: #666666;
        margin-bottom: 5px;
    }
    span{
        margin-left: 22px;
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
`;

export const EmptyWrapper = styled.div`
    img, p ,a {
        position: absolute;
        transform: translateX(-50%);
    }
    img {
        width: 56px;
        height: 56px;
        top: 38%;
        left: 50%;
    }
    p {
        top: calc(38% + 76px);
        left: 50%;
        font-size: 16px;
        color: #8c8c8c;
    }
    a {
        margin-top: 20px;
        top: 54%;
        left: 50%;
        font-size: 15px;
    }
`;

export const ListPopupTitle = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 400;
    color: #111;
`;