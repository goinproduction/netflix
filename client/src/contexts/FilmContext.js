import React, { createContext, useReducer } from 'react';
import { FilmReducer } from '../reducers/FilmReducer';
import axios from 'axios';
import {
  API_URL,
  FILMS_LOADED_SUCCESS,
  FILMS_LOADED_FAIL,
  SERIES_LOADED_SUCCESS,
  SERIES_LOADED_FAIL,
  ALL_LOADED_SUCCESS,
  ALL_LOADED_FAIL,
} from '../constants/routes';

export const FilmContext = createContext();

const FilmContextProvider = ({ children }) => {
  // State
  const [filmState, dispatch] = useReducer(FilmReducer, {
    films: [],
    series: [],
    all: [],
  });

  // Get series
  const getSeries = async () => {
    try {
      const response = await axios.get(`${API_URL}/film/series`);
      if (response.data.success) {
        dispatch({
          type: SERIES_LOADED_SUCCESS,
          payload: response.data.series,
        });
      }
    } catch (error) {
      dispatch({ type: SERIES_LOADED_FAIL });
    }
  };

  // Get films
  const getFilms = async () => {
    try {
      const response = await axios.get(`${API_URL}/film/films`);
      if (response.data.success) {
        dispatch({
          type: FILMS_LOADED_SUCCESS,
          payload: response.data.films,
        });
      }
    } catch (error) {
      dispatch({ type: FILMS_LOADED_FAIL });
    }
  };

  // get all films
  const getAll = async () => {
    try {
      const response = await axios.get(`${API_URL}/film/all`);
      if (response.data.success) {
        dispatch({
          type: ALL_LOADED_SUCCESS,
          payload: response.data.films,
        });
      }
    } catch (error) {
      dispatch({ type: ALL_LOADED_FAIL });
    }
  };
  const filmContextData = {
    filmState,
    getFilms,
    getSeries,
    getAll,
  };
  return (
    <FilmContext.Provider value={filmContextData}>
      {children}
    </FilmContext.Provider>
  );
};

export default FilmContextProvider;
