// Creamos constante para filtrar peliculas por año mediante boton select
export const dataMovies = (data, option) => { //const filterDate
const dateSort = data.sort((a, b) => {
  return a.release_date - b.release_date
})
  };

  /*export const anotherExample = () => {
    return 'OMG';
  };*/
  