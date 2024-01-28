import React, { useState, useEffect}  from 'react';
import Popup from '../../../../../components/Popup';

const Expirationopup = (props) => {
    
    const button = [
        {
            color: '#fff',              //default '#111'
            bgColor: '#24243a',        //default '#ddd'
            onClick: props.onClose,
        }
    ]

    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="default" button={button}>
            헤당 부고는 발인되었습니다.
        </Popup>
    );
};

export default Expirationopup;