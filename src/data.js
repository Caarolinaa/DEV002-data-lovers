export const filterSearch = (movies, value) => {
  let searchFilter = movies.filter(e => e.title.toLowerCase().includes(value.toLowerCase())); 

return searchFilter;

}

// funcion para ordenar peliculas de modo descendente
export const dataMoviesDesc = (movies) => {
  let yearSort = movies.sort((a, b) => {
    return b.release_date - a.release_date
  });
  return yearSort;
}
//funcion para ordenar peliculas de modo ascendente
export const dataMoviesAsc = (movies) => {
  let yearSortDate = movies.sort((a, b) => {
    return a.release_date - b.release_date
  });
  return yearSortDate;
}

//CALCULO AGREGADO
export const funFact = (movies) => {
  const allResultsSum = movies.reduce((a, v)=> a + parseFloat(v.rt_score) ,0)
  const totalResultsQty = movies.length

  return allResultsSum / totalResultsQty
}