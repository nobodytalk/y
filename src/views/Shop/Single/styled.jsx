import styled from 'styled-components';

export const SingleWrapper = styled.div`
    overflow-x: hidden;
    margin-bottom: 60px;
`;

// Single Title //

export const SingleTitleWrapper = styled.div`
    border-bottom: 1px solid #e2e2e2;
`;

export const SingleTitle = styled.div`
    border-bottom: 1px solid #e2e2e2;
    padding: 18px 0px 20px 0px;
    margin: 0px 20px;
    h1{
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        color: #111;
    }
    p{
        margin-top: 5px;
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #888;
        text-decoration: line-through;
    }
    small{
        font-size: 24px;
        font-weight: normal;
        line-height: normal;
        color: #ba8600;
    }
    strong{
        font-family: "Poppins";
        font-size: 24px;
        font-weight: bold;
        line-height: normal;
        color: #ba8600;
    }
    span{
        font-family: "NotoSansKR";
        font-size: 15px;
        color: #ba8600;
        font-weight: normal;
    }
`;

export const SingleSubTitle = styled.div`
    margin: 25px 20px;
    padding: 19px 15px;
    border-radius: 4px;
    border: solid 1px #d5d5d5;
    background-color: #f7f7f7;
    z-index: 0;
    position: relative;
    p{
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #111111;
    }
    strong{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: bold;
        line-height: normal;
        color: #24243a;
        position: relative;
        :after{
            position: absolute;
            content: '';
            background: #f5ba1f;
            opacity: 0.45;
            width: 100%;
            height: 11px;   
            left:0;
            bottom:0;
            z-index: -1;
        }
    }
    span{
        font-family: "Poppins";
        font-size: 12px;
        font-weight: 500;
        color: #111111;
    }
`;


// Single Slider //

export const SingleSliderWrapper = styled.div`
    
`;

export const SliderList = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 100%;
    height: 380px;
    position: relative;
`;

export const DotsBadge = styled.div`
   position: absolute;
   width: 40px;
   height: 20px;
   bottom: 15px;
   left: 50%;
   transform: translateX(-50%);
   font-size: 12px;
   line-height: 18px;
   color: #fff;
   text-align: center;
   border-radius: 10px;
   background: rgba(0, 0, 0, 0.3);
`;

// Single Slider End //

// Single Title End//


// Single Tab //

export const SingleTab = styled.div`
    border-top: 10px solid#f2f2f2;
    li{
        margin: 0 10px;
        width: 50%;
    }
    a{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: 500;
        text-align: center;
    }
`;

// Single Tab End//

// Single View //

// Single Admin //

export const AdminWrapper = styled.div`
    img{
        width: 100%;
        height: auto;
    }
`;

// Single Admin //

// Single Default //

export const SingleViewWrapper = styled.div`

`;
export const SingleViewButtonGroup = styled.div`
    a{
        img{
            width: 63px;
            height: 26px;
        }
    }
`;

export const ViewTitle = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    margin-top: -3px;
    padding: 95px 0px 200px 20px;
    h1{
        font-family: "Noto Serif KR";
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
        color: #ffffff;
    }
    h2{
        font-family: "Noto Serif KR";
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
        color: #ffffff;
    }
    h2:nth-of-type(1){
        margin-top: 40px;
    }
`;


export const ViewContent = styled.div`
    padding: 20px;
    h1{
        margin-bottom: 10px;
        font-family: "NotoSansKR";
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
        color: #111;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: 28px;
        color: #111;
    }   
    span{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        color: #111;
    }
`;

export const ViewSub = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 100%;
    height: 330px;
    margin: 20px 0px;
    
`;

export const ViewSubs = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 100%;
    height: 330px;
    margin-bottom: 100px;
`;

// Single View End//


// Single Order //

export const SingleOrderWrpaeer = styled.div`
    padding: 32px 20px 62px 20px;
    border-top: 1px solid #f2f2f2;
    margin-top: -4px;
    margin-bottom: 62px;
    a{
        img{
            width: 63px;
            height: 26px;
        }
    }
`;

export const OrderTitle = styled.div`
    margin-bottom: 26px;
    h1{
        font-family: "NotoSansKR";
        font-size: 23px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
    p{
        margin-top: 10px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: #111111;
    }
`;

export const OrderContent = styled.div`
    text-align: center;
    font-size: 15px;
    padding: 11px 0px;
    border-top: 1px solid #111111;
    border-bottom: 1px solid #111111;
    
`;

export const OrderSubContnet = styled.div`
    border-bottom: 1px solid#d9d9d9; 
    text-align: center;
    font-family: "NotoSansKR";
    font-size: 12px;
    font-weight: bold;
    line-height: normal;
    color: #111111;
    strong{
        border-right: 1px solid#d9d9d9; 
        display: block;
        padding: 60px 30px;
    }
    small{
        display: block;
        padding: 16px 7px 18px 13px;
    }
`;


// Single Order End //

// Single Change //

export const SingleChangeWrapper = styled.div`
    padding: 32px 20px 74px 20px;
    border-top: 1px solid #f2f2f2;
    margin-top: -4px;
    margin-bottom: 74px;
`;

export const ChangeTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 24px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
`;

export const LocationWrapper = styled.div`
    position: relative;
    float: left;
    margin-top: 24px;
    margin-bottom: 34px;
`;

export const Location = styled.div`
    margin: 0px -9px 10px -9px;
    display:block;
`;

export const LocationBox = styled.div`
    width: 100%;
    height: auto;
    p{
        position: relative;
        display: inline-block;
        background: #f1f1f1;  
        border-radius: 4px;
        padding: 13px;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        color: block;;
        margin: 9px;
        :after{
            content:'';
            position: absolute;
            top: 17px;
            right: -5px;
            border-top: 5px solid transparent;
            border-left: 5px solid #f1f1f1;
            border-bottom: 5px solid transparent;
        }
    }

`;

export const ChangeSubTitle = styled.div`
    
    h2{
        margin-top: 29px;
        margin-bottom: 11px;
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: 24px;
        color: #111111;
    }
`;

// Single Change End //