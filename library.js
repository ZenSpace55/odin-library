let library = [];
let bookContainer = document.querySelector(".bookContainer");
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

function addToLibrary(title, author, year){
    library.push(new Book(title, author, year));

}

function buildBookCard(Book, id){
    let newCard = document.createElement("div");
    newCard.classList.add("bookCard");
    newCard.parentElement;
    bookContainer.appendChild(newCard);
    newCard.dataset.id = id;
    let newTitle = document.createElement("div");
    newTitle.className = "bookTitle";
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
    let removeButton = document.createElement("button");
    removeButton.textContent="R"
    removeButton.classList.add("removeBook");
    removeButton.addEventListener('click', () =>{
        removeBook(newCard.dataset.id);
    });
    newCard.appendChild(removeButton);
}

function buildLibrary(){
    while(bookContainer.firstChild){
        bookContainer.removeChild(bookContainer.firstChild);
    }
    for (let i = 0; i < library.length; i++){
        buildBookCard(library[i], i);
    }
}

function removeBook(id){
    library.splice(id, 1);
    buildLibrary();
}


addToLibrary("The Shining", "Stephen King", 1977);
addToLibrary("A Farewell to Arms", "Ernest Hemmingway", 1993);
addToLibrary("The Road", "Cormac McCarthy", 2006);
addToLibrary("A Simple Plan", "Scott Smith", 1929);
addToLibrary("The Hobbit", "JRR Tolkien", 1937);
addToLibrary("Dune", "Frank Herbert", 1965);
addToLibrary("Cannery Row", "John Steinbeck", 1945);
addToLibrary("Redwall", "Brian Jacques", 1986);

buildLibrary();