import axios from 'axios' 

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})
API.interceptors.request.use(request => {
    if(localStorage.getItem(process.env.REACT_APP_USER_PROFILE)){
        const currentUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_PROFILE))
        request.headers.authorization =  `Token ${currentUser.token}`
    }
    return request
})
export default API