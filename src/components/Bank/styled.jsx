import styled from 'styled-components';

export const BankWrapper = styled.div`
    /* ${props => props.width && `width:`+props.width+`;`}; */
    position: relative;
    margin: 0px 0px;
    float: left;
    width: 33.33%;
`;

export const ListWrapper = styled.div`
    display: block;
    padding: 6px 0px;
    margin: 0px 6px;
`;

export const BankList = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    width: 100%;
    height: auto;
    padding: 15px 0px;
    img{
        display: block;
        margin: 0 auto;
        width: 30px;
        height: 30px;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 13px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
        text-align: center;
    }
`;