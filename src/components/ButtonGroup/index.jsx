import React from 'react';
import {StyledButtonGroup} from './styled'

const ButtonGroup = (props) => {
    return (
        <StyledButtonGroup position={props.position}>
            {props.children}
        </StyledButtonGroup>
    )
}

export default ButtonGroup;

