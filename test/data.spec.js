import { filterSearch, dataMoviesAsc, dataMoviesDesc } from '../src/data.js';
const data = {
  films: [{"title": "Castle in the Sky"},{"title": "Kiki's Delivery Service"},{"title": "Grave of the Fireflies"}]}
const titleExpec = [{"title": "Castle in the Sky"}, {"title": "Kiki's Delivery Service"}];

  describe('filterSearch ', () => {
  it('Deberia retornar la pelicula ingresada en el buscador', () => {
    const resultado = filterSearch(data.films, 'castle in the Sky', 'title')
    expect(typeof resultado).toEqual(titleExpec);
  });

  });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof dataMoviesAsc).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof dataMoviesDesc).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
