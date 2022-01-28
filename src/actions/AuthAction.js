import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_RESET,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_RESET,
    USER_LOGOUT,
} from "../constraints/AuthConstraint";
import { toast } from "react-toastify";
import { authenticate, signout } from "../Utils/helper";

import axios from "../Utils/axios";

export const register = (email, password, name, gender) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const { data } = await axios.post("/auth/register", {
            email,
            password,
            name,
            gender,
        });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        authenticate(data);
    } catch (e) {
        toast.warning(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: e.response && e.response.data.msg ? e.response.data : e.message,
        });
        setTimeout(() => {
            dispatch({ type: USER_REGISTER_RESET });
        }, 5000);
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const { data } = await axios.post("/auth/login", {
            email,
            password,
        });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data.data));
        authenticate(data);
    } catch (e) {
        toast.warning(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
        setTimeout(() => {
            dispatch({ type: USER_LOGIN_RESET });
        }, 5000);
    }
};

export const logout = () => async (dispatch) => {
    signout();
    dispatch({ type: USER_LOGOUT });
};
