import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_ACTIVATION_REQUEST,
    USER_ACTIVATION_SUCCESS,
    USER_ACTIVATION_FAIL,

    USER_RESEND_ACTIVATION_REQUEST,
    USER_RESEND_ACTIVATION_SUCCESS,
    USER_RESEND_ACTIVATION_FAIL,

    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAIL,

    USER_RESET_PASSWORD_CONFIRMATION_REQUEST,
    USER_RESET_PASSWORD_CONFIRMATION_SUCCESS,
    USER_RESET_PASSWORD_CONFIRMATION_FAIL,

} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userActivationReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIVATION_REQUEST:
            return { loading: true }

        case USER_ACTIVATION_SUCCESS:
            return { loading: false, message: action.payload, success:true }

        case USER_ACTIVATION_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const userResendActivationReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_RESEND_ACTIVATION_REQUEST:
            return { loading: true }

        case USER_RESEND_ACTIVATION_SUCCESS:
            return { loading: false, message: action.payload, success:true }

        case USER_RESEND_ACTIVATION_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const userPasswordResetReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_RESET_PASSWORD_REQUEST:
            return { loading: true }

        case USER_RESET_PASSWORD_SUCCESS:
            return { loading: false, message: action.payload, success:true }

        case USER_RESET_PASSWORD_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const userPasswordResetConfirmationReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_RESET_PASSWORD_CONFIRMATION_REQUEST:
            return { loading: true }

        case USER_RESET_PASSWORD_CONFIRMATION_SUCCESS:
            return { loading: false, message: action.payload, success:true }

        case USER_RESET_PASSWORD_CONFIRMATION_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

