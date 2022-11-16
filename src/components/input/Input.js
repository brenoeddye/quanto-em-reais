import styled from 'vue3-styled-components'

export const Input = styled.div`
    input {
        background-color: ${props => props.theme.components.input.background};
        color: ${props => props.theme.home.color};
        border-radius: 5px;
        padding: 10px;
        border: 0;
    }
`;

export default Input