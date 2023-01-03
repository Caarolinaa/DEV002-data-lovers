import { filterSearch, dataMoviesAsc, dataMoviesDesc, funFact } from '../src/data.js';


const data = {
  films: [
    {
      "title": "Castle in the Sky",
      "release_date": "1986",
      "rt_score": "95"
    },
    {
      "title": "Kiki's Delivery Service",
      "release_date": "1989",
      "rt_score": "96"
    },
    {
      "title": "Grave of the Fireflies",
      "release_date": "1988",
      "rt_score": "98"
    }]
}
const titleExpec = [{ "title": "Castle in the Sky", "release_date": "1986", "rt_score": "95"}];

const dateExpecAsc = [{
  "title": "Castle in the Sky",
  "release_date": "1986",
  "rt_score": "95"
},
{
  "title": "Grave of the Fireflies",
  "release_date": "1988",
  "rt_score": "98"
},
{
  "title": "Kiki's Delivery Service",
  "release_date": "1989",
  "rt_score": "96"
}
]

const dateExpecDesc = [{
  "title": "Kiki's Delivery Service",
  "release_date": "1989",
  "rt_score": "96"
},
{
  "title": "Grave of the Fireflies",
  "release_date": "1988",
  "rt_score": "98"
},
{
  "title": "Castle in the Sky",
  "release_date": "1986",
  "rt_score": "95"
}
]

describe('filterSearch ', () => {
  it('Deberia retornar la pelicula ingresada en el buscador', () => {
    const resultado = filterSearch(data.films, 'castle in the Sky')
    expect(resultado).toEqual(titleExpec);
  });

});


describe('dataMoviesAsc', () => {
  it('Debería retonar las películas en orden ascendente', () => {
    const resultado = dataMoviesAsc(data.films)

    expect(resultado).toEqual(dateExpecAsc);
  });
  });



describe('dataMoviesDesc', () => {
  it('Debería retornar las peliculas en orden descendente', () => {
    const resultado = dataMoviesDesc(data.films)
    expect(resultado).toEqual(dateExpecDesc);
  });
});

describe('funFact', () => {
  it('Debería retornar el promedio de los puntajes de las peliculas', () => {
    const resultado = funFact(data.films)
    expect(resultado).toEqual(96.33333333333333);
  });
});
