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
   this.author = author;
   this.pages = pages;
   this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
   let newBook = new Book(title, author, pages, status);
   myLibrary.push(newBook);
   displayBooks();
   console.log(`Added "${newBook.title}"`);
}

function displayBooks() {
   const booksContainer = document.querySelector('.books-container');
   booksContainer.textContent = "";

   myLibrary.forEach((book, index) => {
      let booksDiv = document.createElement('div');
      booksDiv.className = 'books';

      // for title
      let titleDiv = document.createElement('h2');
      titleDiv.classList.add('title');
      titleDiv.textContent = book.title;
      booksDiv.appendChild(titleDiv);
      
      // for author and pages
      let authorAndPagesDiv = document.createElement('div');
      authorAndPagesDiv.className = "author-and-pages";

      let authorDiv = document.createElement('div');
      authorDiv.classList.add('author');
      authorDiv.textContent = ` by ${book.author}`;
      authorAndPagesDiv.appendChild(authorDiv);
      
      let pagesDiv = document.createElement('div');
      pagesDiv.classList.add('pages');
      pagesDiv.textContent = `${book.pages} pages`;
      authorAndPagesDiv.appendChild(pagesDiv);
      
      booksDiv.appendChild(authorAndPagesDiv);

      // for status and delete
      let statusAndDeleteDiv = document.createElement('div');
      statusAndDeleteDiv.className = 'status-and-delete';

      let statusBtn = document.createElement('button');
      statusBtn.classList.add('status');
      statusBtn.textContent = book.status;
      statusAndDeleteDiv.appendChild(statusBtn);

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      statusAndDeleteDiv.appendChild(deleteBtn);
      
      booksDiv.appendChild(statusAndDeleteDiv);

      booksContainer.appendChild(booksDiv);

      deleteBtn.addEventListener('click', () => {
         removeBook(index);
      });

      statusBtn.addEventListener('click', () => {
         /* (book.status == 'Read') ? 'Not Read' : 'Read';
         return statusBtn.textContent = book.status; */
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
   });
}

function removeBook(index) {
   myLibrary.splice(index, 1);
   displayBooks();
}

const addBookBtn = document.getElementById('addBookBtn');
const dialog = document.getElementById('dialogModal');
const inputForm = document.getElementById('inputForm');
const cancelBtn = document.getElementById('cancelBtn');

addBookBtn.addEventListener("click", () => {
   dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
   dialog.close();
})

inputForm.addEventListener("submit", (e) => {
   e.preventDefault();

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
   
   addBookToLibrary(title, author, pages, status);
   displayBooks();
   inputForm.reset();
   dialog.close();
});

displayBooks();
