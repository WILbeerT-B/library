const myLibrary = 
[
  {
    title: 'The Fellowship of the Ring', 
    author: 'J.R.R. Tolkien', 
    pages: 295, 
    status: 'read'
  },
  {
    title: 'The Two Towers', 
    author: 'J.R.R.', 
    pages: 195, 
    status: 'not read'
  },
  {
    title: 'The Return of the King', 
    author: 'Tolkien', 
    pages: 214, 
    status: 'not read'
  }
];

function Book(title, author, pages, status) {
  this.title = title;
  this. author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  }
}

function newBook() {
  const showBtn = document.getElementById("new-book");
  const dialog = document.getElementById("dialog");
  const jsCloseBtn = dialog.querySelector("#js-close");
  
  showBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    addBookToLibrary();
  });
}

function addBookToLibrary() {

  const inputTitle = document.getElementById('title');
  const inputAuthor = document.getElementById('author');
  const inputPages = document.getElementById('pages');
  const inputStatus = document.getElementById('status');
  
  const title = inputTitle.value;
  inputTitle.value = '';
  const author = inputAuthor.value;
  inputAuthor.value = '';
  const pages = inputPages.value;
  inputPages.value = '';
  const status = inputStatus.value;
  inputStatus.value = '';
    
  let input = new Book(title, author, pages, status);
  myLibrary.push(input);
  displayBook();
  return myLibrary;
}

function displayBook() {
  const output = document.querySelector('.output');
  output.textContent = "";
  for (let i=0; i<myLibrary.length; i++) {
    const para = document.createElement("p");
    para.textContent = myLibrary[i].title +" by "+ myLibrary[i].author + ", " + myLibrary[i].pages + " pages, " + myLibrary[i].status;
    output.appendChild(para);
  }    
}

displayBook();
newBook();