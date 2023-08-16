import { 
    REQUEST_CREATE_REQUEST,
    REQUEST_CREATE_SUCCESS,
    REQUEST_CREATE_FAIL
 } from '../constants/requestConstants'

export const requestCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CREATE_REQUEST:
            return { loading: true }

        case REQUEST_CREATE_SUCCESS:
            return { loading: false, request: action.payload, success:true }

        case REQUEST_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
