class Library {
  constructor (books = []) {
  this.books = books;
};

bookCount(){
  return this.books.length;
};

addBook(newBook) {
  this.books.push(newBook);
};

// addBooks(newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };

addBooks(newBooks){
    this.books = [...this.books, ...newBooks];
}

printInventory() {
  this.books.forEach(({author, title}) => {
    // const {title, author} = book;
    console.log(`${title} by ${author}`);
  });
 };
}

export default Library;

