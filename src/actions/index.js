import axios from "axios";

export const FETCH_HOUSE_START= 'FETCH_HOUSE-START';
export const FETCH_HOUSE_SUCCESS= 'FETCH_HOUSE-SUCCESS'
export const FETCH_HOUSE_FAILURE= 'FETCH_HOUSE-FAILURE'

export const sortingHat = () => dispatch => {
        dispatch({ type: FETCH_HOUSE_START });
        axios.get('https://www.potterapi.com/v1/sortingHat')
        .then(res =>dispatch({ type: FETCH_HOUSE_SUCCESS, payload: res.data }))
        .catch(error => dispatch({ type: FETCH_HOUSE_FAILURE, payload: error.response }))
    };



