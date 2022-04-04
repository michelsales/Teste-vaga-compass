import React, { useContext, useEffect } from 'react'

import { ContextReducer } from '../../reducer/GithubReducer';

import { Container, Wrapper, Button} from  './styles.js';
//import { GlobalStyles} from './styles/GlobalStyles';

import { BsGithub } from 'react-icons/bs';

import {supabase} from '../../services/client';


export default function Login() {
    const { dispatch } = useContext(ContextReducer);

    useEffect(() => {
        checkUser();
        window.addEventListener('hashchange', function() {
          checkUser();
        })
      }, []);
    

    async function checkUser(){
        const user = supabase.auth.user();
        dispatch({
          type: 'SET_LOGGED',
          payload: {
            logged: true,
            infos: user,
          },
        })
    }
    
      async function signInWithGithub() {
        await supabase.auth.signIn({
          provider: 'github'
        });
      }
      
  return (
    <Container>
        <Wrapper>
          <h2>Login:</h2>
          <h3>Olá, autentique-se com o Github para acessar o App do teste</h3>
          <Button onClick={signInWithGithub}>Logar-se com<BsGithub/> </Button>
        </Wrapper>
      </Container>
  )
}
