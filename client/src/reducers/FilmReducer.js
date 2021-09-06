import {
  FILMS_LOADED_SUCCESS,
  SERIES_LOADED_SUCCESS,
  FILMS_LOADED_FAIL,
  SERIES_LOADED_FAIL,
  ALL_LOADED_SUCCESS,
  ALL_LOADED_FAIL,
  ADD_FILM,
  DELETE_FILM,
  UPDATE_FILM,
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
    case ALL_LOADED_SUCCESS:
      return { ...state, all: payload };
    case ALL_LOADED_FAIL:
      return { ...state, all: [] };
    case ADD_FILM:
      return {
        ...state,
        all: [...state.all, payload],
        series:
          payload.type === 'series'
            ? [...state.series, payload]
            : [...state.series],
        films:
          payload.type === 'films'
            ? [...state.films, payload]
            : [...state.films],
      };
    default:
      return state;
  }
};
