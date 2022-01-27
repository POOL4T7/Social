import {
    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,
    USER_PROFILE_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from "../constraints/UserConstraint";

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_PROFILE_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case USER_PROFILE_DETAILS_RESET:
            return {
                user: {},
            };
        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true };
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload };
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload };
        case USER_UPDATE_PROFILE_RESET:
            return { loading: false, error: null, success: null };
        default:
            return state;
    }
};
