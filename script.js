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
  return myLibrary;
}

function displayBook() {
  const bookDiv = document.querySelector('.books-container');
  bookDiv.textContent = "";
  for (let i=0; i<myLibrary.length; i++) {
    const index = myLibrary.indexOf(myLibrary[i]);
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

    title.textContent = myLibrary[i].title;
    author.textContent = `by ${myLibrary[i].author}`;
    pages.textContent = `${myLibrary[i].pages} pages`;
    // card.textContent = title + " " +;
    deleteBtn.textContent = 'Delete this book';
    statusBtn.textContent = myLibrary[i].status;

    bookCard.append(statusBtn, title, author, pages, deleteBtn);
    /* card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(statusBtn);
    card.appendChild(deleteBtn); */
    bookDiv.appendChild(bookCard);

    deleteBtn.addEventListener('click', () => {
      bookDiv.removeChild(bookCard);
      myLibrary.splice(index, 1);
    });

    statusBtn.addEventListener('click', () => {
      if (myLibrary[i].status == 'Read') {
        myLibrary[i].status = 'Not read'
        statusBtn.textContent = myLibrary[i].status;
      } else {
        myLibrary[i].status = 'Read'
        statusBtn.textContent = myLibrary[i].status
      }
        
    });
  }
  // return myLibrary;
}

displayBook();
showForm();