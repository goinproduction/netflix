import {
  FILMS_LOADED_SUCCESS,
  SERIES_LOADED_SUCCESS,
  FILMS_LOADED_FAIL,
  SERIES_LOADED_FAIL,
} from '../constants/routes';

export const FilmReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILMS_LOADED_SUCCESS:
      return { ...state, films: payload };
    case FILMS_LOADED_FAIL:
      return { ...state, films: [] };
    case SERIES_LOADED_SUCCESS:
      return { ...state, series: payload };
    case SERIES_LOADED_FAIL:
      return { ...state, series: [] };
    default:
      return state;
  }
};
