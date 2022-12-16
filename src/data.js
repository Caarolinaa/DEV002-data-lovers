export const filterSearch = (movies, value) => {
  let searchFilter = movies.filter(e => e.title.toLowerCase().includes(value.toLowerCase())); 

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
