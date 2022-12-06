import { dataMovies } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(dataMovies, data);
// console.log(data.films[0].poster)

const moviesPoster = document.getElementById("moviesPoster")

const movies = data.films
// console.log(data.films[0].title);

const generadorHTML=(movies)=> {
    const div = document.createElement("article")

    const movieTitle = document.createElement("h3")
    movieTitle.setAttribute("class", "titleh3")
    movieTitle.textContent=movies.title

    const img = document.createElement("img")
    img.setAttribute("src", movies.poster)
    img.setAttribute("class", "imgposter")

    const date = data.release_date
    

    div.append(img, movieTitle)
    return div
}
movies.forEach(pelicula=>moviesPoster.appendChild(generadorHTML(pelicula)))
