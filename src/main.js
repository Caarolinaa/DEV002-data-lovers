//importamos funciones de data.js
import { dataMoviesDesc, dataMoviesAsc, filterSearch } from './data.js';
import data from './data/ghibli/ghibli.js';

//const para guardar la data desde ghibli.js
const movies = data.films
const moviesPoster = document.getElementById("moviesPoster");



//Variable que contiene los arrays de films
const generadorHTML = (movies) => {
    const div = document.createElement("article")
    div.setAttribute("class", "articlemovie")

    //título de cada película
    const movieTitle = document.createElement("h3")
    movieTitle.setAttribute("class", "titleh3")
    movieTitle.textContent = movies.title

    //poster/portada de cada película
    const img = document.createElement("img")
    img.setAttribute("class", "imgposter")
    img.setAttribute("src", movies.poster)

    //año de cada película
    const date = document.createElement("año")
    date.setAttribute("class", "dateMovies")
    date.textContent = movies.release_date

    //se crea div, append nos permite agrupar las 3 constantes de arriba en un div y se muestra en nuestra página
    div.append(img, movieTitle, date)
    return div
}

const generadorCard = (data) => {
    moviesPoster.innerHTML = "";
    data.forEach(pelicula => moviesPoster.appendChild(generadorHTML(pelicula)))
}

generadorCard(movies)



// Filtrar películas por año

let selectDate = document.getElementById("selectorfilter");
selectDate.addEventListener("change", function (event) {
    const value = document.getElementById("selectorfilter").value;
    if (event.target.value === "1") {
        let movieAsc = dataMoviesAsc(movies)
        //console.log(movieAsc); 
        generadorCard(movieAsc)
    } else if (event.target.value === "2") {
        let movieDes = dataMoviesDesc(movies)
        //console.log(movieDes);
        generadorCard(movieDes)
    }
});


//Buscador
let searchMovie = document.getElementById("buscadorMovie");
searchMovie.addEventListener("keyup", e => {
    let searchMov = filterSearch(movies)
    generadorCard(searchMov)
    //console.log(e.target.value);
    if (e.target.matches("#buscadorMovie")) {
        document.querySelectorAll(".titleh3").forEach(titulo => {
            //console.log(titulo);
            titulo.textContent.toLowerCase().includes(e.target.value)
                ? titulo.classList.remove("filtro")
                : titulo.classList.add("filtro")
        })
    }
})

