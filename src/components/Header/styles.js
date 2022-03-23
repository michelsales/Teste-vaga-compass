import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: var(--red);
    display: flex;
    justify-content: center;
    align-items: center;
    
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
    
    `

export const Button = styled.button`
    position: absolute;
    right: 40px;
    top: 30px;
    align-self: center;
    width: auto;
    height: auto;
    padding: 10px;
    background: var(--orange);
    color: var(--white);
    border: 0;
    border-radius: 10px;
    align-self: center;
    
    @media(max-width: 768px){
        display: none;
    }
    
    &:hover{
        transition: ease-in-out 0.5s;
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