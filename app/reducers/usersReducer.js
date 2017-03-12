// const initialState = {
//   fetching: false,
//   fetched: false,
//   movies: [],
//   error: null,
// };

export default function reducer(state={
  fetching: false,
  fetched: false,
  movies: [],
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case 'FETCH_USERS_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: action.payload.data
      }
      break;
    }
  }
};
