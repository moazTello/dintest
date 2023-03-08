import axios from 'axios';

export default axios.create(
    {
        // baseURL: "http://192.168.43.208:55055"
        baseURL: "http://localhost:55055"
        // baseURL: "https://xtravel.vercel.app"


        // baseURL: "http://192.168.43.208:1999"
        // baseURL: "http://localhost:3500"
        // baseURL: "http://localhost:1999"

    }
);
// export const axiosPrivate = axios.create(
//     {
//         // baseURL: "http://192.168.43.208:1999"
//         baseURL: "http://localhost:3500",
//         headers: {'Content-Type' : 'application/json'},
//         withCredentials: true
//     }
// );