let library = [];
let bookContainer = document.querySelector(".bookContainer");
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

function addToLibrary(){
    let newBook = new Book("Cat in the Mat", "Tom Sellek", 1984);
    buildBookCard(newBook);

}

function buildBookCard(Book){
    let newCard = document.createElement("div");
    newCard.classList.add("bookCard");
    newCard.parentElement
    bookContainer.appendChild(newCard);
    let newTitle = document.createElement("div");
    newTitle.classList.add("bookTitle");
    newTitle.textContent = Book.title;
    newCard.appendChild(newTitle);
    let newAuthor = document.createElement("div");
    newAuthor.classList.add("bookAuthor");
    newAuthor.textContent = Book.author;
    newCard.appendChild(newAuthor);
    let newYear = document.createElement("div");
    newYear.classList.add("bookYear");
    newYear.textContent = Book.year;
    newCard.appendChild(newYear);
}

addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();
addToLibrary();