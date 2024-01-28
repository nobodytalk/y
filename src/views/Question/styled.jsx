import styled from 'styled-components';

// Qna //

export const QnaWrapper = styled.div`
    padding: 31px 20px 262px 20px;
    background: #f7f7f7;
`;

export const QnaTitle = styled.div`
    h1{
        margin-bottom: 14px;
        font-family: "NotoSansKR";
        font-size: 24px;
        font-weight: normal;
        line-height: normal;
        color: black;
    }
`;

export const QnaContent = styled.div`

`;

export const Counter = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #8c8c8c;
`;

// Qna End//

// Complete //

export const QnaCompleteWrapper = styled.div`
    padding: 136px 0px 170px 0px;
`;

export const CompleteContent = styled.div`
    font-family: "NotoSansKR";
    text-align: center;
    h1{
        margin-top: 32px;
        font-size: 30px;
        font-weight: normal;
        line-height: 1.33;
        color: #111111;   
    }
    p{
        margin-top: 15px;
        font-size: 15px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        color: #888888;
    }
`;

export const Complete = styled.div`
    ${props => props.url ? `background: url("${props.url}");` : ''}
    background-size: cover;
    background-position: center 100%; 
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    margin: 0 auto;
`;


// Complete End //

// Faq //

export const FaqWrapper = styled.div`

`;

export const Arrow = styled.div`
    svg{
        ${props => props.isopen ? `transform: rotate(-90deg)` : `  transform: rotate(90deg)`};
        position: absolute;
        top: 50%;
        right: 20px;
    }
`;

export const FaqContent = styled.div`
    padding: 26px 50px 26px 20px;
    position: relative;
    border-bottom: 1px solid #e9e9e9;
    h1{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        color: #888;
    }
    h2{
        ${props => props.isopen ? `font-weight: bold` : `font-weight: normal`};
        font-family: "NotoSansKR";
        font-size: 15px;
        line-height: normal;
        color: #111;
    }
    
    
`;

export const FaqAnswer = styled.div`
    padding: 16px 20px;
    background: #f7f7f7;
    ${props=>props.isopen ? `display:block` : `display:none`};
`;

export const Answer = styled.div`
    font-family: "NotoSansKR";
    font-size: 15px;
    font-weight: normal;
    line-height: 24px;
    color: #888888;
    
`;

// Faq End //



export const StoryWrapper = styled.div`

`;

export const StoryImage = styled.div`
    border-top:9px solid #f3f3f3;
    width:100%;
    height:0px;
    padding-bottom:56%;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-color:#f6f6f6;
    background-image:url(${props=>props.url ? props.url : ''});
`;

export const StoryContent = styled.div`
    padding: 26px 50px 26px 20px;
    position: relative;
    border-bottom: 1px solid #e9e9e9;
    h1{
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        margin-bottom:5px;
        color: #888;
    }
    h2{
        ${props => props.isopen ? `font-weight: bold` : `font-weight: normal`};
        font-family: "NotoSansKR";
        font-size: 15px;
        line-height: normal;
        color: #111;
    }
    p {
        font-size: 12px;
        color:#777;
        margin-top:10px;
    }
    
    
`;

export const StoryAnswer = styled.div`
    padding: 16px 20px;
    background: #f7f7f7;
    ${props=>props.isopen ? `display:block` : `display:none`};
`;


// Faq End //