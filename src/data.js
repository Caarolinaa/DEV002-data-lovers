export const filterSearch = (movies) => {
  let searchFilter = movies.filter(e => {
    return e.title;
    
});
return searchFilter;

}


export const dataMoviesAsc = (movies) => {
  let yearSort = movies.sort((a, b) => {
    return b.release_date - a.release_date
  });
  return yearSort;
}

export const dataMoviesDesc = (movies) => {
  let yearSortDate = movies.sort((a, b) => {
    return a.release_date - b.release_date
  });
  return yearSortDate;
}

