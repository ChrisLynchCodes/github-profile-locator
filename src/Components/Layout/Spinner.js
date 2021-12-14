import React from 'react'
import spinner from './Assets/spinner.gif'

export const Spinner = () => {
    return (
        <div className='w-100 mt-20 '>
            <img src={spinner} width={100} className='text-center mx-auto' alt="Loading..." />
            
        </div>
    )
}
