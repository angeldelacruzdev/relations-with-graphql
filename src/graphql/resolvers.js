import { authors } from "../data/authors";
import { books } from "../data/books";

import { reviews } from "../data/reviews";

export const resolvers = {
  Query: {
    ping() {
      return "pong";
    },
    books() {
      return books;
    },
    authors() {
      return authors;
    },
    reviews() {
      return reviews;
    },
  },
  Book: {
    author: (parent) => authors.find((author) => author.id === parent.author),
    reviews: (parent) => reviews.filter((review) => review.book === parent.id),
  },
  Author: {
    books: (parent) => books.filter((book) => book.author === parent.id),
  },
  Review: {
    book: (parent) => books.find(book => book.id === parent.book)
  },
};
