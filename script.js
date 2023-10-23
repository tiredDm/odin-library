//interesting Styling Idea --> Make the UI similar to that of an actual bookshelf... Have active variables like, colour, text font, and 
const myLibrary = [];
const container = document.querySelector('.container');
const shelves = document.querySelector('.shelves');
let currentShelf = shelves.firstElementChild;
const btn = document.querySelector('.submit-button');

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  //We might want to have a some additional attributes for styling later.
}



function addBookToLibrary() {
  // GATHER ALL VALUES HERE
  let author = document.getElementById('Author');
  let title = document.getElementById('Title');
  let pages = document.getElementById('Pages');
 
  let page = 250; // if smaller than 100, make 100
  if (pages.value < 100){
    pages.value = 100;
  }

  console.log(author.value + ',' + title.value + ',' + pages.value) ;


  //CREATE OBJECT


  //DO ALL THE STUFF
  let newBook = document.createElement('div');
  newBook.classList.add('book');
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let width = pages.value*.01 +'rem';
  let height = 60+(Math.random()*33) + '%';
  newBook.style.backgroundColor = randomColor;
  newBook.style.width = width; // Page contributes to this..
  newBook.style.height = height;

  currentShelf.appendChild(newBook);
  //  myLibrary.push(newBook)

  //CLEAR ALL THE FORM VALUES 


}

function expandbookShelves(){

}

//Button stuff
btn.addEventListener('click', () => {
  addBookToLibrary();
});


/* 
Check List...
1. Object to Style -> take object properties and put them into the style..
  1a. What are the Styles we want... Width of the book, Colour, Height, Pattern, Title Font. 
2. take form inputs and read them into the object
3. Validate Form Inputs (If in the Odin Project)
4. Implement Move Row and Expand bookShelves..
*/