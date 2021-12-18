import  axios  from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}`}
    })

//Search users
export const SearchUsers = async (text) => {

    //params
    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)
    return response.data.items

    //using the fetch api - just for ref, upgraded to axios
    // //Response
    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //     headers: {
    //         Authorization: `token ${GITHUB_TOKEN}`
    //     }
    // })

    // //Destructor the returned object to get the items array
    // const { items } = await response.json();
    // return items

    // ===NOW DISPATCHING FROM COMPONENET===
    // //Dispatch updates state passing the data from the api as a payload 
    // dispatch({
    //     type: 'GET_USERS',
    //     payload: items,

    // })
}

//Get user and their repos
export const getUserAndRepos = async (login) => {

    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
    ])

    return  {user: user.data, repos: repos.data}

}

//using the fetch api - just for ref, upgraded to axios and combined into 1 function
// //Get a single user
// export const getUser = async (login) => {

//     //Response
//     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//         headers: {
//             Authorization: `token ${GITHUB_TOKEN}`
//         }
//     })
//     if (response.status === 404) {
//         window.location = '/notfound'
//     }
//     else {

//         //Destructor the returned object to get the items array
//         const data = await response.json();

//         return data;
//     }


// }


// //Get user repos
// export const getUserRepos = async (login) => {


//     const params = new URLSearchParams({
//         sort: 'created',
//         per_page: 10

//     })



//     //Response
//     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//         headers: {
//             Authorization: `token ${GITHUB_TOKEN}`
//         }
//     })

//     //Destructor the returned object to get the items array
//     const data = await response.json();
//     return data

// }