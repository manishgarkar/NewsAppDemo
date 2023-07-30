import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, AuthToken, BASE_URL } from "../assects/strings";
import { setLogOut } from "../redux/actions/users";

export const API = async (method, endpoint, data, token) => {
    return axios({
        method: method,
        url: `${BASE_URL}/${endpoint}`,
        data: data ? data : undefined,
        params:data,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
           return res
        })
        .catch((error) => {
            return error
        });
}


// all Api call here 

export const getTopHeadlines = (data) => API('GET', 'top-headlines', data).then((res) => { return res }).catch((err) => { return err });


export const searchArticles = () => API('GET', 'search').then((res) => { return res }).catch((err) => { return err });

