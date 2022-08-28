import styled from 'vue3-styled-components'

export const Global = styled.div`
    background-color: ${({theme}) => theme.dark.home.background};
    width: 100vw;
    height: 100vh;
    color: ${({theme}) => theme.dark.home.color};
    transition: all .3s ease-in-out;
`;

export default Global