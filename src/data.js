// Creamos constante para filtrar peliculas por año mediante boton select
//export const dataMovies = (data, option) => { //const filterDate
//const dateSort = dataMovies.sort((a, b) => {
  //if (option == 1){
    //ordenar ascendente
  //} else{
    //ordenar descendente
  //}
  //return a.release_date - b.release_date
//})
  //};


  /*export const anotherExample = () => {
    return 'OMG';
  };*/

export const dataMovies = (release_date) => {
  return movies.filter((film) => {
    return film.release_date === release_date;
  });
}

  export const dataMoviesAsc = (movies) => {      
    return movies.sort((a,b) => {
      if (a.release_date < b.release_date) {return -1}    
    });    
  }

  export const dataMoviesDesc= (movies) => {
    return movies.sort((a,b) => {
      if (a.release_date > b.release_date) {return 1}    
    });
  }

  //la fecha release date es string, se pasa a number usando parseInt para que pueda ordenarlos por fecha Asc o Desc
  //luego de usar Parseint pasar a filtrado