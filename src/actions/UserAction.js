import axios from "axios";
import {
    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
} from "../constraints/UserConstraint";

export const getUserProfileDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_DETAILS_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "login-token": `${userInfo.token}`,
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

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                'login-token': `${userInfo.token}`,
            },
        };
        console.log(user);
        const { data } = await axios.patch("/user/ownprofile", user, config);
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (e) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};
