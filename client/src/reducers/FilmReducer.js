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
    case DELETE_FILM:
      return {
        ...state,
        all: state.all.filter((item) => item._id !== payload),
        series: state.series.filter((item) => item._id !== payload),
        films: state.films.filter((item) => item._id !== payload),
      };
    case UPDATE_FILM:
      const newAll = state.all.map((item) =>
        item._id === payload._id ? payload : item
      );
      const newFilm = state.films.map((film) =>
        film._id === payload._id ? payload : film
      );
      const newSeries = state.series.map((ss) =>
        ss._id === payload._id ? payload : ss
      );
      return {
        ...state,
        all: newAll,
        films: newFilm,
        series: newSeries,
      };
    default:
      return state;
  }
};
