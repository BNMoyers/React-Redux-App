import axios from "axios"

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS_MONSTERS = 'FETCH_SUCCESS_MONSTERS'
export const FETCH_SUCCESS_ITEMS = 'FETCH_SUCCESS_ITEMS'
export const FETCH_SUCCESS_SPELLS = 'FETCH_SUCCESS_SPELLS'

export const FETCH_FAILURE = 'FETCH_FAILURE'



export const fetchMonsters = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios.get( "https://api.open5e.com/monsters/?armor_class=&challenge_rating=&document=&document__slug=&name=&type=undead")
    .then(res => dispatch({type: FETCH_SUCCESS_MONSTERS, payload: res.data.results}))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
 }

export const fetchItems = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios.get( "https://api.open5e.com//magicitems/")
    .then(res => dispatch({type: FETCH_SUCCESS_ITEMS, payload: res.data.results}))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
 }

// export const fetchItems = () => dispatch => {
//     dispatch({ type: START_FETCHING });

//     axios.get( "https://api.open5e.com/monsters/?armor_class=&challenge_rating=&document=&document__slug=&name=&type=undead")
//     .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data.results}))
//     .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
//  }


