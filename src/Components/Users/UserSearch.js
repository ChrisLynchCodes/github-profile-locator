import {React, useState, useContext} from 'react'
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/Alert/AlertContext";
import {SearchUsers} from "../../Context/Github/GithubActions"



export const UserSearch = () => {

    const [text, setText] = useState("");
    const {users,  dispatch} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);

//Handle the submit for searching users
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(text === ''){
            setAlert('Please enter something', 'error')
        }else{
            dispatch({type: 'SET_LOADING'})
            const users = await SearchUsers(text)
            //calling action in actions file - dispatching action to reducer - passing payload -   updating user state
            dispatch({type: 'GET_USERS', payload: users})
            setText('');
        }




    }
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 '>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                    <div className='relative'>
                        <input className='w-full pr-40 bg-gray-200 input input-lg text-black' placeholder='Search' value={text} onChange={(event) => setText(event.target.value)}/>
                        <button type='submit'className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>Search</button>
                    </div>
                    </div>
                   
                </form>
            </div>
            {users.length > 0 && (  <div >
                <button className='btn btn-ghost btn-lrg' onClick={() => dispatch({type: "CLEAR_USERS"})}>Clear</button>
                </div>)}
          
        </div>
    )
}
