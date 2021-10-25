export interface IPicture {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface IPictureState {
  pictures: IPicture[];
  favorite: IPicture[];
}

export enum PictureActionTypes {
  FETCH_PICTURES = 'FETCH_PICTURES',
  ADD_FAVORITE = 'ADD_FAVORITE',
  REM_FAVORITE = 'REM_FAVORITE',
  SET_PICTURES = 'SET_PICTURES',
}

export interface IFetchPictures {
  type: PictureActionTypes.FETCH_PICTURES;
  payload: IPicture[];
}

export interface IAddFavoritePicture {
  type: PictureActionTypes.ADD_FAVORITE;
  payload: IPicture;
}

export interface IRemoveFavoritePicture {
  type: PictureActionTypes.REM_FAVORITE;
  payload: string;
}

export interface ISetPictures {
  type: PictureActionTypes.SET_PICTURES;
}

export type PictureAction =
  | IFetchPictures
  | IAddFavoritePicture
  | IRemoveFavoritePicture
  | ISetPictures;
