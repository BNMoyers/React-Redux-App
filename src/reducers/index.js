import { START_FETCHING, FETCH_SUCCESS_MONSTERS, FETCH_SUCCESS_ITEMS, FETCH_SUCCESS_SPELLS, FETCH_FAILURE } from "../actions";

const initialState = {
  monsters: [],
  items: [],
  spells: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCH_SUCCESS_MONSTERS:
      return {
        ...state,
        isFetching: false,
        error: "",
        monsters: action.payload,

      };

      case FETCH_SUCCESS_ITEMS:
      return {
        ...state,
        isFetching: false,
        error: "",
        items: action.payload,

      };

      case FETCH_SUCCESS_SPELLS:
      return {
        ...state,
        isFetching: false,
        error: "",
        spells: action.payload,

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
