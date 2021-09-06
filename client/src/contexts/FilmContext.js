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
  ADD_FILM,
  DELETE_FILM,
  UPDATE_FILM,
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

  // Get all films
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

  // Add new film
  const addFilm = async (newFilm) => {
    try {
      const response = await axios.post(`${API_URL}/film/create`, newFilm);
      if (response.data.success) {
        dispatch({
          type: ADD_FILM,
          payload: newFilm,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete film
  const deleteFilm = async (filmId) => {
    try {
      const response = await axios.delete(`${API_URL}/film/${filmId}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_FILM,
          payload: filmId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateFilm = async (filmId, filmUpdate) => {
    try {
      const response = await axios.put(`${API_URL}/film/${filmId}`, filmUpdate);
      if (response.data.success) {
        dispatch({
          type: UPDATE_FILM,
          payload: filmUpdate,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const filmContextData = {
    filmState,
    getFilms,
    getSeries,
    getAll,
    addFilm,
    deleteFilm,
    updateFilm
  };
  return (
    <FilmContext.Provider value={filmContextData}>
      {children}
    </FilmContext.Provider>
  );
};

export default FilmContextProvider;
