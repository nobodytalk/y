import styled from 'styled-components';

// Acount //

export const AccountTitleWrapper = styled.div`
    background: #24243a;
    padding: 26px 0px 32px 0px;
`;

export const AccountTitle = styled.div`
    text-align: center;
    h1{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        color: #ffffff;
    }
    h2{
        margin-top: 4px;
        font-family: "NotoSansKR";
        font-size: 26px;
        font-weight: 500;
        line-height: normal;
        color: #ffffff;
    }
`;

export const AccountWrapper = styled.div`
    margin: 20px;
`;

export const AccountContentWrappper = styled.div`
    padding: 20px 0px 0px 0px;
    border-radius: 4px;
    border: solid 1px #ededed;
    background-color: #f7f7f7;
    overflow: hidden;
    a{
        border-top: 1px solid #ededed;
    }
    a:nth-of-type(1){
        border-right: 1px solid #ededed;
    }
    a:nth-of-type(2){
        color: #ba8600;
    }
`;

export const AccountContent = styled.div`
    text-align: center;
    h1{
        margin-bottom: 17px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        font-weight: 500;
        color: #111111;
    }
    h2{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #888888;
        display: inline-block;
    }
    strong, small{
        margin-bottom: 28px;
    }
    strong{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
        padding: 3px 10px;
        border-radius: 15px;
        border: 1px solid #d5d5d5;
    }
    small{
        margin-left: 9px;
        display: inline-block;
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
    }
`;

export const AccountPlusContent = styled.div`
    padding: 21px 0px;
    border-radius: 4px;
    border: 1px solid #ededed;
    margin: 20px;
`;

export const AccountPlus = styled.div`
    text-align: center;
    img{
        width: 21px;
        height: 21px;
    }
    p{
        margin-left: 9px;
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        color: #24243a;
    }
`;



// Account End //

// Account Add //
// Account Correnction //

export const Wrapper = styled.div`
    padding: 48px 20px 100px 20px;
    // position: absolute;
    height: 100%;
    min-height: calc(100vh - 50px);
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
    .placeholder {
        position: absolute;
        top: 19px;
        transform: translateY(5%);
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
        }
        > div{
            > div:nth-of-type(2){
                > input:nth-of-type(2){
                    width: 10%;
                    @media(max-width: 340px){
                        width: 13%;
                    }
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

// Account Add End //
// Account Correnction End//

// Complete //

export const CompleteWrapper = styled.div`
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

// Complete End //

export const InputBank = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 20px;
    width: 65%;
    small {
        color:#9e9e9e;
        font-size:15px;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #9e9e9e;
    }
`;

export const Arrow = styled.div`
    ${props => !props.isopen ? `transform: rotate(90deg)` : `  transform: rotate(-90deg)`};
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

export const BankList = styled.div`
    ${props => props.isopen ? `display:block` : `display:none`};
    overflow-y: scroll;
    height: 200px;
`;
