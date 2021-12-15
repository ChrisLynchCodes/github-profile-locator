import React from 'react'
import { UserResults } from '../Components/Users/UserResults'
import { UserSearch } from '../Components/Users/UserSearch'

export const HomePage = () => {
    return (
        <>
           <UserSearch />
            <UserResults />

        </>
    )
}
