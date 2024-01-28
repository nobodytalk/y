import styled from 'styled-components';
export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(/login_background.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    :after {
        display: block;
        position: absolute;
        content: "";
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index:1;
    }
`;

export const Logo = styled.div`
    position: absolute;
    z-index: 3;
    width: 115px;
    height: 35px;
    top: 21%;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(/logo.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const MainText = styled.div`
    position: relative;
    top: 34%;
    font-family: "Noto Serif KR";
    font-size: 20px;
    font-weight: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`;

export const LoginContainer = styled.div`
    .kakao{
        position: relative;
        background: #FEE500;
        :after {
            display: block;
            position: absolute;
            content: '';
            top: 55%;
            left: 0;
            transform: translateY(-50%);
            width: 26px;
            height: 27px;
            background: url(/login_kakao.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            margin-left: 15px;
        }
        a{
            font-size: 14px;
            color: #111111;
        }
        :before {
            display: block;
            position: absolute;
            content: '';
            width: 1px;
            height: 26px;
            background: #e1ca00;
            left: 50px;
            top: 12px;
        }
    }
    .naver{
        position: relative;
        background: #2DB400;
        :after {
            display: block;
            position: absolute;
            content: '';
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 17px;
            height: 15px;
            background: url('/login_naver.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
            margin-left: 20px;
        }
        a{
            font-size: 14px;
            color: #fff;
        }
        :before {
            display: block;
            position: absolute;
            content: '';
            width: 1px;
            height: 26px;
            background: #00aa00;
            left: 50px;
            top: 12px;
        }
    }
    .apple{
        position: relative;
        background: #000;
        :after {
            display: block;
            position: absolute;
            content: '';
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 17px;
            height: 15px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='44px' viewBox='0 0 24 44'%3E%3Cg id='Left-Black-Logo-Small' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Crect id='Rectangle' fill='%23000' x='0' y='0' width='24' height='44'%3E%3C/rect%3E%3Cpath d='M12.2337427,16.9879688 C12.8896607,16.9879688 13.7118677,16.5445313 14.2014966,15.9532812 C14.6449341,15.4174609 14.968274,14.6691602 14.968274,13.9208594 C14.968274,13.8192383 14.9590357,13.7176172 14.9405591,13.6344727 C14.2107349,13.6621875 13.3330982,14.1241016 12.8065162,14.7430664 C12.3907935,15.2142188 12.012024,15.9532812 12.012024,16.7108203 C12.012024,16.8216797 12.0305005,16.9325391 12.0397388,16.9694922 C12.0859302,16.9787305 12.1598365,16.9879688 12.2337427,16.9879688 Z M9.92417241,28.1662891 C10.8202857,28.1662891 11.2175318,27.5658008 12.3353638,27.5658008 C13.4716724,27.5658008 13.721106,28.1478125 14.7188404,28.1478125 C15.6980982,28.1478125 16.3540162,27.2424609 16.972981,26.3555859 C17.6658521,25.339375 17.9522388,24.3416406 17.9707154,24.2954492 C17.9060474,24.2769727 16.0306763,23.5101953 16.0306763,21.3576758 C16.0306763,19.491543 17.5088013,18.6508594 17.5919459,18.5861914 C16.612688,17.1819727 15.1253248,17.1450195 14.7188404,17.1450195 C13.6194849,17.1450195 12.7233716,17.8101758 12.1598365,17.8101758 C11.5501099,17.8101758 10.7463794,17.1819727 9.79483648,17.1819727 C7.98413335,17.1819727 6.14571538,18.6785742 6.14571538,21.5054883 C6.14571538,23.2607617 6.8293482,25.1176563 7.67003179,26.3186328 C8.39061773,27.3348438 9.01882085,28.1662891 9.92417241,28.1662891 Z' id='' fill='%23FFF' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center center;
            margin-left: 20px;
        }

        a{
            font-size: 14px;
            color: #fff;
        }
        :before {
            display: block;
            position: absolute;
            content: '';
            width: 1px;
            height: 26px;
            background: #333;
            left: 50px;
            top: 12px;
        }
    }
    .phone{
            position: relative;
            background: #24243a;
            :after {
                display: block;
                position: absolute;
                content: '';
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 18px;
                height: 18px;
                background-image: url("/phone_icon.svg");
                background-size: auto;
                background-repeat: no-repeat;
                background-position: center center;
                margin-left: 20px;
            }
        a{
            font-size: 14px;
            color: #fff;
        }
        :before {
            display: block;
            position: absolute;
            content: '';
            width: 1px;
            height: 26px;
            background: #333;
            left: 50px;
            top: 12px;
        }
    }
    hr {
        border:0px;
        border:1px solid #999;
        margin-bottom:16px;
        margin-top:16px;
    }
    .obituary{
            position: relative;
            background: #fff;
            /* margin-bottom:30px !important; */
            :after {
                display: block;
                position: absolute;
                content: '';
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 18px;
                height: 18px;
                background-image: url("/icon-flower.svg");
                background-size: auto;
                background-repeat: no-repeat;
                background-position: center center;
                margin-left: 20px;
            }
        a{
            font-size: 14px;
            color: #24243a;
            strong {
                text-decoration: underline;
            }
        }
        :before {
            display: block;
            position: absolute;
            content: '';
            width: 1px;
            height: 26px;
            background: #e9e9e9;
            left: 50px;
            top: 12px;
        }
    }
    position: absolute;
    z-index: 3; 
    bottom: 35px;
    width: 100%;
    padding: 0 30px;
    
    div:not(:last-child) {
        margin-bottom: 12px;
    }
`;


export const LoginButton = styled.div`
    height: 50px;
    padding-left: 70px;
    text-align: left;
    a{
        line-height: 50px;
        text-decoration:none;
    }
    div {
        line-height:50px;
        font-size:14px !important;
        color:#fff;
    }
    button {
        line-height:49px !important;
        height: auto !important;
        display:block !important;
        text-align: left !important;
        background:transparent !important;
        font-size:14px !important;
    }
`;

