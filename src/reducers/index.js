import { FETCH_HOUSE_START, FETCH_HOUSE_SUCCESS, FETCH_HOUSE_FAILURE } from '../actions'

const initialState = {
    house: null,
    error: "",
    loading: false
};

const reducer=(state=initialState, action) => {
    switch(action.type){
       case FETCH_HOUSE_START:
           return{
               ...state,
               error: "",
               loading: true
           };
        case FETCH_HOUSE_SUCCESS:
            return{
                ...state,
                error:"",
                loading: false,
                house: action.payload
            };
        case FETCH_HOUSE_FAILURE:
            return{
                ...state,
                error: action.payload,
                loading: false,
                house: null
            }
       
        default: 
            return state;
    }
};

export default reducer