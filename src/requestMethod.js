import axios from "axios";

const BASE_URL = "https://mercwebsitebackend-1kn3.onrender.com/api"


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

const ADMINTOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:admin"))?.currentUser || "{}")?.accessToken



export const publicRequest = axios.create({
    
    baseURL: BASE_URL,

})

export const userRequest = axios.create({
    
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},

})

export const adminUserRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${ADMINTOKEN}`}
})


