import { dataMovies } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(dataMovies, data);

const moviesPoster = document.getElementById("moviesPoster")


const movies = data.films

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
