//importamos funciones de data.js
import { dataMoviesDesc, dataMoviesAsc, filterSearch, score } from './data.js';
import data from './data/ghibli/ghibli.js';

//const para guardar la data desde ghibli.js
const movies = data.films
const moviesPoster = document.getElementById("moviesPoster");



//Variable que contiene los arrays de films
const generadorHTML = (movies) => {
    const div = document.createElement("article")
    div.setAttribute("class", "articlemovie")
    //movies contiene toda la data y acceso al id de cada film
    div.setAttribute("data-id", movies.id)

    div.setAttribute("data-description", movies.description)
    div.setAttribute("data-score", movies.rt_score)    

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

    //score de cada película
    const score = document.createElement("puntaje")
    score.setAttribute("class", "scoreMovies")
    score.textContent = movies.rt_score

    //se crea div, append nos permite agrupar las 3 constantes de arriba en un div y se muestra en nuestra página
    // a, section 
    div.append(img, movieTitle, date)
    return div
}

//funcion para mostrar los elementos en la pagina
const generadorCard = (data) => {
    moviesPoster.innerHTML = "";
    data.forEach(pelicula => moviesPoster.appendChild(generadorHTML(pelicula)))
}

generadorCard(movies)



// FUNCION PARA ORDENAR PELICULAS POR AÑO

let selectDate = document.getElementById("selectorfilter");
selectDate.addEventListener("change", function (event) {
    if (event.target.value === "1") {
        let movieAsc = dataMoviesDesc(movies)
        //console.log(movieAsc); 
        generadorCard(movieAsc)
    } else if (event.target.value === "2") {
        let movieDes = dataMoviesAsc(movies)
        //console.log(movieDes);
        generadorCard(movieDes)
    }
});


//Buscador
let searchMovie = document.getElementById("buscadorMovie");
searchMovie.addEventListener("keyup", e => {
    let searchMov = filterSearch(movies, e.target.value);
    generadorCard(searchMov);
})

//Calculo agregado
/* const promedioResult = document.getElementById("curious-fact-button");
let scoreArray = score(movies.films);
promedioResult.innerHTML = score(scoreArray) */
    


let movieClick = document.querySelectorAll('.articlemovie');

for (let i = 0; i < movieClick.length; i++) {
    movieClick[i].addEventListener('click', () => {
        const dataModal = movieClick[i].dataset;
        const modal = document.createElement("div");
        const cerrar = document.createElement("span");
        const sinopsis = document.createElement("h2");
        sinopsis.innerHTML = "SINOPSIS";
        sinopsis.classList.add("sinopsis");
        cerrar.innerHTML = "volver";
        cerrar.classList.add("cerrar");
        modal.innerHTML = dataModal.description;
        modal.classList.add("modal");
        modal.append(cerrar);
        moviesPoster.append(modal);
        modal.append(sinopsis);


        cerrar.addEventListener("click",function() {
            modal.style.display = "none";
          })

    });
}

//Icono Mouse
const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
});

