import { 
    REQUEST_CREATE_REQUEST,
    REQUEST_CREATE_SUCCESS,
    REQUEST_CREATE_FAIL
 } from '../constants/requestConstants'
import axios from 'axios'

export const createRequest = (companyName, category, email, phoneNumber, about) => async (dispatch, getState) => {
    try {
        dispatch({
            type: REQUEST_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.post(
            `/api/addRequest/`,
            {
                'companyName':companyName,
                'category' : category,
                'email': email,
                'phoneNumber': phoneNumber,
                'subject':about
            },
            config
        )

        dispatch({
            type: REQUEST_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: REQUEST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
} 
