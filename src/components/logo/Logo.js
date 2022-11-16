import styled from 'vue3-styled-components'

export const Logo = styled.div`
    position: relative;
    padding-top: 10rem;
    max-width: 343px;
    margin: auto;

    h1, h2 {
        margin: 0;
    }

    h1 {
        font-size: 4rem;
        text-shadow: ${props => props.theme.home.color} 1px 0 10px;
    }

    h2 {
        position: absolute;
        font-size: 2rem;
        top: 219px;
        left: 210px;
        background-color: ${props => props.theme.others.cem};
        border-radius: 3px;
        padding: 8px;
        z-index: 9;

        &::before {
            content: '';
            top: -3px;
            left: -3px;
            width: 110%;
            height: 110%;
            background-color: ${props => props.theme.others.cemdark};
            z-index: 1;
        }
    }
`;

export default Logo