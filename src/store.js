import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer, userLoginReducer } from "./reducers/AuthReducer";

// import {
//     userFriendListReducer,
//     userFollowFriendReducer,
//     userUnFollowFriendReducer,
// } from "./reducers/UserReducer";

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    // userFriendList: userFriendListReducer,
    // followUser: userFollowFriendReducer,
    // unfollowUser: userUnFollowFriendReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;