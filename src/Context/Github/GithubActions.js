const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const SearchUsers = async (text) => {

//params
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
    return items

    // ===NOW DISPATCHING FROM COMPONENET===
    // //Dispatch updates state passing the data from the api as a payload 
    // dispatch({
    //     type: 'GET_USERS',
    //     payload: items,

    // })
}