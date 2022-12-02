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
























// let keepbook = [];

// const addto = (title,author) => {
//     keepbook.push({
//         title,
//         author
// })
// localStorage.setItem('mykey', JSON.stringify(keepbook));

// return {title,author};
// }

//    let task = ({title,author}) => {

//    let titleauthor = document.createElement('div');
//    titleauthor.innerHTML = title + '<br>' + author + '<br>';
//    let removebutton = document.createElement('button');
//    removebutton.classList.add('remove');
//    removebutton.id = keepbook.length-1;
//    titleauthor.appendChild(removebutton);
//    removebutton.innerHTML = '<div>remove</div>';
//    let horiline = document.createElement('div');
//    horiline.classList.add('hori');
//    titleauthor.appendChild(horiline);
//    horiline.innerHTML = '<hr>';
   
//     bookscontainer.appendChild(titleauthor);

//     removebutton.addEventListener('click',function(event){
//         let target = event.target.id;
//         keepbook.splice(target,1)
//         localStorage.setItem('mykey', JSON.stringify(keepbook));
//         window.location.reload();
//     }) 

// }
// keepbook = JSON.parse(localStorage.getItem('mykey'));
// if(keepbook === null){
//     keepbook = [];
// }

// keepbook.forEach(task);

// form.addEventListener('submit', (event) => {
//      event.preventDefault();
//     if(booktitle.value == "" || bookauthor.value == ""){
//         SubmitEvent == false;

//     }else{
//         const newBook = addto(
//             booktitle.value,
//             bookauthor.value
//             ); 
//             task(newBook);
//     }

//     booktitle.value = "";
//     bookauthor.value = "";          
// });

