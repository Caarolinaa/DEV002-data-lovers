import { dataMovies } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(dataMovies, data);
// console.log(data.films[0].poster)

// const moviesPoster = document.getElementById("home2")
// document.getElementById("home1").style.visibility = "visible";
// document.getElementById("home2").style.visibility ="hidden";

const mostrar = document.getElementById("films-button");
mostrar.addEventListener("click",mostrarPantalla);
function mostrarPantalla(){
    document.getElementById("home1").style.display = "none";
    document.getElementById("home2").style.visibility = "visible"
}

const movies = data.films
// console.log(data.films[0].title);

//Variable que contiene los arrays de films
const generadorHTML=(movies)=> {
    const div = document.createElement("article")
    
    const movieTitle = document.createElement("h3")
    movieTitle.setAttribute("class", "titleh3")
    movieTitle.textContent=movies.title

    const img = document.createElement("img")
    img.setAttribute("class", "imgposter")
    img.setAttribute("src", movies.poster)

    div.append(img, movieTitle)
    return div
}
movies.forEach(pelicula=>moviesPoster.appendChild(generadorHTML(pelicula)))

// const peliculaFiltrada = movies.filter (function(el) {
//     return (el.title[0])
// })
// console.log(peliculaFiltrada)
