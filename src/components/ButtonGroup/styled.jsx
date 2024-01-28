import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
    display: flex;
    div{
        padding: ${props => props.padding || ""};
    }
    a {
        /* padding-bottom: 40px !important; */
        /* padding-bottom: constant(safe-area-inset-bottom); */
    }
    ${props => props.position ? `
        position: fixed;
        z-index: 3;
        width: 100%;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        a{
            height: calc(constant(safe-area-inset-bottom) + 60px);
            height: calc(env(safe-area-inset-bottom) + 60px);
        }
    ` : ``}
`;