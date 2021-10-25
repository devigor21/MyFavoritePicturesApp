import {PictureActionTypes} from '../../models/Picture';

export const fetchPictures = payload => ({
  type: PictureActionTypes.FETCH_PICTURES,
  payload,
});

export const addFavoritePicture = payload => ({
  type: PictureActionTypes.ADD_FAVORITE,
  payload,
});

export const removeFavoritePicture = payload => ({
  type: PictureActionTypes.REM_FAVORITE,
  payload,
});

export const setPictures = () => ({type: PictureActionTypes.SET_PICTURES});
