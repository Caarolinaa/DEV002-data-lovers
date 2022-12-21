import { filterSearch, dataMoviesAsc, dataMoviesDesc } from '../src/data.js';


const data = {
  films: [
    {
      "title": "Castle in the Sky",
      "release_date": "1986"
    },
    {
      "title": "Kiki's Delivery Service",
      "release_date": "1989"
    },
    {
      "title": "Grave of the Fireflies",
      "release_date": "1988"
    }]
}
const titleExpec = [{ "title": "Castle in the Sky", "release_date": "1986"}];

const dateExpecDesc = [{
  "title": "Castle in the Sky",
  "release_date": "1986"
},
{
  "title": "Grave of the Fireflies",
  "release_date": "1988"
},
{
  "title": "Kiki's Delivery Service",
  "release_date": "1989"
}
]

const dateExpecAsc = [{
  "title": "Kiki's Delivery Service",
  "release_date": "1989"
},
{
  "title": "Grave of the Fireflies",
  "release_date": "1988"
},
{
  "title": "Castle in the Sky",
  "release_date": "1986"
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
