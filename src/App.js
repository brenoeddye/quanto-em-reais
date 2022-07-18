import styled from 'vue3-styled-components';

export const App = styled.div `
    background-color: ${({ theme }) => theme.App.background};
    color: blue;
`;