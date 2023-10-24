import { 
    REQUEST_CREATE_REQUEST,
    REQUEST_CREATE_SUCCESS,
    REQUEST_CREATE_FAIL
 } from '../constants/requestConstants'
import axios from 'axios'

export const createRequest = (name, email, phoneNumber, country, textBox, europeCountry) => async (dispatch) => {
    try {
        dispatch({
            type: REQUEST_CREATE_REQUEST
        })


        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            `/api/addRequest/`,
            {
                'name':name,
                'phoneNumber' : phoneNumber,
                'email': email,
                'country': country,
                'europeCountry':europeCountry,
                'about':textBox 
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
