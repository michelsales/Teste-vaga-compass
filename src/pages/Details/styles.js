import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    h3 {
        margin-top: 30px;
    }

    svg {
        height: 30px;
        width: 30px;
        color: var(--orange);
    }
`

export const WrapperInfos = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media(max-width: 768px){
        align-items: center;
        flex-direction: column;
    }
`

export const WrapperLeft = styled.div`
    width: auto;
    height: auto;
    max-width: 20%;
    border: 1px solid #dfdfdf; 
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
    margin-top: 30px;

    img{ 
        width: 50%;
        border-radius: 50%;
        margin-top: 20px;
    }

    @media(max-width: 768px){
        width: 100%;
        max-width: 90%;
        flex-direction: row;

        img{
            width: 60%;
        }
    }
`
export const WrapperRight = styled.div`
    width: 60%;
    height: auto;
    border-radius: 10px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 17px;

    svg {
        height: 30px;
        width: 30px;
        color: var(--orange);
    }

    @media(max-width: 768px){
        width: 90%;
        max-width: 100%;
        margin: 0 !important;
    }
`

export const WrapperUserDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Content = styled.div`
    @media(max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const WrapperDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    
    svg {
        width: 24px;
        height: 24px;
        color: var(--orange);
    }
` 
export const DetailsItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin-top: 5px;

    svg {
        padding-right: 5px;
    }
` 
export const WrapperButton = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    h4{
        margin-top: 30px;
    }

    p {
        max-width: 100%;
    }


` 
export const ButtonRepositories = styled.button`
    width: 85%;
    height: 58px;
    background: var(--yellow);
    border: 0;
    border-radius: 10px;
    color: var(--white);
    margin-top: 10px;
    
    &:hover {
        transition: ease-in-out 0.5s;
    }
` 
export const ButtonStarred = styled.button`
    width: 85%;
    height: 58px;
    background: var(--orange);
    border: 0;
    border-radius: 10px;
    color: var(--white);
    margin-top: 10px;

    &:hover {
        transition: ease-in-out 0.5s;
    }
` 

export const Warning = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: auto;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    margin-top: 40px;
    padding: 10px;
`