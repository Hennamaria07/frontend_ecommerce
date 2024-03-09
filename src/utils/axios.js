import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    // headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
});

export default instance;