import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{ 
        padding: 0;
        margin: 0; 
    }

    :root {
        --red: #FC0025;
        --yellow: #F9C500;
        --orange: #FC7F01;
        --white: #fff;
    }
    
    body, input, textarea, button { 
        font-family: 'Poppins', sans-serif;
    }

    html { 
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, strong { 
        font-weight: 600;
    }

    button{ 
        cursor: pointer;
        
        &:hover { 
            filter: brightness(0.9);
        }
    }
`