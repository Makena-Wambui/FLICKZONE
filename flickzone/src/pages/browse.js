import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import { BrowseContainer } from '../containers/browse';

// The Browse page is used to display the browse container.
export default function Browse() {
  // The useContent hook is used to get the series and films from the Firebase database.
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series);
  console.log(films);
  // The selectionFilter function is used to filter the series and films.
  const slides = selectionFilter({ series, films });
  console.log(slides);
  return <BrowseContainer slides={slides} />;
}
