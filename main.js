const form = document.querySelector('.form');
const library = document.querySelector('.book-list');
const inputAuthor = document.querySelector('.input-author');
const inputBook = document.querySelector('.input-title');

const storedBooks = JSON.parse(localStorage.getItem('books'));
let keepbook = [];

function libraryBooks(object) {
  return `<div class="${object.author}">
    <p class="title">${object.title}</p>
    <p class="author">${object.author}</p> 
    <button class="remove">
    Remove
    </button>
    <hr>
    </div>`;
}

function remove() {
  if (keepbook.length > 0) {
    const removebtn = document.querySelectorAll('.remove');
    removebtn.forEach((element) => element.addEventListener('click', () => {
      const parentNodeClass = element.parentNode.className;
      element.parentNode.remove();
      keepbook = keepbook.filter((x) => x.author !== parentNodeClass);
      localStorage.setItem('books', JSON.stringify(keepbook));
    }));
  }
}

function add() {
  if (inputAuthor.value !== '' && inputBook.value !== '') {
    const currentBook = [];
    currentBook.push(
      {
        author: inputAuthor.value,
        title: inputBook.value,
      },
    );
    keepbook.push(
      {
        author: inputAuthor.value,
        title: inputBook.value,
      },
    );
    if (keepbook.length > 0) {
      currentBook.forEach((data) => library.insertAdjacentHTML('afterend', libraryBooks(data)));
    }
  }
  inputAuthor.value = '';
  inputBook.value = '';
  localStorage.setItem('books', JSON.stringify(keepbook));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  add();
  remove();
});

if (storedBooks !== null) {
  keepbook = storedBooks;
  keepbook.forEach((book) => {
    library.insertAdjacentHTML('afterend', libraryBooks(book));
    remove();
  });
}
