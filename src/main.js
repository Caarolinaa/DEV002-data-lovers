import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
// console.log(data.films[0].poster)

const prueba = document.getElementById("prueba")

// prueba.innerHTML = `
// <p class= "prueba"> ${data.films[0].poster}</p>
// <img src="${data.films[0].poster}" />`



const movies = data.films
// console.log(data.films[0].title);

const generadorHTML=(movies)=> {
    const div = document.createElement("article")

    const movieTitle = document.createElement ("h2")
    movieTitle.textContent=movies.title

    const img = document.createElement("img")
    img.setAttribute("src", movies.poster)

    div.append(img, movieTitle)
    return div
}
movies.forEach(pelicula=>prueba.appendChild(generadorHTML(pelicula)))
