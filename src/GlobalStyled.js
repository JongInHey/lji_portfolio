import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    * {box-sizing: border-box}

    body {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #dbdbdb;
        color: #222;
        word-break: keep-all;
    }
    
    img {
        display: block;
        width: 100%;
    }
    
    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #222;
    }


`;
