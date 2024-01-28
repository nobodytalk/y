import React from 'react';
import {MainContainerWrapper} from './styled';

const MainContainer = (props) => {
    return (
        <MainContainerWrapper>
            {props.children}
        </MainContainerWrapper>
    );
};

export default MainContainer;