import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from 'dayjs'
import { useContext } from "react";
import useAuth from "../context/useAuth";

const baseURL = "http://127.0.0.1:8000";

const useAxios = () =>{
    const {token, setUser, setToken, save_authtoken } = useAuth()


    const axiosInstance = axios.create({
        baseURL,
        headers:{Authorization:`Bearer ${token?.access}`}
    });

    axiosInstance.interceptors.request.use(async req =>{
        const user = jwtDecode(token.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if(!isExpired) return req 

        const response = await axios.post(`${baseURL}/token/refresh`, {
            refresh:token.refresh
        })

        save_authtoken(response.data)

        setToken(response.data)
        setUser(jwtDecode(response.data.access))
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })

    return axiosInstance;
}


export default useAxios;