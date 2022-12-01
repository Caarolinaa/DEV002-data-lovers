import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(data.films[0].poster);
//console.log(example, data);

const root = document.getElementById("peliculas")
root.classList="poster-style"
root.innerHTML = `
`

const peliculas =data.films
console.log(data.films[0].title);

const generadorHTML=(peliculas)=> {
    const div = document.createElement("div")

    const titlepelicula = document.createElement ("titlepelicula")
    titlepelicula.textContent=peliculas.title

    const img = document.createElement("img")
    img.setAttribute("src", peliculas.poster)

    div.append(img, titlepelicula)
    return div
}
peliculas.forEach(pelicula=>root.appendChild(generadorHTML(pelicula)))