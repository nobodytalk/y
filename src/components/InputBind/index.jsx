import React from 'react';
import { InputBindStyle } from './styled';


const InputBind = (props) => {
    return(
       <InputBindStyle>
            {props.children} 
       </InputBindStyle>
    )
}

export default InputBind;