import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 25px;
    padding-top: 15px;

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
        line-height: 24px;
        margin-bottom: 26px;
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