import styled from 'styled-components';

export const Wrapper = styled.div`
    height: auto;
    ${props => props.show ? `display: block` : `display: none;`};
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left:0;
    z-index: 999;
    background: #fff;
    overflow-y: hidden;
    padding-top: 0px;
`;

export const Container = styled.div`
    padding: 0 20px;
`;

export const SearchBar = styled.div`
    position: relative;
    border-bottom: 1px solid #000;
    width: 100%;
    padding-top: 25px;
    margin-bottom: 30px;
    input{
        box-sizing: border-box;
        border: none;
        width: 100%;
        height: 36px;
        font-size: 16px;
        // padding-left: 30px;
    }
`;

export const STT = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    img{
        width: 13px;
        height: 18px;
    }
`;

export const SearchButton = styled.div`
    position: absolute;
    bottom: 12px;
    right: 0;
    img{
        width: 15px;
        height: 15px;
    }
`;

export const SearchResult = styled.div`
    height: 30px;
    padding-left: 20px;
    background: #f7f7f7;
    line-height: 30px;
    color: #9e9e9e;
    font-size: 12px;
`;

export const List = styled.div`
    overflow-y: scroll;
    height: 73vh;
`;

export const ListRow = styled.div`
    padding: 14px 20px;
    border-bottom: 1px solid #ebebeb;
    strong {
        display: block;
        font-size: 16px;
        padding-bottom: 10px;
    }
    p {
        font-size: 12px;
        line-height: 16px;
        color: #9e9e9e;
    }
`;

export const NullPage = styled.div`
    position: absolute;
    @media(max-width: 330px){
        top: 270px;
    }
    @media(max-width: 380px){
        top: 300px;
    }
    top: 330px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    img {
        width: 44px;
        height: 44px;
        margin-bottom: 7px;
    }
    p {
        font-size: 16px;
        color: #8c8c8c;
    }
`;