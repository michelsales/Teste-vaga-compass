import { useReducer, useEffect } from 'react';

import { GlobalStyles} from './styles/GlobalStyles';
import { Container, Wrapper, Button} from  './styles.js';

import Routes from './services/Routes';

import { initialState, GithubReducer, ContextReducer } from './reducer/GithubReducer';

import {supabase} from './services/client';

import { BsGithub } from 'react-icons/bs';


function App() {
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  useEffect(() => {
    //checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    })
  },[]);

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
  

  if(state.userLogged.logged === true){
    return (  
      <ContextReducer.Provider value={{state, dispatch}}>
        {console.log(state.userLogged)}
        <GlobalStyles />
        <Routes />
      </ContextReducer.Provider>
    );
  } else {
    return(
      <Container>
        <GlobalStyles />
        <Wrapper>
          <h2>Login:</h2>
          <h3>Olá, autentique-se com o Github para acessar o App do teste</h3>
          <Button onClick={signInWithGithub}>Logar-se com<BsGithub/> </Button>
        </Wrapper>
      </Container>
    )
  }
}

export default App;
