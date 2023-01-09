const Addbtn = document.querySelector('.Add-btn');
const bookauthor = document.querySelector('.bookauthor-input');
const booktitle = document.querySelector('.booktitle-input');
const bookscontainer = document.querySelector('.books-container');
const form = document.querySelector('.form');
const listings = document.querySelector('.listings');
const listclick = document.querySelector('#list-click');
const addclick = document.querySelector('#add-click');
const contactclick = document.querySelector('#contact-click');
const maincontact = document.querySelector('.main-contact');

// BOOK CLASS: REPRESENT A BOOK

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    static getBookLS() {
      let bookLocalStore;
      if (localStorage.getItem('books') === null) {
        bookLocalStore = [];
      } else {
        bookLocalStore = JSON.parse(localStorage.getItem('books'));
      }
      return bookLocalStore;
    }
  
    static add(book) {
      const bookList = Book.getBookLS();
      bookList.push(book);
      localStorage.setItem('books', JSON.stringify(bookList));
    }
   
    static removeBook(title, author) {
      const bookList = Book.getBookLS();
      bookList.forEach((book, index) => {
        if (book.title === title && book.author === author) {
          bookList.splice(index, 1);
          
        }
      });
      localStorage.setItem('books', JSON.stringify(bookList));
    }
  
    static displayBooks() {
      const books = Book.getBookLS();
      books.forEach((book) => Book.libraryBooks(book));
    }
  
    static libraryBooks(book) {
        let titleauthor = document.createElement('div');
        titleauthor.classList.add('list-container')
           titleauthor.innerHTML = `<div class="new-lib ${book.author}">
           <p><q>${book.title}</q> by <i>${book.author}</i></p>
             <button class="remove">
             Remove
             </button>
             </div>`;
            bookscontainer.appendChild(titleauthor);
    }
  
    static deleteBook(el) {
      if (el.classList.contains('remove')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static clearFields() {
        booktitle.value = "";
        bookauthor.value = "";
    }
  }
  
  document.addEventListener('DOMContentLoaded', Book.displayBooks);
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    booktitle.value;
    bookauthor.value;
    if (booktitle.value !== '' && bookauthor.value !== '') {
      const book = new Book(booktitle.value, bookauthor.value);
      Book.libraryBooks(book);
      Book.add(book);
      Book.clearFields();
    }
  });
  
  bookscontainer.addEventListener('click', (e) => {
    Book.deleteBook(e.target);
    const fe = e.target.previousSibling.previousSibling;
    Book.removeBook(fe.firstChild.textContent, fe.lastChild.textContent);
  });

  listclick.addEventListener('click', function(e){
    e.preventDefault();
     listings.style.display = 'block';
     form.style.display = 'none';
     maincontact.style.display = 'none';
     
  });

  addclick.addEventListener('click', function(e){
    e.preventDefault();
     form.style.display = 'block';
     listings.style.display = 'none';
     maincontact.style.display = 'none';
  });

  contactclick.addEventListener('click', function(e){
    e.preventDefault();
     maincontact.style.display = 'block';
     listings.style.display = 'none';
     form.style.display = 'none';
  });
