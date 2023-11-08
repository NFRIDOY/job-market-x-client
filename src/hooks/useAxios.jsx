import axios from "axios";

// Vercel URL RepleaceMaent (carefull with the /)
// http://localhost:5000
// https://job-market-x-server-ctgu3d28z-nfridoy.vercel.app
// const URL = `https://job-market-x-server-ctgu3d28z-nfridoy.vercel.app`
const instance = axios.create({
    baseURL: 'https://job-market-x-server-ctgu3d28z-nfridoy.vercel.app/api/v1',
    // withCredentials: true
})

const useAxios = () => {
    return instance;
};

export default useAxios;