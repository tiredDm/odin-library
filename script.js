//interesting Styling Idea --> Make the UI similar to that of an actual bookshelf... Have active variables like, colour, text font, and 
const myLibrary = [];
const container = document.querySelector('.container');
const shelves = document.querySelector('.shelves');
let currentShelf = shelves.firstElementChild;

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  //We might want to have a some additional attributes for styling later.
}

function addBookToLibrary() {
  // do stuff here
  let newBook = document.createElement('div');
  newBook.classList.add('book');
  currentShelf.appendChild(newBook);
  //  myLibrary.push(newBook)

}

function expandbookShelves(){

}