import styled from 'vue3-styled-components'

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        max-width: 700px;
    }
    @media screen and (min-width: 1200px) and (max-width: 1649px) {
        max-width: 1000px;
    }
`;

export default Container