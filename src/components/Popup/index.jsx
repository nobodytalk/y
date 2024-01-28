import React from 'react';
import Button from '../Button';
import {Link} from 'react-router-dom';
import {PopupWrapper,
    Overlay,
    PopupInner,
    PopupClose,
    PopupContent,
    PopupButton,
 } from './styled';

const closeIcon = (<svg xmlns="close.svg" width="21" height="21" viewBox="0 0 18 18"><path d="M13 5c.364 0 .659.295.659.659l-.001 7.682h7.683c.364 0 .659.295.659.659 0 .364-.295.659-.659.659l-7.683-.001v7.683c0 .364-.294.659-.658.659-.364 0-.659-.295-.659-.659v-7.683H4.659C4.295 14.659 4 14.365 4 14c0-.364.295-.659.659-.659h7.682V5.659c0-.364.295-.659.659-.659z" transform="translate(-29 -18) translate(23 11) rotate(45 13 14)"/></svg>)

// const button = [
//     {
//         title: '',          //default '취소'
//         color: '',              //default '#111'
//         bgColor: '',        //default '#ddd'
//         onClick: props.onClose,
//         width: '30%',            //default '50%'
//     },
//     {
//         title: '부의금계좌추가',                 //default '확인'
//         color: '',                     //default '#fff'
//         bgColor: '',                    //default '#24243a;'
//         to: '/indemnity/accountadd',
//         width: '70%'                   //default '50%'
//     }
// ]


const Popup = (props) => {
    return (
        <PopupWrapper type={props.type} show={props.show}>
            <Overlay show={props.show} onClick={props.onClose} />
                <PopupInner type={props.type} show={props.show} position={props.position} width={props.width} size={props.size} borderRadius={props.borderRadius}>
                    <PopupClose> 
                        {props.onCloseButton ? (<a href="/#" onClick={props.onClose} className={"icon-close"}>{closeIcon}</a>) : ''}
                    </PopupClose>
                    <PopupContent position={props.position} padding={props.padding} borderBottom={props.borderBottom}>
                        {props.children}
                    </PopupContent>
                    <PopupButton buttonType={props.buttonType} button={props.button}>
                        {props.buttonType==='default' ? 
                            <Button type="Popup" onClick={props.button[0].onClick} to={props.button[0].to}>
                                {props.button[0].title ? props.button[0].title : '확인'}
                            </Button> : ''}
                        {props.buttonType==='primary' ? <>
                            <Button type="Popup" onClick={props.button[0].onClick ? props.button[0].onClick : props.onClose} to={props.button[0].to}>
                                {props.button[0].title ? props.button[0].title : '취소'}
                            </Button>
                            <Button type="Popup" onClick={props.button[1].onClick ? props.button[1].onClick : ''} data_id={props.button[1].id ? props.button[1].id : ''} to={props.button[1].to}>
                                {props.button[1].title ? props.button[1].title : '확인'}
                            </Button> </> : ''}
                    </PopupButton>
                </PopupInner>
        </PopupWrapper>
    );
};

export default Popup;