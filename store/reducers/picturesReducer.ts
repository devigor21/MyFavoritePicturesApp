import {
  IPictureState,
  PictureAction,
  PictureActionTypes,
} from '../../models/Picture';

const initialState: IPictureState = {
  pictures: [],
  favorite: [],
};

export const picturesReducer = (
  state = initialState,
  action: PictureAction,
): IPictureState => {
  switch (action.type) {
    case PictureActionTypes.FETCH_PICTURES:
      return {...state, pictures: action.payload};

    case PictureActionTypes.ADD_FAVORITE:
      return {...state, favorite: [...state.favorite, action.payload]};

    case PictureActionTypes.REM_FAVORITE:
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
