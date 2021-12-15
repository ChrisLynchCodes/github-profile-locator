import { React, createContext, useReducer } from 'react'
import { GithubReducer } from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {



    // Inital State
    const initialState = {
        users: [],
        loading: false

    }
    //takes in the reducer we're using and the inital state
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //Get search results
    const searchUsers = async (text) => {
        //Call SetLoading
        SetLoading();

        const params = new URLSearchParams({
            q: text
        })

        //Response
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        //Destructor the returned object to get the items array
        const { items } = await response.json();

        //Dispatch updates state passing the data from the api as a payload 
        dispatch({
            type: 'GET_USERS',
            payload: items,

        })
    }

    //Clear users from state
    const clearUsers = () => {
       
        dispatch({
            type: 'CLEAR_USERS',
           

        })
    }

    //SetLoading
    const SetLoading = () => dispatch({ type: 'SET_LOADING' })

    return <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers, clearUsers }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext