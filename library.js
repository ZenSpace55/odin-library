let library = [];
let bookContainer = document.querySelector(".bookContainer");
let titleInput = document.getElementById("titleInput");
let authorInput = document.getElementById("authorInput");
let yearInput = document.getElementById("yearInput");
let readInput = document.getElementById("readInput");

function Book(title, author, year, read){
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
    this.id = 0;
}

Book.prototype.toggleRead = function(){
    if (this.read){
        this.read = false;
    }
    else{
        this.read = true;
    }
    this.displayReadStatus();
}

Book.prototype.displayReadStatus = function(){
    if (this.read){
        bookContainer.childNodes[this.id].querySelector(".toggleRead").textContent = "I've read this";
        bookContainer.childNodes[this.id].querySelector(".toggleRead").classList.remove("notRead");
    }
    else{
        bookContainer.childNodes[this.id].querySelector(".toggleRead").textContent = "Haven't read";
        bookContainer.childNodes[this.id].querySelector(".toggleRead").classList.add("notRead");
    }
}

function addToLibrary(title, author, year, read){

    library.push(new Book(title, author, year, read));

}

function buildBookCard(Book, id){

    let newCard = document.createElement("div");
    newCard.classList.add("bookCard");
    newCard.parentElement;
    bookContainer.appendChild(newCard);
    newCard.dataset.id = id;
    Book.id = id;
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
    let readButton = document.createElement("button");
    readButton.classList.add("toggleRead");
    readButton.addEventListener('click', () =>{
        Book.toggleRead();
    });
    newCard.appendChild(readButton);
    Book.displayReadStatus();
    let removeButton = document.createElement("button");
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

function addBookToLibrary(){
    if (!document.getElementById("titleInput").checkValidity()){
        console.log("INVALID INPUT");
        return;
    }
    else if (!document.getElementById("authorInput").checkValidity()){
        console.log("INVALID INPUT");
        return;
    }
    else if (!document.getElementById("yearInput").checkValidity()){
        console.log("INVALID INPUT");
        return;
    }
    addToLibrary(titleInput.value, authorInput.value, yearInput.value, readInput.checked);
    buildLibrary();
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    readInput.checked = false;
}

addToLibrary("The Shining", "Stephen King", 1977, 1);
addToLibrary("A Farewell to Arms", "Ernest Hemmingway", 1993, false);
addToLibrary("The Road", "Cormac McCarthy", 2006, false);
addToLibrary("A Simple Plan", "Scott Smith", 1929, true);
addToLibrary("The Hobbit", "JRR Tolkien", 1937, true);
addToLibrary("Dune", "Frank Herbert", 1965, true);
addToLibrary("Cannery Row", "John Steinbeck", 1945, false);
addToLibrary("Redwall", "Brian Jacques", 1986, true);

buildLibrary();