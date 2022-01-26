import axios from "axios";
import {
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
} from "../constraints/UserConstraint";

export const getUserProfileDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "x-auth-token": `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/user/ownprofile", config);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (e) {
        dispatch({
            type: USER_DETAILS_FAIL,
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
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put("/profile/:id", user, config);
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (e) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                e.response && !e.response.data.success ? e.response.data : e.message,
        });
    }
};
