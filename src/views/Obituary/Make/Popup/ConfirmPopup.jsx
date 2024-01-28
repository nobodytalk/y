import React from 'react';
import Popup from '../../../../components/Popup';

const ConfirmPopup = (props) => {

    const button = [
        {
            color: '#000',              //default '#111'
            bgColor: '#fff',        //default '#ddd'
            onClick: props.onClose,
        },
        {
            color: '#000',                     //default '#fff'
            bgColor: '#fff',                    //default '#24243a;'
            to: '/obituary/make/complete',
        }
    ]

    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="primary" button={button} borderBottom="#ebebeb" >
            부고를 등록하시겠습니까?
        </Popup>
    );
};

export default ConfirmPopup;