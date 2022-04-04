import React, { useContext, useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';

import {ContextReducer} from '../../reducer/GithubReducer';
import { Link } from 'react-router-dom';
import { Container, ButtonSearch, Button, WrapperLogged, ContentLeft, WrapperSearch } from './styles';

function Header() {
  const { state, dispatch } = useContext(ContextReducer);
  const [user, setUser] = useState('');

const SearchUser = () => {
  if(user !== state.user.login){
    dispatch({
        type: 'SET_REPOSITORIES',
        payload: []
    })
  }
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => {
        dispatch({
          type: 'SET_USER',
          payload: data,
        })
    })
}


const handleZeroinUser = () => {
  dispatch({
    type: 'SET_USER',
    payload: [],
  })
}

const handleUserLogout = () => {
  dispatch({
    type: 'SET_LOGGED',
    payload: {
      logged: false,
      infos: [],
    },
  })
}

const renderSearch = () => {
    if(window.location.pathname === '/'){
      return(
          <ButtonSearch onClick={SearchUser}><AiOutlineSearch /></ButtonSearch>   
      )
    } else {
      return(
        <>
          <Link to={`/${user}`}><ButtonSearch onClick={SearchUser}><AiOutlineSearch /></ButtonSearch></Link>
          <Link to="/"><Button onClick={handleZeroinUser}><ImHome /></Button></Link>
        </>
      )
    }
}

const renderLeftSide = () => {
  if(state?.userLogged?.infos?.user_metadata?.name){
    return(
        <ContentLeft>
          <WrapperLogged>
            <BsGithub />
            <span>{state?.userLogged?.infos?.user_metadata?.name}</span>
          </WrapperLogged>
          <h5 onClick={handleUserLogout}>Deslogar</h5>
        </ContentLeft>
    );
  } else { 
    return(
      <ContentLeft>
          <h4>Carregando Infos do usuário...</h4>
      </ContentLeft>
    )
  }
}


const renderBlockSearch = () => {
  return(
    <WrapperSearch>
      <input type="text"  onChange={(e) => setUser(e.target.value)} value={user} placeholder="Escreva o nome do usuário" />
      {renderSearch()}
    </WrapperSearch>
  );
}

  return(
      <Container>
          {console.log(state.userLogged)}
          {renderLeftSide()}
          {renderBlockSearch()}
      </Container>
  );
}

export default Header;