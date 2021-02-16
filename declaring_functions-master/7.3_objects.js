// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.
const book = {
  name: "Javascrip basics",
  author: "Jacob Gurevich",
  year: "2013",
};
const book2 = {
  name: "Javascrip basics New",
  author: "Jacob Gurevich",
  year: "2015",
};
const bookUtils = {
  getFirstPublished: function (book, book2) {
    if (book.year > book2.year) {
      return book.name;
    } else {
      return book2.name;
    }
  },
  setNewEdition: function (book, yearUpdate) {
    return (book.year = yearUpdate);
  },
  setLanguage: function (book, langUpdate) {
    return (book.language = langUpdate);
  },
  setTranslation: function (book, translator) {
    let language = book.language;
    return (book.translation = { translator, language });
  },
  setPublisher: function (book, name, locaion) {
    return (book.publisher = { name, locaion });
  },
  isSamePublisher: function (book, book2) {
    if (
      book.publisher.name == book2.publisher.name &&
      book.publisher.locaion == book2.publisher.locaion
    ) {
      return true;
    } else {
      false;
    }
  },
};
console.log(bookUtils.getFirstPublished(book, book2));
console.log(bookUtils.setLanguage(book, "Enlish"));
console.log(bookUtils.setTranslation(book, "JJ"));
console.log(bookUtils.setPublisher(book, "Me", "Afula"));
console.log(bookUtils.isSamePublisher(book, book2));

console.log(book);
console.log(bookUtils.isSamePublisher(book, book2));
