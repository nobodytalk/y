import React, {useState} from 'react';
import {
    StyleInputText, 
    StyleInputTextArea, 
    StyleInputSelect, 
    StyleInputDate,
    StyleInputCheckbox,
    CheckButtonWrapper,
    InputSelectWrapper,
    Arrow
} from './styled';
    
const Input = (props) => {

    const [phoneNumber, setPhoneNumber] = useState("");     //전화번호 인풋
    const [isPlusPhone, setIsPlusPhone] = useState(true);

    const setPhoneNumberText = e => {
        if (e.target.value.length === 14) return;
  
    
        if (e.target.value.length < 3) setIsPlusPhone(true);
        if (e.target.value.length === 3 && isPlusPhone) {
          setPhoneNumber(e.target.value + "-");
          setIsPlusPhone(false);
        } else if (e.target.value.length === 4 && !e.target.value.includes("-")) {
          setPhoneNumber(
            e.target.value.substring(0, 3) + "-" + e.target.value.substring(3)
          );
        } else if (e.target.value.length === 8) {
          if (e.target.value.match(/-/g).length === 1 && isPlusPhone) {
            setPhoneNumber(e.target.value);
            setIsPlusPhone(false);
          } else {
            setPhoneNumber(e.target.value + "-");
            setIsPlusPhone(true);
          }
        } else if (e.target.value.length === 9 && !isPlusPhone) {
          setPhoneNumber(
            e.target.value.substring(0, 8) + "-" + e.target.value.substring(8)
          );
          setIsPlusPhone(true);
        } else {
          setPhoneNumber(e.target.value);
        }
        props.onChange(e);
      };                                                         //전화번호 인풋
      

    switch(props.type) {
        case 'textbox':
            return (
                <StyleInputText data-price={props.price} padding={props.padding} label={props.label} placeholder={props.placeholder} name={props.name} value={props.value} width={props.width} height={props.height} onClick={props.onClick} onChange={props.onChange} readOnly={props.readOnly}/>
            );  
        case 'textarea':
            return (
                <StyleInputTextArea padding={props.padding} ref={props.ref} value={props.value} placeholder={props.placeholder}  name={props.name} width={props.width} height={props.height} onChange={props.onChange} maxLength={props.maxLength} readOnly={props.readOnly}/>
            );
        case 'number':
            return (
                <StyleInputText type="number" label={props.label} placeholder={props.placeholder} name={props.name} value={props.value} width={props.width} onChange={props.onChange} readOnly={props.readOnly}/>
            );
        case 'select':

            const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 6 9">
                <g fill="none" fill-rule="evenodd">
                    <g fill="#888888" fill-rule="nonzero">
                        <g>
                            <g>
                                <path d="M69.92 11.515l-.4-.43c-.054-.056-.116-.085-.185-.085-.07 0-.131.029-.184.086L66 14.462l-3.15-3.376c-.054-.057-.115-.086-.185-.086-.07 0-.13.029-.184.086l-.4.43c-.054.057-.081.123-.081.197 0 .075.027.14.08.198l3.736 4.003c.053.057.115.086.184.086.07 0 .13-.029.184-.086l3.736-4.003c.053-.058.08-.123.08-.198 0-.074-.027-.14-.08-.198z" transform="translate(-319 -504) translate(20 492) translate(236 3) rotate(-90 66 13.5)"/>
                            </g>
                        </g>
                    </g>
                </g>
                </svg>
            return (
                <InputSelectWrapper  width={props.width}>
                    <StyleInputSelect id={ props.id ? props.id : props.name} placeholder={props.placeholder} name={props.name} value={props.value} padding={props.padding} width={props.width} onClick={props.onClick} onChange={props.onChange}>
                        {props.children}
                    </StyleInputSelect>
                    <Arrow for={props.name}>
                        {arrowIcon}
                    </Arrow>
                </InputSelectWrapper>
            );
        case 'date':
            return (
                <StyleInputDate placeholder={props.placeholder} name={props.name} value={props.value} width={props.width} onChange={props.onChange}>
                    {props.children}
                </StyleInputDate>
            );
        case 'checkbox':
            return (
                <>  
                    <StyleInputCheckbox placeholder={props.placeholder} name={props.name} id={props.name} onChange={props.onChange} checked={props.checked}/>
                    <label for={props.name} onClick={props.onClick}>{props.value}</label>
                </>
            );
        case 'checkbutton':
            return (
                <CheckButtonWrapper width={props.width}>  
                    <input type="checkbox" name={props.name} id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} />
                    <label for={props.id} width={props.width}>{props.value}{props.children}</label>
                </CheckButtonWrapper>
            );
        case 'radiobutton':
            return (
                <CheckButtonWrapper width={props.width} background={props.background}>  
                    <input type="radio" data-price={props.price} name={props.name} id={props.id} value={props.value} onChange={props.onChange} checked={props.checked} />
                    <label for={props.id}>{props.title ? props.title : props.value}</label>
                </CheckButtonWrapper>
            );
        case 'phoneNum':
            return (
                <StyleInputText type="tel" name="phoneNumber" id="phoneNumber" placeholder="000-0000-0000" onChange={setPhoneNumberText} value={phoneNumber}/>
            );
        default: ;
    }
}

export default Input;



