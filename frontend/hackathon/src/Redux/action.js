import * as types from "./actiontypes"
import axios from "axios";

export const getRegistration = (data) => (dispatch) => {
    dispatch({ type: types.REGISTRATION_REQUEST })
    return axios.post("http://localhost:8080/user/register", data)
        .then((res) => {
            // console.log(res)
           return dispatch({ type: types.REGISTRATION_SUCCESS, payload: res })
        }).catch((err) => {
          return  dispatch({ type: types.REGISTRATION_FAILURE })
        })
}


export const getLogin = (data) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    return axios.post("http://localhost:8080/user/login", data)
        .then((res) => {
            // console.log(res)
           return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.LOGIN_FAILURE })
        })
}

