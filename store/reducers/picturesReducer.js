const initialState = {
  pictures: [],
  favorite: [],
};

export const FETCH_PICTURES = 'FETCH_PICTURES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REM_FAVORITE = 'REM_FAVORITE';
export const SET_PICTURES = 'SET_PICTURES';

export const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      return {...state, pictures: action.payload};

    case ADD_FAVORITE:
      return {...state, favorite: [...state.favorite, action.payload]};

    case REM_FAVORITE:
      const idx = state.favorite.findIndex(pic => pic.id === action.payload);
      return {
        ...state,
        favorite: [
          ...state.favorite.slice(0, idx),
          ...state.favorite.slice(idx + 1),
        ],
      };

    default:
      return state;
  }
};

export const fetchPictures = payload => ({type: FETCH_PICTURES, payload});
export const addFavoritePicture = payload => ({type: ADD_FAVORITE, payload});
export const removeFavoritePicture = payload => ({type: REM_FAVORITE, payload});
export const setPictures = () => ({type: SET_PICTURES});
