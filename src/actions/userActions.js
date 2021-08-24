import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";
export const userActions = {
    login,
    logout,
    register,
    getuserProfileData
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error', error)
                    dispatch(failure(error));
                }
            );
    };

    function request(req) { return { type: userConstants.LOGIN_REQUEST, req } }
    function success(res) { return { type: userConstants.LOGIN_SUCCESS, res } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(payload) {
    return dispatch => {
        dispatch(request(payload));
        const { name, email, mobile, password } = payload
        userService.register(name, email, mobile, password)
            .then(
                res => { 
                    dispatch(success(res.data));
                },
                error => {
                    console.log('error',error)
                    dispatch(failure(error));
                }
            );
    };

    function request(req) { return { type: userConstants.REGISTER_REQUEST, req } }
    function success(res) { return { type: userConstants.REGISTER_SUCCESS, res } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getuserProfileData(token) {
    return dispatch => {
        dispatch(request(token));

        userService.getuserProfileData(token)
            .then(
                res => {
                    dispatch(success(res.data))
                },
                error => {
                    console.log(error)
                    dispatch(failure(error))
                }
            )
    }

    function request(token) {
        return {
            type: userConstants.GET_PROFILE_DATA_REQUEST,
            token
        }
    }

    function success(res) {
        return {
            type: userConstants.GET_PROFILE_DATA_SUCCESS,
            res
        }
    }

    function failure(error) {
        return {
            type: userConstants.GET_PROFILE_DATA_FAILURE,
            error
        }
    }
}