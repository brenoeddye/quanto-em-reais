import styled from 'vue3-styled-components';

export const global = styled.div `
    background-color: ${({ theme }) => theme.dark.home.background};
    color: blue;
`;