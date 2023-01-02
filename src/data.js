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
// export const score = (movies) => {
//   let scoreMovie= 0;
//   for (let i=0; i< Object(movies).length; i++){
//     let scoreNumber = parseInt(["rt_score"]);
//     scoreMovie.push(scoreNumber)
//   }
//   return scoreMovie
// }

// export const funFact = (movies) => {
//   const promedio= movies.reduce((a,b) => a + b, 0) / Object(movies).length;
//   const promedioFun = promedio.toFixed(2)
//   return promedioFun
// }

 export const score = (movies) => {
  let i = 0;
  let suma = 0;
  let arrayLen = Object(movies).length;

  while (i < arrayLen) {
    suma = suma + movies[i++];
  }
    return suma / arrayLen
  }
let scoreNumber = parseInt(["rt_score"])
let scoreProm = score(scoreNumber)

console.log(scoreProm)