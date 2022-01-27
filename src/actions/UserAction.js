import axios from "axios";
import {
    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
} from "../constraints/UserConstraint";
import { updateUser, getCookie } from "../Utils/helper";
import { toast } from 'react-toastify'

export const getUserProfileDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_DETAILS_REQUEST });
        const token = getCookie("token");
        const config = {
            headers: {
                "login-token": token,
            },
        };
        const { data } = await axios.get("/user/ownprofile", config);
        dispatch({ type: USER_PROFILE_DETAILS_SUCCESS, payload: data });
    } catch (e) {
        dispatch({
            type: USER_PROFILE_DETAILS_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const updateUserProfile = (user) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
        const token = getCookie("token");
        const config = {
            headers: {
                "login-token": token,
            },
        };
        const { data } = await axios.patch("/user/ownprofile", user, config);
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        toast.success(data.msg)
        updateUser(data);
    } catch (e) {
        toast.success(e.response && e.response.data.msg ? e.response.data.msg : e.message)
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};
