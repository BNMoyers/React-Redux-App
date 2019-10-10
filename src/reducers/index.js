import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  monsters: [],
  items: [],
  spells: [],
  isFetching: false,
  error: "this is an error message"
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        monsters: action.Payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
