import React from 'react';
import Button from '../Button';
import {Link} from 'react-router-dom';
import {PopupWrapper,
        Overlay,
        SharePopup,
        ShareButton } from './styled';


const SharedPopup = (props) => {
    
    return (
        <PopupWrapper type={props.type} show={props.show}>
            <Overlay show={props.show} onClick={props.onClose}/>
                <SharePopup>
                    <a href="/#" className='CloseButton' onClick={props.onClose}>
                        <div></div>
                        <div></div>
                    </a>
                    <SharePopup>
                        <div><a href="/#"/></div>
                        <div><a href="/#">URL</a></div>
                    </SharePopup>
                </SharePopup>
        </PopupWrapper>
    );
};

export default SharedPopup;