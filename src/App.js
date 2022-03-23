import { useReducer, useState, useEffect, useContext, createContext } from 'react';

import { GlobalStyles} from './styles/GlobalStyles';
import { Container, Wrapper, Button} from  './styles.js';

import Routes from './Routes';

import { initialState, GithubReducer, ContextReducer } from './reducer/GithubReducer';

import {supabase} from './client';



function App() {
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    })
  }, [])

  async function checkUser(){
    const user = supabase.auth.user();
    setUser(user);
  }

  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github'
    });
  }
  

  if(user){
    return (  
      <ContextReducer.Provider value={{state, dispatch}}>
        <GlobalStyles />
        <Routes />
      </ContextReducer.Provider>
    );
  } else {
    return(
      <Container>
        <GlobalStyles />
        <Wrapper>
          <h3>Olá, autentique-se com o Github para acessar o App</h3>
          <Button onClick={signInWithGithub}>Logar-se com o Github</Button>
        </Wrapper>
      </Container>
    )
  }
}

export default App;
