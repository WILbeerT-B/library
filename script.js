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

function addBookToLibrary() {

  // Create form
  const form = document.createElement('form');

  // Create form inputs
  let inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.name = 'title';
  inputTitle.id = 'title';
  inputTitle.placeholder = 'Title';

  let inputAuthor = document.createElement('input');
  inputAuthor.type = 'text';
  inputAuthor.name = 'author';
  inputAuthor.id = 'author';
  inputAuthor.placeholder = 'Author';

  let inputPages = document.createElement('input');
  inputPages.type = 'text';
  inputPages.name = 'pages';
  inputPages.id = 'pages';
  inputPages.placeholder = 'Pages';

  let inputStatus = document.createElement('input');
  inputStatus.type = 'text';
  inputStatus.name = 'status';
  inputStatus.id = 'status';
  inputStatus.placeholder = 'Status';

  // Create submit button
  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  // buttonSubmit.value = 'Submit';
  buttonSubmit.textContent = 'Submit';

  // Add elements to form
  form.appendChild(inputTitle);
  form.appendChild(inputAuthor);
  form.appendChild(inputPages);
  form.appendChild(inputStatus);
  form.appendChild(buttonSubmit);

  document.body.appendChild(form);

  buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const status = document.querySelector('#status');

    const myTitle = title.value;
    title.value = '';
    const myAuthor = author.value;
    author.value = '';
    const myPages = pages.value;
    pages.value = '';
    const myStatus = status.value;
    status.value = '';
    
    let input = new Book(myTitle, myAuthor, myPages, myStatus);
    myLibrary.push(input);
    displayBook();
    return myLibrary;
  });
  
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

const addBtn = document.querySelector('#btn');
addBtn.addEventListener("click", addBookToLibrary);

//displayBook();
//addBookToLibrary();
displayBook();