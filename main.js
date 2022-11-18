const Addbtn = document.querySelector('.Add-btn');
const bookauthor = document.querySelector('.bookauthor-input');
const booktitle = document.querySelector('.booktitle-input');
const bookscontainer = document.querySelector('.books-container');
const form = document.querySelector('.form');


let keepbook = [];

const addto = (title,author) => {
    keepbook.push({
        title,
        author
})
localStorage.setItem('mykey', JSON.stringify(keepbook));

return {title,author};
}

   let task = ({title,author}) => {

   let titleauthor = document.createElement('div');
   titleauthor.innerHTML = title + '<br>' + author + '<br>';
   let removebutton = document.createElement('button');
   removebutton.classList.add('remove');
   removebutton.id = keepbook.length-1;
   titleauthor.appendChild(removebutton);
   removebutton.innerHTML = '<div>remove</div>';
   let horiline = document.createElement('div');
   horiline.classList.add('hori');
   titleauthor.appendChild(horiline);
   horiline.innerHTML = '<hr>';
   
    bookscontainer.appendChild(titleauthor);

    removebutton.addEventListener('click',function(event){
        let target = event.target.id;
        keepbook.splice(target,1)
        localStorage.setItem('mykey', JSON.stringify(keepbook));
        window.location.reload();
    }) 

}
keepbook = JSON.parse(localStorage.getItem('mykey'));
if(keepbook === null){
    keepbook = [];
}

keepbook.forEach(task);

form.addEventListener('submit', (event) => {
     event.preventDefault();
    if(booktitle.value == "" || bookauthor.value == ""){
        SubmitEvent == false;

    }else{
        const newBook = addto(
            booktitle.value,
            bookauthor.value
            ); 
            task(newBook);
    }

    booktitle.value = "";
    bookauthor.value = "";          
});


