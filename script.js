let myLibrary = 
[
  {
    title: 'You are an Amazing Boy', 
    author: 'Nadia Ross', 
    pages: 110, 
    status: 'Read'
  },
  {
    title: 'How to Catch a Star', 
    author: 'Oliver Jeffers', 
    pages: 205, 
    status: 'Read'
  },
  {
    title: 'Inspiring Stories for Kids', 
    author: 'Lily Nicolai', 
    pages: 187, 
    status: 'Not read'
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

function showForm() {
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
  console.log(`Added "${input.title}"`);
  return myLibrary;
}

function displayBook() {
  const bookDiv = document.querySelector('.books-container');
  bookDiv.textContent = "";

  for (const book of myLibrary) {
    const index = myLibrary.indexOf(book);
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    const title = document.createElement('h3');
    title.classList.add('title');
    const author = document.createElement('h4');
    author.classList.add('author');
    const pages = document.createElement('p');
    pages.classList.add('pages');
    const statusBtn = document.createElement('button');
    statusBtn.classList.add('status');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');

    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;

    deleteBtn.textContent = 'Delete this book';
    statusBtn.textContent = book.status;

    bookCard.append(statusBtn, title, author, pages, deleteBtn);    
    bookDiv.appendChild(bookCard);

    deleteBtn.addEventListener('click', () => {
      bookDiv.removeChild(bookCard);
      myLibrary.splice(index, 1);
      console.log(`Deleted "${book.title}"`);
    });

    statusBtn.addEventListener('click', () => {
      if (book.status == 'Read') {
        book.status = 'Not read'
        statusBtn.textContent = book.status;
        console.log(`Changed status of "${book.title}" to "${book.status}"`);
      } else {
        book.status = 'Read'
        statusBtn.textContent = book.status
        console.log(`Changed status of "${book.title}" to "${book.status}"`);
      } 
    });  
  }
  // return myLibrary;
}

displayBook();
showForm();