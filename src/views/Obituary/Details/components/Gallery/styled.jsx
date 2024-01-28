import styled from 'styled-components';

export const GalleryWrapper = styled.div`
    position:absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #000;
    padding-top: 140px;
`;

export const GalleryContainer = styled.div`
    position: relative;
`;

export const Card = styled.div`
    height: 360px;
    ${props => props.url ? `background-image: url("${props.url}");` : ''};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;