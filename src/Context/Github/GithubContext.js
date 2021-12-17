import { React, createContext, useReducer } from 'react'
import { createRoutesFromChildren } from 'react-router-dom';
import { githubReducer } from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

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

  
  

    //Get a single user
    const getUser = async (login) => {
        //Call SetLoading
        SetLoading();


        //Response
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if (response.status === 404) {
            window.location = '/notfound'
        }
        else {

            //Destructor the returned object to get the items array
            const data = await response.json();

            //Dispatch updates state passing the data from the api as a payload 
            dispatch({
                type: 'GET_USER',
                payload: data,

            })
        }


    }

    //Get user repos
    const getUserRepos = async (login) => {
        //Call SetLoading
        SetLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10

        })



        //Response
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        //Destructor the returned object to get the items array
        const data = await response.json();


        //Dispatch updates state passing the data from the api as a payload 
        dispatch({
            type: 'GET_REPOS',
            payload: data,

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

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext