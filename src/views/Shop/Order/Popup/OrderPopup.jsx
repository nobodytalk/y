import React from 'react';
import Input from '../../../../components/Input';
import InputBind from '../../../../components/InputBind';
import InputGroup from '../../../../components/InputGroup';
import Popup from '../../../../components/Popup';
import {
    OrderPopupWrapper,
    OrderPopupContent,
    PopupImg,
    PopupTitle,
    Group,
    TextBox,
} from './styled';

const OrderPopup = (props) => {
    const button = [
        {
            title: '상주변경',          //default '취소'
            color: '#fff',              //default '#111'
            bgColor: '#24243a;',        //default '#ddd'
            onClick: props.onClose,
            width: '100%'            //default '50%'
        },
    ]
    return (
        <Popup show={props.show} onClose={props.onClose} buttonType="default" button={button}>
            <OrderPopupWrapper>
                <OrderPopupContent>
                    <PopupImg>
                        <img src={process.env.PUBLIC_URL + "/img/ribbonimg2.png"} alt="" />
                    </PopupImg>
                    <PopupTitle>
                        <h1>근조화환을 받으실 상주님을</h1>
                        <h1>변경하실 수 있습니다.</h1>
                    </PopupTitle>
                    <Group>
                        {props.mourner && props.mourner.map((item, key) => (
                            <Input type="radiobutton" name="name" width="50%" value={item.name} onChange={(e) => props.set_shipping_name(e.currentTarget.value)} id={key} />
                        ))}
                    </Group>
                    <TextBox>
                        <Input type="textbox" width="100%" height="45px" padding="12px" placeholder="상주명 직접 입력" onChange={(e) => props.set_shipping_name(e.currentTarget.value)}/>
                    </TextBox>
                </OrderPopupContent>
            </OrderPopupWrapper>
        </Popup>
    );
};

export default OrderPopup;