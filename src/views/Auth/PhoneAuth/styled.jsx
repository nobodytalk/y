import styled from 'styled-components';


export const AuthWrapper = styled.div`
    height: auto;
    background: #f7f7f7;
    padding-bottom: 60px;
`;

export const Container = styled.div`
    padding: 0 20px;
    padding-top: 30px;
    > div:nth-of-type(2){                       //주민등록번호 인풋//
        div:nth-of-type(2){
            :before{
                display: block;
                position: absolute;
                content: '';
                width: 10px;
                height :2px;
                background: #111;
                top: 50%;
                left:62.5%;
                transform: translateX(-50%) translateY(-50%);
            }
            input:nth-of-type(2){
                ::placeholder {
                    color: #9e9e9e;
                    font-size: 18px;
                    font-family: "Noto Sans KR";
                    padding-left: 6px;
                }
            }
        }
    }
    span{
        font-size: 19px;
        line-height: 0;
    }
    .placeholder {
        position: absolute;
        top: 46%;
        z-index: 1000;
    }
    svg{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0px;
        z-index: 1;
    }
`;

export const Timer = styled.div`
    display: inline-block;
    width: 25%;
    position: relative;
    color: #ff2c51;
    text-align: right;
    line-height: 60px;
    padding-right: 5px;
`;

export const AuthExp = styled.div`
    text-align: center;
    font-size: 14px;
    color: #888;
    margin-top: 10px;
    margin-bottom: 110px;
`;

export const Policy = styled.div`
    text-align: center;
    font-size: 14px;
    color: #888;
    margin-bottom: 55px;
    a{
        color: #888;
    }
`;

export const Position = styled.div`
    position: relative;
    bottom: 0;
`;