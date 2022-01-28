import axios from "../Utils/axios";
import {
    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAIL,
    USER_FOLLOW_REQUEST,
    USER_FOLLOW_SUCCESS,
    USER_FOLLOW_FAIL,
    USER_UNFOLLOW_REQUEST,
    USER_UNFOLLOW_SUCCESS,
    USER_UNFOLLOW_FAIL,
    USER_LIKE_REQUEST,
    USER_LIKE_SUCCESS,
    USER_LIKE_FAIL,
    USER_DISLIKE_REQUEST,
    USER_DISLIKE_SUCCESS,
    USER_DISLIKE_FAIL,
} from "../constraints/UserConstraint";
import { updateUser, getCookie } from "../Utils/helper";
import { toast } from "react-toastify";

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
        toast.success(data.msg);
        updateUser(data);
    } catch (e) {
        toast.success(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const getUsersList = () => async (dispatch) => {
    try {
        dispatch({ type: USERS_LIST_REQUEST });
        const { data } = await axios.get("/user/list");
        dispatch({ type: USERS_LIST_SUCCESS, payload: data });
    } catch (e) {
        dispatch({
            type: USERS_LIST_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const followUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: USER_FOLLOW_REQUEST });
        const token = getCookie("token");
        const config = {
            headers: {
                "login-token": token,
            },
        };
        const { data } = await axios.patch(`/user/${userId}/follow`, {}, config);
        toast.success(data.msg);
        dispatch({ type: USER_FOLLOW_SUCCESS, payload: data });
    } catch (e) {
        toast.warning(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_FOLLOW_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const unFollowUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: USER_UNFOLLOW_REQUEST });
        const token = getCookie("token");
        const config = {
            headers: {
                "login-token": token,
            },
        };
        const { data } = await axios.patch(`/user/${userId}/unfollow`, {}, config);
        toast.warn(data.msg);
        dispatch({ type: USER_UNFOLLOW_SUCCESS, payload: data });
    } catch (e) {
        toast.warning(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_UNFOLLOW_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const likeUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: USER_LIKE_REQUEST });
        const token = getCookie("token");
        const config = {
            headers: {
                "login-token": token,
            },
        };
        const { data } = await axios.patch(`/user/${userId}/like`, {}, config);
        toast.success(data.msg);
        dispatch({ type: USER_LIKE_SUCCESS, payload: data });
    } catch (e) {
        toast.warning(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_LIKE_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const disLikeUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: USER_DISLIKE_REQUEST });
        const token = getCookie("token");
        const config = {
            headers: {
                "login-token": token,
            },
        };
        const { data } = await axios.patch(`/user/${userId}/dislike`, {}, config);
        toast.warn(data.msg);
        dispatch({ type: USER_DISLIKE_SUCCESS, payload: data });
    } catch (e) {
        toast.warning(
            e.response && e.response.data.msg ? e.response.data.msg : e.message
        );
        dispatch({
            type: USER_DISLIKE_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};

export const getUsersFriendList = () => async (dispatch) => {
    try {
        dispatch({ type: USERS_LIST_REQUEST });
        const { data } = await axios.get("/user/list");
        dispatch({ type: USERS_LIST_SUCCESS, payload: data });
    } catch (e) {
        dispatch({
            type: USERS_LIST_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};