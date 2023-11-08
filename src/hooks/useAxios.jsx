import axios from "axios";

// Vercel URL RepleaceMaent (carefull with the /)
// http://localhost:5000
// https://job-market-x-server-ctgu3d28z-nfridoy.vercel.app
// baseURL: 'https://job-market-x-server.vercel.app/api/v1',

const instance = axios.create({
    // baseURL: 'https://job-market-x-server.vercel.app/api/v1',
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
})

const useAxios = () => {
    return instance;
};

export default useAxios;