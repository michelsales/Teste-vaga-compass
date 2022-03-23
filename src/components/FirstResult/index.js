import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextReducer } from '../../reducer/GithubReducer';

import { Container, ContainerUser, ButtonMore } from './styles';
import { BiSad, BiHappy } from 'react-icons/bi'; 

function FirstResult() {
  const { state, dispatch } = useContext(ContextReducer);

  const renderMessage = () => {
      if(state.user.message === 'Not Found' || state.user.login){
        return '';
      } else { 
        return(
          <>
            <h4>Pesquise por um usuário</h4>
            <BiHappy />
          </>
        )
      }
  }
  
  const renderUser = () => {
    if(state.user.message === 'Not Found') {
      return(
        <>
          <h4>Esse usuário não existe...</h4>
          <BiSad/>
        </>
      );
    } else if(state.user.login) {
      return(
        <ContainerUser>
          <h1>Resultado:</h1>
          <img src={state.user.avatar_url} alt="foto usuario"/>
          <h3>{state.user.login}</h3> 
          <Link to={`/${state.user.login}`}><ButtonMore>Mais detalhes</ButtonMore></Link>
        </ContainerUser>
      )
    }
  }

  return(
    <Container>
      {renderMessage()}
      {renderUser()}
    </Container> 
  );
}

export default FirstResult;