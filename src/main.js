import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(example, data);
// console.log(data.films[0].poster)

const prueba = document.getElementById("prueba")


const movies = data.films
// console.log(data.films[0].title);

//Variable que contiene los arrays de films
const generadorHTML=(movies)=> {
    const div = document.createElement("article")
    
    const movieTitle = document.createElement("h3")
    movieTitle.setAttribute("class", "titleh3")
    movieTitle.textContent=movies.title

    const img = document.createElement("img")
    img.setAttribute("src", movies.poster)

    div.append(img, movieTitle)
    return div
}
movies.forEach(pelicula=>prueba.appendChild(generadorHTML(pelicula)))
