import React from 'react';

import { Container, WrapperInfos, WrapperStar, WrapperTitle } from './styles';
import { AiFillStar} from 'react-icons/ai';


function ItemRepositorie(props) {
  return(
    <Container>
        <WrapperInfos>
            <WrapperTitle>
                <h4>{props.repositorie.name}</h4>
                <p>Description: {props.repositorie.description ? props.repositorie.description : <span>Repositório sem descrição</span> }</p>
                <p>Linguagem: {props.repositorie.language ? props.repositorie.language : <span>Repositório sem linguagem</span>}</p>
            </WrapperTitle>
        </WrapperInfos>
        <WrapperStar>
            <AiFillStar/><h4>{props.repositorie.stargazers_count}</h4>
        </WrapperStar>
    </Container>
  );
}

export default ItemRepositorie;