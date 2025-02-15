import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0 auto;
        background-color: ${(props) => props.theme.colors.secondary}
    }
    .layout{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .container{
        padding: 0 2rem;
        padding-top: 1.3rem;
        overflow: auto;

        @media ${({ theme: { device } }) => device.tablet} {
            padding: 0 5rem;
            padding-top: 1.3rem;
        }
    }

`;
