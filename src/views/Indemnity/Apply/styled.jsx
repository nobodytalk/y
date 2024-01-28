import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 48px 20px 200px 20px;
    position: absolute;
    height: auto;
    background: #f7f7f7;
    button{
        width: 60px;
        height: 30px;
        color: #fff;
        font-size: 12px;
        line-height: 30px;
        background: #24243a;
        border: none;
        border-radius: 4px;
    }
    > div:nth-of-type(1){                       //주민등록번호 인풋//
        div:nth-of-type(2){
            :after{
                display: block;
                position: absolute;
                content: '';
                width: 10px;
                height :2px;
                background: #111;
                top:50%;
                left:62.5%;
                transform: translateX(-50%) translateY(-50%);
            }
            input:nth-of-type(2){
                ::placeholder {
                    color: #9e9e9e;
                    font-size: 18px;
                    font-family: "Noto Sans KR";
                }
            }
        }
        
    }
    > div:nth-of-type(2){
        border: 0px solid white;
        background: #f7f7f7;
        
        div:nth-of-type(1){
            svg{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: -10px;
                z-index: 1;
            }
            label{
                background: #f7f7f7;
            }
            p{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: -10px;
                z-index: 1;
                font-family: "NotoSansKR";
                font-size: 14px;
                font-weight: normal;
                line-height: normal;
                color: #9e9e9e;
                text-decoration: inherit;
            }
        }
        
    }
    span{
        font-size: 18px;
    }
    .placeholder {
        position: relative;
        top: -1px;
    }
`;

export const Exp = styled.div`
    text-align: center;
    font-size: 14px;
    color: #9e9e9e;
    span{
        font-size: 14px;
        color: #ba8600;
    }
`;

export const InputBank = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 20px;
    width: 65%;
    label{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #111;
    }
`;

export const Arrow = styled.div`
    ${props => props.isopen ? `transform: rotate(90deg)` : `  transform: rotate(-90deg)`};
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

export const BankList = styled.div`
    ${props => props.isopen ? `display:block` : `display:none`};
    overflow-y: scroll;
    height: 160px;
    margin: 0 -6px;
`;