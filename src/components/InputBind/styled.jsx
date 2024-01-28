import styled from 'styled-components';

export const InputBindStyle = styled.div`
    position: relative;
    input,
    textarea,
    select{
        border: none;
        vertical-align: top;
    }
    div{
        label{
            border: none;
        }
    }
    small.complete {
        font-size:14px;
        color:green;
        font-weight:bold;
    }
`;