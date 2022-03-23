import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    flex-direction: column;

    h4 { 
        margin-top: 40px;
    }

    svg {
        height: 30px;
        width: 30px;
        color: var(--orange);
    }
    
    h3 {
        margin-top: 30px;
    }
`
export const ContainerUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    margin-top: 30px;

    img{ 
        width: 228px;
        height: 228px;
        border-radius: 50%;
    }
`

export const ButtonMore = styled.button`
    width: 218px;
    height: 58px;
    background: var(--yellow);
    color: var(--white);
    border: 0;
    border-radius: 20px;
    margin-top: 15px;
`