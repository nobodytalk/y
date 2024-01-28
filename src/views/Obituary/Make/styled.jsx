import styled from 'styled-components';
import {StyleInputText} from '../../../components/Input/styled';

export const Wrapper = styled.div`
    height: auto;
    padding-bottom: 60px;
    background: #f7f7f7;
`;

export const InputBox = styled.div`
    padding: 40px 20px;
    padding-bottom: 0;
    .includeSub{
        margin-bottom: 10px;
    }
    small {
        font-size: 12px;
        color: #888;
        position: relative;
        top: 3px;
        float: right;
    }
`;

export const Title = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: #111;
    margin-bottom: 15px;
    :after {
        display: inline-block;
        position: relative;
        content: "*";
        font-size: 12px;
        color:  #ba8600;
        top: -2px;
        left: 2px;
    }
`;

export const MemoTitle = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: #111;
    margin-bottom: 15px;
`;

export const SubTitle = styled.div`
    font-size: 14px;
    line-height: normal;
    color: #888888;
    margin-bottom: 12px;
`;

export const GallerySubTitle = styled.div`
    font-size: 14px;
    line-height: normal;
    color: #888888;
`;

export const ButtonStyle = styled.div`
    margin-top: 10px;
    a{
        font-size: 15px;
        color: #888;
    }
`;

export const Gallery = styled.div`
    margin: 0 -5px;
    margin-top: 20px;
    /* margin-bottom: 53px; */
    width: 100%;
`;

export const GalleryGrid = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 33.3%;
    height: auto;
    padding: 7px 5px;
    input {
        opacity: 0;
        position:absolute;
    }
    .addButton {
        position: relative;
        padding-bottom: calc(100% - 2px);
        background: #fff;
        border: 2px dashed #24243a;
        :after {
            display: block;
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-75%);
            width: 28px;
            height: 25px;
            background-image: url(/camera.png);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
`;

export const Card = styled.div`
    position: relative;
    padding-bottom: 100%;
    border-radius: 4px;
    border: 1px solid #999;  
    background-image: url('${props=>props.url ? props.url : ''}');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const CloseButton = styled.div`
    display: block;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 0px;
    right: 0px;
    transform: translateX(30%) translateY(-30%);
    background: #888;
    border-radius: 50%;
    :after {
        display: block;
        position: absolute;
        content: '';
        width: 11px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(-45deg) ;
    }
    :before {
        display: block;
        position: absolute;
        content: '';
        width: 11px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg) ;
    }
`;

export const AddButton = styled.label`
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid red;
`;

export const Count = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 500;
    color: #888;
    span {
        font-size: 12px;
        font-weight: 500;
        color: #ba8600;
    }
`;

export const PlusIcon = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 2px;
    height: 11px;
    background: #888;
    border-radius: 12px;
    :after {
        position: absolute;
        display: block;
        content: "";
        width: 11px;
        height: 2px;
        top: 50%;
        left: 50%;
        background: #888;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 12px;
    }
`;

export const DateTimeWrapper = styled.div`
    display: inline-block;

    button {
        display: none;
    }
    .input-group{
        margin-left: 20px;
    } 
    .form-control {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);    
        width: 70%;
        opacity: 0;
    }
    .flatpickr-mobile {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);    
        width: 70%;;
        opacity: 0;
    }
`;

export const DateTimeValue = styled.div`
    color: #ba8600;
    margin-left: 20px;
`;

export const MournerInputWrapper = styled.div`
    margin-bottom: 16px;

    p:nth-of-type(1) {
        display: none;
    }
    p{
        position: relative;
        margin-top: 15px;
        margin-bottom: 15px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: bold;
        line-height: normal;
        color: #111111;
        button{
            float: right;
            border: none;
            background: #f7f7f7;
            font-family: NotoSansKR;
            font-size: 14px;
            font-weight: normal;        
            color: #888888;
        }
    }

`;

export const Counter = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #8c8c8c;
`;
