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
  displayBook();
  return myLibrary;
}

function displayBook() {
  for (let i=0; i<myLibrary.length; i++) {
    const output = document.querySelector('.output');
    output.textContent = "";
    for (let j=0; j<4; j++) {
      
      const para = document.createElement("p");
      para.textContent = myLibrary[j].title +" by "+ myLibrary[j].author + ", " + myLibrary[j].pages + " pages, " + myLibrary[j].read;
      output.appendChild(para);
    }
  }    
}

const addBtn = document.querySelector('#btn');
addBtn.addEventListener("click", addBookToLibrary);

//displayBook();
//addBookToLibrary();
displayBook();