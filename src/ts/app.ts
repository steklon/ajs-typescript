import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import { expectedMovie } from './expectedMovie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

const avengers = new Movie(
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

cart.add(avengers);

console.log('Корзина: ', cart.items);
console.log(avengers.getFullInfo());