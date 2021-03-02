import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    overflow-x: hidden;
}

html{
    @media (max-width: 1700px){
        font-size: 75%
    }
}

button{
    font-family: 'Inter', sans-serif;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #E0CBDD;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    border-radius: 10px;
    &:hover{
        background-color: #E0CBDD;
        color: white;
    }
}

h1{
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 4rem;
}

h2{
    font-size: 3rem;
    font-family: 'Lato', sans-serif;
}

a{
    font-size: 1.1rem;
    font-family: 'Lato', sans-serif;
    color: white;
    text-decoration: none;
    }

h4{
    font-weight: lighter;
    font-size: 2rem;
    padding: 2rem 0rem;
    
}
span{
    font-weight: bold;
    color: #E0CBDD;
}

p{
    padding: 0.5rem 0rem;
    font-family: 'Inter', sans-serif;
    color: white;
    font-size: 1.4rem;
    line-height: 150%;
}

`

export default GlobalStyle;