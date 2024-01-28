import React from 'react';
import {InputGroupWrapper,
        InputWrapper
        } from './styled';

const InputGroup = (props) => {
    return(
        <InputGroupWrapper bottom={props.bottom} top={props.top} border={props.border}>
            <InputWrapper>
                {props.children}
            </InputWrapper>
        </InputGroupWrapper>
    )
}

export default InputGroup;

