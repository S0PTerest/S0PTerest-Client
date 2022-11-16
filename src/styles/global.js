import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --vh: 100%;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        line-height: 1.6;
        font-size: 62.5%;
        font-family: 'Apple SD Gothic Neo';
    }
    * {
        box-sizing: border-box;
    }
    
    input,
    button,
    select,
    textarea,
    optgroup,
    option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }
    input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid black;
        background: #fff;
        border-radius: 4px;
        cursor: pointer;
        height: 16px;
        width: 16px;
        outline: 0;
    }
    input[type="checkbox"]::after {
        display: none;
    }
    input[type="checkbox"]:checked {
        background: #FF307B;
        border: 1px solid #FF307B;
        
    }
    input[type="checkbox"]:checked::after {
        display: block;
    }
    a{
        text-decoration:none;
    }
`;
