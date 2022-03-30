import {createContext} from 'react';

export const ContextReducer = createContext();

export const initialState = { 
    user: [],
    repositories: [],
    userLogged: {
        logged: false,
        infos: [],
    },
}

export const GithubReducer = (state, action) => {
    switch (action.type) {  
        case 'SET_USER':
        return {...state, user: action.payload }
        case 'SET_REPOSITORIES':
        return {...state, repositories: action.payload }
        case 'SET_LOGGED':
        return {...state, userLogged: action.payload }
        case 'SET_LOGOUT':
        return {...state, userLogged: action.payload }
        default: 
            return state;
    }
}
