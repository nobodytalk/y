import React from 'react';
import {Link} from 'react-router-dom';
import {StyledButton, StyledA} from './styled';
import {useDispatch} from 'react-redux';
import {SetConfirm} from '../../store/global';

const Button = ({onClick, id, to, data_id, href, target, button, type, size, width, height, flex, color, bgColor, borderColor, borderRadius, children, data_value}) => {
    return (
        <>
            {href ? (
                <StyledA onClick={onClick} data-value={data_value} id={id} data-id={data_id} target={target} href={href} button={button} type={type} size={size} width={width} height={height} flex={flex} color={color} bgColor={bgColor} borderColor={borderColor} borderRadius={borderRadius}>
                    {children}
                </StyledA>
            ) : (
                <StyledButton onClick={onClick} id={id} data-value={data_value} data-id={data_id} target={target} to={to} button={button} type={type} size={size} width={width} height={height} flex={flex} color={color} bgColor={bgColor} borderColor={borderColor} borderRadius={borderRadius}>
                    {children}
                </StyledButton>
            )}
        </>
    )
}

export default Button;

