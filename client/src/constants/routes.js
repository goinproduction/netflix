export const HOME = '/';
export const BROWSE = '/browse';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const LOCAL_STORAGE_TOKEN_NAME = 'netflix';
export const API_URL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/api' : 'url';
export const FILMS_LOADED_SUCCESS = 'FILMS_LOADED_SUCCESS';
export const FILMS_LOADED_FAIL = 'FILMS_LOADED_FAIL';
export const SERIES_LOADED_SUCCESS = 'SERIES_LOADED_SUCCESS';
export const SERIES_LOADED_FAIL = 'SERIES_LOADED_FAIL';
export const ALL_LOADED_SUCCESS = 'ALL_LOADED_SUCCESS';
export const ALL_LOADED_FAIL = 'ALL_LOADED_FAIL';
export const ADD_FILM = 'ADD_FILM';
export const DELETE_FILM = 'DELETE_FILM';
export const UPDATE_FILM = 'UPDATE_FILM';