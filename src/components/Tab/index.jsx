import React from 'react';
import {
    TabStyle,
    MessageTabStyle
} from './styled';

export const Tab = (props) => {
    return (
        <TabStyle>
            {props.children}
        </TabStyle>
    );
}

export const MessageTab = (props) => {
    return (
        <MessageTabStyle width={props.width}>
            {props.children}
        </MessageTabStyle>
    )
}