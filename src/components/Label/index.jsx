import React from 'react';
import { LabelStyle } from './styled';


const Label = (props) => {
    return(
        <LabelStyle>
            {props.children}
        </LabelStyle>
    )
}

export default Label;


