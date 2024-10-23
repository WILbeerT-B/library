let myLibrary =
   [
      {
         title: 'You are an Amazing Boy',
         author: 'Nadia Ross',
         pages: 110,
         read: true
      },
      {
         title: 'How to Catch a Star',
         author: 'Oliver Jeffers',
         pages: 205,
         read: false
      },
      {
         title: 'Inspiring Stories for Kids',
         author: 'Lily Nicolai',
         pages: 187,
         read: true
      }
   ];

function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
   let newBook = new Book(title, author, pages, read);
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

      // for status and delete
      let statusAndDeleteDiv = document.createElement('div');
      statusAndDeleteDiv.className = 'status-and-delete';

      let readStatus = document.createElement('button');
      readStatus.classList.add('read');
      readStatus.textContent = book.read ? 'Read' : 'Unread';
      statusAndDeleteDiv.appendChild(readStatus);

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'X';
      statusAndDeleteDiv.appendChild(deleteBtn);
      
      booksDiv.appendChild(statusAndDeleteDiv);

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
      booksContainer.appendChild(booksDiv);

      deleteBtn.addEventListener('click', () => {
         removeBook(index);
      });

      readStatus.addEventListener('click', () => {
         toggleReadStatus(index);
      });
   });
}

function removeBook(index) {
   myLibrary.splice(index, 1);
   displayBooks();
}

function toggleReadStatus(index) {
   myLibrary[index].read = !myLibrary[index].read;
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
   const inputRead = document.getElementById('read');

   const title = inputTitle.value;
   // inputTitle.value = '';
   const author = inputAuthor.value;
   // inputAuthor.value = '';
   const pages = inputPages.value;
   // inputPages.value = '';
   const read = inputRead.checked;
   // inputRead.value = '';
   
   addBookToLibrary(title, author, pages, read);
   displayBooks();
   inputForm.reset();
   dialog.close();
});

displayBooks();
