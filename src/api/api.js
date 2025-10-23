import axios from "axios"; 

const http = axios.create({
    baseURL : "http://192.168.5.6:8000/api",
    headers : {
        "Accept" : "application/json"
    }
})

export default http