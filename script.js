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

function showForm() {
   const showFormBtn = document.getElementById("add-book-button");
   const dialog = document.getElementById("dialog");
   const confirm = dialog.querySelector("#submit-button");

   showFormBtn.addEventListener("click", () => {
      dialog.showModal();
   });

   confirm.addEventListener("click", (e) => {
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

      dialog.close();
   });
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
      titleDiv.className = 'title';
      titleDiv.textContent = book.title;
      booksDiv.appendChild(titleDiv);
      
      // for author and pages
      let authorAndPagesDiv = document.createElement('div');
      authorAndPagesDiv.className = "author-and-pages";

      let authorDiv = document.createElement('div');
      authorDiv.className = 'author';
      authorDiv.textContent = ` by ${book.author}`;
      authorAndPagesDiv.appendChild(authorDiv);
      
      let pagesDiv = document.createElement('div');
      pagesDiv.className = 'pages';
      pagesDiv.textContent = `${book.pages} pages`;
      authorAndPagesDiv.appendChild(pagesDiv);
      
      booksDiv.appendChild(authorAndPagesDiv);

      // for status and delete
      let statusAndDeleteDiv = document.createElement('div');
      statusAndDeleteDiv.className = 'status-and-delete';

      let statusBtn = document.createElement('button');
      statusBtn.className = 'status';
      statusBtn.textContent = book.status;
      statusAndDeleteDiv.appendChild(statusBtn);

      let deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete';
      deleteBtn.textContent = 'Delete';
      statusAndDeleteDiv.appendChild(deleteBtn);
      
      booksDiv.appendChild(statusAndDeleteDiv);

      // bookCard.append(title, author, pages, statusBtn, deleteBtn);
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


showForm();
displayBooks();
