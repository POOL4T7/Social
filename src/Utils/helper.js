import Cookie from 'js-cookie';

// set in cookie
export const setCookie = (key, value) => {
    if (window !== 'undefined') {
        Cookie.set(key, value, {
            expires: 1
        });
    }
};

// remove from cookie
export const removeCookie = key => {
    if (window !== 'undefined') {
        Cookie.remove(key, {
            expires: 1
        });
    }
};

// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = key => {
    if (window !== 'undefined') {
        return Cookie.get(key);
    }
};

// set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// remove from localstorage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.data.token);
    setLocalStorage('userInfo', response.data.user);
};

export const signout = () => {
    removeCookie('token');
    removeLocalStorage('userInfo');
};

export const updateUser = (response) => {
    console.log('UPDATE USER IN LOCALSTORAGE HELPERS', response);
    if (typeof window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('userInfo'));
        auth = response.data;
        localStorage.setItem('userInfo', JSON.stringify(auth));
    }
};