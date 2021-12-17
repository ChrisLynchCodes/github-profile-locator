import { React, createContext, useReducer } from 'react'
import { githubReducer } from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {



    // Inital State
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false

    }
    //takes in the reducer we're using and the inital state
    const [state, dispatch] = useReducer(githubReducer, initialState)

    
    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    
       
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext