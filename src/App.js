import styled from 'vue3-styled-components'

export const Global = styled.div`
    background-color: ${props => props.theme.home.background};
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.home.color};
    transition: all .3s ease-in-out;
`;

export default Global