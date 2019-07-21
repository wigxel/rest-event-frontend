import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html,body{
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 14px;
        font-family: 'Roboto Mono', monospace, sans-serif;
    }

    a:hover {
        opacity: .5;
    }
`;

export default GlobalStyle;
