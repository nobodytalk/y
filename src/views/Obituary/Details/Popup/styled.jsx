import styled from 'styled-components';

// Bus  //

export const BusWrapper = styled.div`
    
`;

export const BusTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: black;
        position: relative;
        top: 4px;
    }
`;

export const BusContent = styled.div`
    h2{
        margin-top: 35px;
        margin-bottom: 2px;
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: black;
    }
    p{
        margin-bottom: 15px;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #666666;
    }
    a{
        text-decoration: none;
    }
    span{
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #8c8c8c;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        padding: 3px;
        svg{
            margin-right: 4px;
        }
    }
`;

export const BusTab = styled.div`
    li:nth-of-type(1){
        display:inline-block;
        width: 50%; 
    }
    li:nth-of-type(2){
        display:inline-block;
        width: 50%;
    }
    a{  
        display: block;
        font-size: 15px;
        line-height: 48px;
        text-align: center;
        text-decoration: none;
        color: #888;
        border-bottom: 3px solid transparent;
        letter-spacing: -0.55px;
        :focus
            {outline: none;
        }
    }
    li.active a {
        position: relative;
        font-weight: 500;
        color: #111;
        :after{
            display: block;
            position: absolute;
            content: '';
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 3px;
            border-bottom: 3px solid #111;
        }
    }
`;

// Subway List //

export const SubwayListWrapper = styled.div`

