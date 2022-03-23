import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dfdfdf;
`
export const Wrapper = styled.div`
    width: 300px;
    height: 400px;
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

    &:hover {
        transition: ease-in-out 0.5s;
    }
`