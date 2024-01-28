import React from 'react';
import {
    RowWrap,
    ColWrap,
    Container,
    ResponsiveBr,
} from './styled';        

export const Row = (props) => {
    return (
        <RowWrap type={props.type} ref={props.ref}>{props.children}</RowWrap>     
    )
}
export const Col = (props) => {
    return (
        <ColWrap flex={props.flex} ref={props.ref}>{props.children}</ColWrap>
    )
}
export const Br = (props) => {
    return (
        <ResponsiveBr dnjdlek={props.dnjdlek}></ResponsiveBr>
    )
}
/*
type
- default - container - 1200px;
- wide - padding
- full - max
*/
export const CommonContainer = (props) => {
    return (
        <Container type={props.type} id={props.id} className={props.className}>{props.children}</Container>
    )
}