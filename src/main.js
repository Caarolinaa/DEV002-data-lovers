import { example } from './data.js';
import data from './data/ghibli/ghibli.js';


console.log(example, data);
// console.log(data.films[0].poster)

//variable que contiene el contenido de html
const prueba = document.getElementById("prueba")

//variable que contiene la data de las peliculas
const movies = data.films
// console.log(data.films[0].title);

//Variable que contiene los arrays de films
const generadorHTML=(movies)=> {
    const div = document.createElement("article")

    const movieTitle = document.createElement ("h2")
    movieTitle.textContent=movies.title

    const img = document.createElement("img")
    img.setAttribute("src", movies.poster)
    
     //append permite agregar objetos en cadena
    div.append(img, movieTitle)
    return div
}
//forEach ejecuta la funcion indicada por cada elemento del array
movies.forEach(pelicula=>prueba.appendChild(generadorHTML(pelicula)))
