import axios from "axios";
/**
 * handling error message
 * 2.x success
 * 3.x redirect
 * 4.x frontend
 * 5.x backend
 */
const errorHandle = (status,info) =>{
    switch(status){
        case 400:
            console.log("Bad Request");
            break;
        case 401:
            console.log("Unauthorized Error");
            break;
        case 403:
            console.log("Forbidden");
            break;
        case 404:
            console.log("Not Found");
            break;
        case 500:
            console.log("Internal Server Error");
            break;
        case 502:
            console.log("Bad Gateway");
            break;
        default:
            console.log(info);
            break;
    }
}

/**
 * create instance
 */
const instance = axios.create({
    baseUrl:"http://iwenwiki.com",
    timeout:5000
})
/**
 * interceptor
 */
instance.interceptors.request.use(
    config=>{
        if(config.method==="post"){
            config.data = new URLSearchParams(config.data).toString();
        }
        return config;
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error =>{
        const {response} = error;
        errorHandle(response.status,response.info) 
    }
)

export default instance;