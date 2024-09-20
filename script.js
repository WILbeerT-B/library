const myLibrary = 
[
  {
    title: 'The Fellowship of the Ring', 
    author: 'J.R.R. Tolkien', 
    pages: 295, 
    read: 'read'
  },
  {
    title: 'The Two Towers', 
    author: 'J.R.R.', 
    pages: 195, 
    read: 'not read'
  },
  {
    title: 'The Return of the King', 
    author: 'Tolkien', 
    pages: 214, 
    read: 'not read'
  }
];

function Book(title, author, pages, read) {
  this.title = title;
  this. author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary() {
  let title = prompt('Please enter the title of the book: ');
  let author = prompt('Please enter the author of the book: ');
  let pages = prompt('Please enter number of pages: ');
  let isRead = prompt('Have you read the book?');
  let input = new Book(title, author, pages, isRead)
  myLibrary.push(input);
  return myLibrary;
}

function displayBook() {
  const output = document.querySelector('.output');
  output.textContent = "";

  for (let i=0; i<myLibrary.length; i++) {  
    const para = document.createElement("p");
    para.textContent = myLibrary[i].title +" by "+ myLibrary[i].author + ", " + myLibrary[i].pages + " pages, " + myLibrary[i].read;
    output.appendChild(para);
  }    
}

addBookToLibrary();
displayBook();