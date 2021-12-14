import React from 'react'

export const AboutPage = () => {
    return (

        <>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. Tailwind & daisyui for styling.</p>
            <p className='text-1xl mb-3'>
                <a href='https://chrislynchcodes.github.io/'>

                    Created by <strong>Chris Lynch</strong>
                </a>

            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>

        </>

    )
}