`;

export const SubwayList = styled.div`
    text-align: initial;
    margin: 0 20px;
    p:nth-of-type(1){
        font-size: 11px;
        margin-right: 5px;
        border: 1px;
        border-radius: 50px;
        color: white;
        text-align: center;
        line-height: 21px;
        ${props => props.line == '1' ? `background: #0D3692; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '2' ? `background: #33A23D; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '3' ? `background: #FE5B10; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '4' ? `background: #32A1C8; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '5' ? `background: #8B50A4; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '6' ? `background: #C55C1D; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '7' ? `background: #54640D; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '8' ? `background: #F51361; width: 21px; height: 21px;`  : ``}; 
        ${props => props.line == '9' ? `background: #AA9872; width: 21px; height: 21px;`  : ``};
        ${props => props.line == '수인분당' ? `background: #FFB300; padding: 4px 8px;`  : ``};
        ${props => props.line == '경의중앙' ? `background: #72C6A6; padding: 2px 8px;`  : ``};
        ${props => props.line == '경춘' ? `background: #168C72; padding: 2px 8px;`  : ``};
        ${props => props.line == '경강' ? `background: #0054A6; padding: 2px 8px;`  : ``};
        ${props => props.line == '서해' ? `background: #81A913; padding: 2px 8px;`  : ``};
        ${props => props.line == '인천1' ? `background: #759CCE; padding: 2px 8px;`  : ``};
        ${props => props.line == '인천2' ? `background: #F5A251; padding: 2px 8px;`  : ``};
        ${props => props.line == '공항' ? `background: #3681B7; padding: 2px 8px;`  : ``}; 
        ${props => props.line == '공항직통' ? `background: #F68A1E; padding: 2px 8px;`  : ``};
        ${props => props.line == '신분당' ? `background: #DB0029; padding: 2px 8px;`  : ``}; 
        ${props => props.line == '신안산' ? `background: #F04938; padding: 2px 8px;`  : ``};
        ${props => props.line == '우이' ? `background: #B0CE18; padding: 2px 8px;`  : ``};
        ${props => props.line == '신림' ? `background: #558BCF; padding: 2px 8px;`  : ``};
        ${props => props.line == '동북' ? `background: #B21E36; padding: 2px 8px;`  : ``};
        ${props => props.line == '의정부' ? `background: #FDA600; padding: 2px 8px;`  : ``};
        ${props => props.line == '용인' ? `background: #53A421; padding: 2px 8px;`  : ``};
        ${props => props.line == '김포' ? `background: #AD8605; padding: 2px 8px;`  : ``};
        ${props => props.line == '자기부상' ? `background: #FFCD12; padding: 2px 8px;`  : ``}; 
        ${props => props.line == 'GTXA' ? `background: #AB087D; padding: 2px 8px;`  : ``};
        ${props => props.line == 'GTXB' ? `background: #234699; padding: 2px 8px;`  : ``};
        ${props => props.line == 'GTXC' ? `background: #306E5B; padding: 2px 8px;`  : ``};


        ${props => props.line == '부산1' ? `background: #EB5F0A; padding: 2px 8px;`  : ``};
        ${props => props.line == '부산2' ? `background: #50B748; padding: 2px 8px;`  : ``};
        ${props => props.line == '부산3' ? `background: #D18F1D; padding: 2px 8px;`  : ``};
        ${props => props.line == '부산4' ? `background: #426AB3; padding: 2px 8px;`  : ``};
        ${props => props.line == '사상하단' ? `background: #D6406A; padding: 2px 8px;`  : ``};
        ${props => props.line == 'BGL' ? `background: #8652A1; padding: 2px 8px;`  : ``};
        ${props => props.line == '동해' ? `background: #0054A6; padding: 2px 8px;`  : ``};
        ${props => props.line == '양산' ? `background: #CCCCCC; padding: 2px 8px; color: #111;`  : ``};
        ${props => props.line == '오륙도' ? `background: #CCCCCC; padding: 2px 8px; color: #111;`  : ``};


        ${props => props.line == '대구1' ? `background: #D93F5C; padding: 2px 8px;`  : ``};
        ${props => props.line == '대구2' ? `background: #00AA80; padding: 2px 8px;`  : ``};
        ${props => props.line == '대구3' ? `background: #FFB100; padding: 2px 8px;`  : ``};
        ${props => props.line == 'EXCO' ? `background: #74B501; padding: 2px 8px;`  : ``};
        ${props => props.line == '광역' ? `background: #0054A6; padding: 2px 8px;`  : ``};


        ${props => props.line == '광주1' ? `background: #009088; padding: 2px 8px;`  : ``};
        ${props => props.line == '광주2' ? `background: #0471C3; padding: 2px 8px;`  : ``};


        ${props => props.line == '대전1' ? `background: #007448; padding: 2px 8px;`  : ``};
        ${props => props.line == '대전2' ? `background: #CCCCCC; padding: 2px 8px; color: #111;`  : ``};
        ${props => props.line == '광역' ? `background: #0054A6; padding: 2px 8px;`  : ``};
    }
    p{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: black;
        display: inline-block;
    }
    span{
        margin-left: 5px;
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #666666;
    }
    div{
        padding: 20px 0px;
        border-bottom-style: dashed;
        border-bottom-width: 1px;
        border-bottom-color: #ebebeb;
    }

`;

// Bus List //


export const BusListWrapper = styled.div`

`;

export const BusList = styled.div`
    text-align: initial;
    margin: 0 20px;  
    p:nth-of-type(1){
        margin-right: 5px;
        font-size: 13px;
        text-align: center;
    }
    p{
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
    span{
        margin-left: 5px;
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        color: #666666;
    }
    div{
        padding: 20px 0px;
        border-bottom-style: dashed;
        border-bottom-width: 1px;
        border-bottom-color: #ebebeb;
    }
    div:last-child{
        border: none;
    }
`;
 
// Bus  End //

// Parking  //

export const ParkingWrapper = styled.div`

`;

export const ParkingTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: black;
        position: relative;
        top: 4px;
    }
`;

export const ParkingContent = styled.div`
    div{
        margin-top: 41px;
        border-bottom: 1px solid #ebebeb;
    }
    h2{
        margin-top: 35px;
        margin-bottom: 2px;
        font-family: "NotoSansKR";
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        color: black;
    }
    a{
        text-decoration: none;
    }
    p{
        margin-bottom: 15px;
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #666666;
    }
    span{
        font-family: "Poppins";
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #8c8c8c;
        border: 1px solid #ebebeb;
        border-radius: 2px;
        padding: 3px;
        svg{
            margin-right: 4px;
        }
    }
`;

export const ParkingNotice = styled.div`
    padding: 16px 22px;
    text-align: initial;
    a {
        text-decoration: none;
        color:#111;
    }
    div{
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom-style: dashed;
        border-bottom-width: 1px;
        border-bottom-color: #ebebeb;
    }
    h3{
        margin-bottom: 7px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: bold;
        line-height: normal;
        color: black;
    }
    h4{
        margin-bottom: 7px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
    p{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: normal;
        line-height: normal;
        color: #666666;
    }
`;

// Parking End //

// share Poup //


export const ItemBox = styled.div`
    padding-top: 36px;
    padding-bottom: 10px;
    text-align: center;
    > div:first-child {
        margin-right: 60px
    }
`;

export const ShareButton = styled.div`
    display: inline-block;
    text-align: center;    
    .kakao {
        background: url(/kakao.png);
        background-size: cover;
        background-position: center center;
        margin: 0 auto;
        margin-bottom: 12px;
    }
    .message {
        background: url(/message.png);
        background-size: cover;
        background-position: center center; 
        margin: 0 auto;
        margin-bottom: 12px;
    }
    span {
        font-size: 16px;
        color: #000;
        position: relative;
    }
    a {
        text-decoration: none;
    }
`;

export const Logo = styled.div`
    width: 45px;
    height: 45px;
`;


// share Popup End //


// Nev //

export const NevTitle = styled.div`
    h1{
        font-family: "NotoSansKR";
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        color: #666666;
    }
`;

export const KakaoNev = styled.div`
    margin-top: 30px;
    img{
        width: 30px;
        height: 30px;
        margin-right: 8px;
    }
    a {
        text-decoration: none;
        color:#111;
    }
    h2{
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
`;

export const Tmap = styled.div`
    margin-top: 23px;
    img{
        width: 30px;
        height: 30px;
        margin-right: 8px;
    }
    h2{
        display: inline-block;
        font-family: "NotoSansKR";
        font-size: 16px;
        font-weight: normal;
        line-height: normal;
        color: #000;
    }
    a{
        text-decoration: none;
        color: #000;
    }
`;

// Nev Edn //

export const Empty = styled.div`
    margin: 20px 0;
`;

export const IndemNullStyle = styled.div`
    p{
        font-size: 14px;
        line-height: 28px;
        color: #110000;
    }
`;