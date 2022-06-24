import axios from "../PacketAxios/request"
/**
 * request address and path
 */
const base = {
    baseUrl:"http://iwenwiki.com",
    banner:"/api/blueberrypai/getIndexBanner.php"
}
/**
 * define requrest method
 */
const api = {
    getBanner(){
        return axios.get(base.baseUrl + base.banner);
    }
}
export default api