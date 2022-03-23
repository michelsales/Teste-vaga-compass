import React, { useContext, useEffect, useState } from 'react';

import { Container, ButtonSearch, Button } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import {ContextReducer} from '../../reducer/GithubReducer';
import { Link } from 'react-router-dom';

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

const renderSearch = () => {
    if(window.location.pathname === '/'){
      return(
          <ButtonSearch onClick={SearchUser}><AiOutlineSearch /></ButtonSearch>   
      )
    } else {
      return(
        <>
          <Link to={`/${user}`}><ButtonSearch onClick={SearchUser}><AiOutlineSearch /></ButtonSearch></Link>
          <Link to="/"><Button onClick={handleZeroinUser}>ir para Home</Button></Link>
        </>
      )
    }
}

  return(
      <Container>
          <input type="text"  onChange={(e) => setUser(e.target.value)} value={user} placeholder="Escreva o nome do usuário" />
          {renderSearch()} 
      </Container>
  );
}

export default Header;