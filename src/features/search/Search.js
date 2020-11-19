import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newResults, getResults, getAreThereMore, startSearch, getCurrentPage, getQuery, startAppend, appendResults } from './searchSlice'
import { searchPhotos } from '../../app/search_mockup'
import styles from './Search.module.css';

function Photo(props) {
  return (
    <div className={`col-4 ${styles.resultsPhoto}`}
      id={props.photoData.src}>
      <div style={{background: `url(${process.env.PUBLIC_URL + "/" + props.photoData.src}) no-repeat`}}
      alt={`Photo ${props.photoData.src} not found`} />
    </div>
  )
}

export function Search () {
  const dispatch = useDispatch();
  const photosFound = useSelector(getResults)
  const areThereMore = useSelector(getAreThereMore)
  const currentPage = useSelector(getCurrentPage)
  const lastQuery = useSelector(getQuery)


  function newSearch(query) {
    dispatch(startSearch)
    let results = searchPhotos(query);
    results.query = query;
    dispatch(newResults(results));
  }

  function getMore() {
    dispatch(startAppend)
    let results = searchPhotos(lastQuery, currentPage + 1);
    dispatch(appendResults(results))
  }

  return (
    <div>
      <h2 className="App-header">Search</h2>
      <input type="text" className="App-wide-input" placeholder="Search all photos (try with 'raccoon', 'animal', or 'frog')"
       onChange={event => newSearch(event.target.value)}></input>
      <div className="row">
        {photosFound.map( data =>
          (
            <Photo photoData={data} />
          )
        )}
      </div>
      {areThereMore && 
      <button className="App-button"
        onClick={() => getMore()}>
        SEE MORE
      </button>}
    </div>
  )
}