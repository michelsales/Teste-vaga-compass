import React, { useContext } from 'react';

import Header from '../../components/Header';

import {Container, 
        Warning, 
        WrapperInfos, 
        WrapperLeft, 
        WrapperRight, 
        WrapperDetails,  
        DetailsItem, 
        WrapperButton, 
        ButtonRepositories, 
        ButtonStarred,
        WrapperUserDetails,
        Content,
      } from './styles';

import { FaLocationArrow} from 'react-icons/fa';
import { RiUserFollowLine, RiGitRepositoryFill } from 'react-icons/ri';
import { BiSad, BiHappy} from 'react-icons/bi';

import ItemRepositorie from '../../components/ItemRepositorie';
import { ContextReducer } from '../../reducer/GithubReducer';

function Details() {
  const { state, dispatch} = useContext(ContextReducer);
 

const handleRepositories = (type) => { 
  fetch(` https://api.github.com/users/${state.user.login}/${type}`)
  .then(response => response.json())
  .then(data => {
    dispatch({
      type: 'SET_REPOSITORIES',
      payload: data
    })
  })
}


const renderDetails = () => { 
  return(
    <WrapperDetails>
      <DetailsItem><p>Name: {state.user.name}</p></DetailsItem>
      <DetailsItem><RiUserFollowLine /><span>{state.user.followers} Followers</span></DetailsItem>
      <DetailsItem><RiGitRepositoryFill /><span>{state.user.public_repos} Repositories</span></DetailsItem>
      <DetailsItem><FaLocationArrow />{state.user.location ? <span>{state.user.location}</span> : <p>Este usuário não disponibiliza localização</p> }</DetailsItem>
    </WrapperDetails>
  ); 
}

const renderLeftSide = () => {
      return(
        <WrapperLeft>
          <Content>
            <WrapperUserDetails>
              <img src={state.user.avatar_url} alt={state.user.name} />
              <h4>{state.user.login}</h4>
            </WrapperUserDetails>
            {renderDetails()}
          </Content>
          <WrapperButton>
            <h4>Bio:</h4>
            {state.user.bio ? <p>{state.user.bio}</p> : <p>Este usuário não possui bio</p>}
            <ButtonRepositories onClick={() => handleRepositories('repos')}>Listar repositórios</ButtonRepositories>
            <ButtonStarred onClick={() => handleRepositories('starred')}>Listar Starreds</ButtonStarred>
          </WrapperButton>
        </WrapperLeft>      
      );
  }

  const renderRightSide = () => {
    return(
      <WrapperRight>
        {renderRepositories()}
      </WrapperRight>
    );
  }
  
  const renderRepositories = () => {
    if(state.repositories.length !== 0){
      return(
        state.repositories.map(repositorie => 
            <ItemRepositorie key={repositorie.id} repositorie={repositorie} /> 
      ))
    } else {
      return (
        <Warning>
          <h4>Sem repositórios para exibir aqui!</h4><BiSad/> 
        </Warning>
      ) 
    }
  }

  const renderInfos = () => {
      if(state.user.message === 'Not Found'){
        return(
          <Warning>
            <h3>O usuário pesquisado não existe!</h3>
            <BiSad/> 
          </Warning>
        )
      } else if(!state.user.login) { 
        return(
          <Warning>
            <h3>Pesquise por um usuário</h3>
            <BiHappy />
          </Warning>   
        )
      } else { 
        return(
          <WrapperInfos>
            {renderLeftSide()}
            {renderRightSide()}
          </WrapperInfos>
        )   
      }
  }

  const renderAll = () => {
    return(
      <Container>
        <Header />
         {renderInfos()}
      </Container>
    )
  }

  return renderAll();
}

export default Details;