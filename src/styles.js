import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dfdfdf;
    text-align: center;

    h2 { 
        margin-bottom: 10px;
    }
`
export const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0;
    border-radius: 10px;
    background: var(--orange);
    padding: 40px;
    color: var(--white);
    
    @media(max-width: 768px) {
        max-width: 80%;
    }
    `

export const Button = styled.button`
    width: 70%;
    height: 40px;
    color: var(--white);
    background: var(--yellow);
    border: 0;
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
        transition: ease-in-out 0.5s;
    }
    
    svg { 
        font-size: 30px;
        margin-left: 5px;
    }
    
`