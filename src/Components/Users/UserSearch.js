import {React, useState, useContext} from 'react'
import GithubContext from "../../Context/Github/GithubContext";



export const UserSearch = () => {

    const [text, setText] = useState("");
    const {users, searchUsers} = useContext(GithubContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        if(text === ''){
            alert('Please enter something')
        }else{
            searchUsers(text)
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
                <button className='btn btn-ghost btn-lrg'>Clear</button>
                </div>)}
          
        </div>
    )
}