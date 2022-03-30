import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: var(--orange);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    input {
        height: 40px;
        width: 30%;
        border-radius: 5px;
        border: 0;
        padding-left: 10px;
        font-size: 18px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        
        @media(max-width: 768px){
            width: 70%;
        }
    }
    
    @media(max-width: 768px){
        position: initial;
        flex-direction: column;
        height: auto;
    }
`

export const Button = styled.button`
    position: absolute;
    right: 40px;
    top: 20px;
    align-self: center;
    width: auto;
    height: auto;
    padding: 10px;
    background: var(--white);
    color: var(--white);
    border: 0;
    border-radius: 10px;
    align-self: center;
    
    svg { 
        width: 30px;
        color: var(--orange);
        
        @media(max-width: 768px){
            width: 20px !important;
        }
    }

    &:hover{
        transition: ease-in-out 0.5s;
    }
    
    @media(max-width: 768px){
        position: initial;
        height: 42px;
        width: 42px;
        margin: 2px 0 0 5px;
    }
`
export const ButtonSearch = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: var(--white);
    border: 0;

    svg {
        height: 25px;
        width: 25px;
        color: #000 !important;
    }
    
    &:hover {
        transition: ease-in-out .5s; 
    }
`

export const WrapperLogged = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    border-radius: 30px;
    color: var(--white);
    padding: 10px; 
    border: 1px solid var(--white);
    cursor: pointer;
    font-weight: bold;

    svg { 
        font-size: 30px;
        margin-right: 10px;
        color: var(--white) !important;

        @media(max-width: 768px){
            font-size: 20px;
            margin-right: 3px;
        }
    }
    
    &:hover{
        background-color: var(--yellow);
        transition: all ease-out .5s;
    }

    @media(max-width: 768px){
        margin: 10px 0 10px 0;
        font-size: 12px;
    }
`
export const ContentLeft = styled.div`
     width: auto;
     position: absolute;
     left: 15px;
     display: flex;
     justify-content: center;
     align-items: center;


    
    h5 { 
        color: var(--white);
        margin-left: 10px;
        cursor: pointer;

        &:hover{
            color: #000;
            transition: all ease-out .5s;
        }
    }

    h4 {
        color: var(--white);

        @media(max-width: 768px){
            margin: 10px 0 10px 0;
        }    
    }

    @media(max-width: 768px){
        position: initial;
    }
`

export const WrapperSearch = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 768px){
        margin-bottom: 20px;
    }

    svg { 
        color: var(--orange) !important;
        width: 30px;
        height: 25px;

        @media(max-width: 768px){
            width: 23px;
        }
    }
`