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


//Get a single user
export const getUser = async (login) => {

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

        return data;
    }


}


//Get user repos
export const getUserRepos = async (login) => {


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
    return data

}