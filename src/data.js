export const filterSearch = (movies, value) => {
  let searchFilter = movies.filter(e => {
  return e.title
})
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

  //la fecha release date es string, se pasa a number usando parseInt para que pueda ordenarlos por fecha Asc o Desc
  //luego de usar Parseint pasar a filtrado
