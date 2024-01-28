import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Container = styled.div`
    padding: 0 30px;
`;

export const MainContent = styled.div`
    padding-top: 135px;
    text-align: center;
    padding-bottom: 130px;
    img{
        text-align: center;
        width: 50px;
        height: 50px;
        margin-bottom: 20px;
    }
    p{
        display: block;
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 15px;
    }
    span{
        font-size: 15px;
        line-height: normal;
        color: #888;
    }
`;

export const SubContent = styled.div`
    padding-top: 15px;
    table{
        width: 100%;
        td{
            width: 50%;
            font-size: 14px;
            padding-bottom: 15px;
        }
        td:nth-of-type(1){
            padding-left: 30px;
            color: #666;
        }
        td:nth-of-type(2){
            padding-right: 30px;
            text-align: right;
        }
    }
    
`;
