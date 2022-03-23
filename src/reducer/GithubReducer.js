import {createContext} from 'react';

export const ContextReducer = createContext();

export const initialState = { 
    user: [],
    repositories: [],
}

export const GithubReducer = (state, action) => {
    switch (action.type) {  
        case 'SET_USER':
        return {...state, user: action.payload }
        case 'SET_REPOSITORIES':
        return {...state, repositories: action.payload }
        default: 
            return state;
    }
}
