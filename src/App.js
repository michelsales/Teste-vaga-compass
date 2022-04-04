import { useReducer } from 'react';

import { GlobalStyles} from './styles/GlobalStyles';

import Routes from './services/Routes';

import { initialState, GithubReducer, ContextReducer } from './reducer/GithubReducer';

import Login from './pages/Login';


function App() {
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const renderLogin = () => {
    if(state.userLogged.logged === true){
      return(
        <>
          <GlobalStyles />
          <Routes />
        </>
      )
    }else { 
      return(
        <Login /> 
      )
    }
  }
      
  return (  
    <ContextReducer.Provider value={{state, dispatch}}>
      {renderLogin()}
    </ContextReducer.Provider>
  ); 
}

export default App;
