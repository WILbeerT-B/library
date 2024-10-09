let myLibrary = 
[
  {
    title: 'The Fellowship of the Ring', 
    author: 'J.R.R. Tolkien', 
    pages: 295, 
    status: 'Read'
  },
  {
    title: 'The Two Towers', 
    author: 'J.R.R.', 
    pages: 195, 
    status: 'Not read'
  },
  {
    title: 'The Return of the King', 
    author: 'Tolkien', 
    pages: 214, 
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
  const output = document.querySelector('.output');
  output.textContent = "";
  for (let i=0; i<myLibrary.length; i++) {
    const index = myLibrary.indexOf(myLibrary[i]);
    const para = document.createElement("div");
    const statusBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    
    
    para.textContent = myLibrary[i].title +" by "+ myLibrary[i].author + ", " + myLibrary[i].pages + " pages, ";
    deleteBtn.textContent = 'Delete';
    statusBtn.textContent = myLibrary[i].status;

    para.appendChild(statusBtn);
    para.appendChild(deleteBtn);
    output.appendChild(para);

    deleteBtn.addEventListener('click', () => {
      output.removeChild(para);
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