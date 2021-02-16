// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year<publishing yeary







const book = {
    name :'someName',
    authorName : 'someAuthor',
    publishedYear: '1991',
    cover : 'soft',
    cost: '15$',

}
function aboutBook(someObj){
    console.log(`The book ${book['name']} was written by ${book['authorName']} in the year ${book['publishedYear']}`)
}
console.log(aboutBook(book));



