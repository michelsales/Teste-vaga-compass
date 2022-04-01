import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    width: 100%;
    height: auto;
    border: 1px solid #DFDFDF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin: 15px 0px 0px 30px;
    padding: 10px;

    svg { 
        width: 26px;
        height: 26px;
        color: var(--yellow);
    }

    @media(max-width: 768px){
        margin: 0;
        margin-top: 20px;
    }
`
export const WrapperInfos = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-left: 20px;
`
export const WrapperTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`
export const WrapperStar = styled.div`
    display: flex;
    margin-right: 20px;
`

