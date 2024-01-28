import styled from 'styled-components';

export const InputGroupWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 0 15px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid ${props => props.border ? props.bottom  : `#e9e9e9`};
    margin-top: ${props => props.top ? props.top  : ``};
    margin-bottom: ${props => props.bottom ? props.bottom  : ``};
`;

export const InputWrapper = styled.div`
    > div:not(:last-child){
        border-bottom: 1px solid #e9e9e9;
    }
`;
