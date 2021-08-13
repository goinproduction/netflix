import React, { useContext, useEffect } from 'react';
import { BrowseContainer } from '../containers/browse';
import { selectionFilter } from '../utils';
import { FilmContext } from '../contexts/FilmContext';
export default function Browse() {
  const {
    filmState: { series, films },
    getFilms,
    getSeries,
  } = useContext(FilmContext);

  useEffect(() => {
    getFilms();
    getSeries();
  }, []);

  const slides = selectionFilter({ series, films });
  return <BrowseContainer slides={slides} />;
}
