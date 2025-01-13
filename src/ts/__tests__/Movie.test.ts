import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import { expectedMovie } from '../expectedMovie';

describe('Movie class', () => {
  test('проверка на корректное добавление Movie', () => {
    const cart = new Cart();
    const movieAvengers = new Movie(
      expectedMovie.id,
      expectedMovie.name,
      expectedMovie.originalName,
      expectedMovie.badges,
      expectedMovie.year,
      expectedMovie.country,
      expectedMovie.slogan,
      expectedMovie.genre,
      expectedMovie.duration,
      expectedMovie.picture);

    cart.add(movieAvengers);

    expect(cart.items[0]).toEqual({
      id: expectedMovie.id,
      name: expectedMovie.name,
      originalName: expectedMovie.originalName,
      badges: expectedMovie.badges,
      year: expectedMovie.year,
      country: expectedMovie.country,
      slogan: expectedMovie.slogan,
      genre: expectedMovie.genre,
      duration: expectedMovie.duration,
      picture: expectedMovie.picture,
    });
  });

  test('проверка свойств', () => {
    const movieAvengers = new Movie(
      expectedMovie.id,
      expectedMovie.name,
      expectedMovie.originalName,
      expectedMovie.badges,
      expectedMovie.year,
      expectedMovie.country,
      expectedMovie.slogan,
      expectedMovie.genre,
      expectedMovie.duration,
      expectedMovie.picture);

    expect(movieAvengers.id).toBe(1009);
    expect(movieAvengers.name).toBe('Мстители');
  });

  test('проверка на отображение полной информации', () => {
    const movie = new Movie(
      expectedMovie.id,
      expectedMovie.name,
      expectedMovie.originalName,
      expectedMovie.badges,
      expectedMovie.year,
      expectedMovie.country,
      expectedMovie.slogan,
      expectedMovie.genre,
      expectedMovie.duration,
      expectedMovie.picture);

    expect(movie.getFullInfo()).toBe('Мстители (2012) - «Avengers Assemble!»');
  });
});