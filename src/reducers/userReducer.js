import {
    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,
    USER_PROFILE_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAIL,
    USERS_LIST_RESET,
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
    USERS_FRIENDS_LIST_REQUEST,
    USERS_FRIENDS_LIST_SUCCESS,
    USERS_FRIENDS_LIST_FAIL,
    USERS_FRIENDS_LIST_RESET,
} from "../constraints/UserConstraint";

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_PROFILE_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload.msg };
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
            return {
                loading: false,
                userInfo: action.payload.data,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload.msg };
        case USER_UPDATE_PROFILE_RESET:
            return { loading: false, error: null, success: null };
        default:
            return state;
    }
};

export const usersListReducer = (state = {}, action) => {
    switch (action.type) {
        case USERS_LIST_REQUEST:
            return { ...state, loading: true };
        case USERS_LIST_SUCCESS:
            return {
                loading: false,
                List: action.payload.data,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USERS_LIST_FAIL:
            return { loading: false, error: action.payload.msg || "Server error" };
        case USERS_LIST_RESET:
            return { state: {} };
        default:
            return state;
    }
};

export const userFollowReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FOLLOW_REQUEST:
            return { ...state, loading: true };
        case USER_FOLLOW_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USER_FOLLOW_FAIL:
            return { loading: false, error: action.payload.msg };
        default:
            return state;
    }
};

export const userUnFollowReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UNFOLLOW_REQUEST:
            return { ...state, loading: true };
        case USER_UNFOLLOW_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USER_UNFOLLOW_FAIL:
            return { loading: false, error: action.payload.msg };
        default:
            return state;
    }
};

export const userLikeReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LIKE_REQUEST:
            return { ...state, loading: true };
        case USER_LIKE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USER_LIKE_FAIL:
            return { loading: false, error: action.payload.msg };
        default:
            return state;
    }
};

export const userDisLikeReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DISLIKE_REQUEST:
            return { ...state, loading: true };
        case USER_DISLIKE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USER_DISLIKE_FAIL:
            return { loading: false, error: action.payload.msg };
        default:
            return state;
    }
};

export const userFriendsListReducer = (state = {}, action) => {
    switch (action.type) {
        case USERS_FRIENDS_LIST_REQUEST:
            return { ...state, loading: true };
        case USERS_FRIENDS_LIST_SUCCESS:
            return {
                loading: false,
                friendsList: action.payload.data,
                success: action.payload.success,
                msg: action.payload.msg,
            };
        case USERS_FRIENDS_LIST_FAIL:
            return { loading: false, error: action.payload.msg };
        case USERS_FRIENDS_LIST_RESET:
            return { state: {} };
        default:
            return state;
    }
};
