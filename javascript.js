const myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.id = window.crypto.randomUUID();
}

function addBookToLibrary(a, t, p, s) {
    const createBook = new Book(a, t, p, s);
    myLibrary.push(createBook);
}
const shelf = document.querySelector(".shelf-container");
function renderBook(book) {
    const cover = document.createElement("div");
        cover.className = "cover";
        
        //spine and its child
        const spine = document.createElement("div");
        spine.className = "spine";
        
        const bookTitleSpine = document.createElement("p");
        bookTitleSpine.className = "titleSpine";
        bookTitleSpine.textContent = book.title;

        // card and its children including ribbon
        const card = document.createElement("div");
        card.className = "card";

        const bookTitleCard = document.createElement("p");
        bookTitleCard.className = "titleCard";
        bookTitleCard.textContent = book.title;

        const authorName = document.createElement("p")
        authorName.className = "author";
        authorName.textContent = `${book.author}`;
        
        const bookPages = document.createElement("p");
        bookPages.className = "pages";
        bookPages.textContent = `${book.pages} pages`
        
        // ribbon and its child
        const ribbon = document.createElement("div");
        ribbon.className = "ribbon";
        
        const bookStatus = document.createElement("p");
        bookStatus.className = "status";
        if (book.status == true){
            bookStatus.textContent = `DONE`;
            ribbon.style.backgroundColor = "#0080FF";
        }else {
            bookStatus.textContent = "—";
            ribbon.style.backgroundColor = "#d7d7d7";
            bookStatus.style.color = "#838383";
        }
        
        ribbon.append(bookStatus);
        card.append(ribbon, bookTitleCard, authorName, bookPages);
        spine.append(bookTitleSpine);
        cover.append(spine, card);
        shelf.append(cover)
}
function displayBooks() {
    for (const value of myLibrary){
        renderBook(value);
    }
}

// when user press New Book he gets the dialog
const add = document.querySelector(".add");
const dialog = document.querySelector(".dialog")

add.addEventListener("click",() => {
    dialog.showModal();
})

const addInput = document.querySelector("#addBtn")

const authorInput = document.querySelector("#author");

const titleInput = document.querySelector("#title");

const pagesInput = document.querySelector("#number")

const statusInput = document.querySelector("#status");

addInput.addEventListener("submit", (e)=> {
    e.preventDefault();
    addBookToLibrary(authorInput.value, titleInput.value, pagesInput.value, statusInput.checked);
    renderBook(myLibrary[myLibrary.length - 1])
    dialog.close();
})



addBookToLibrary("Mo", "egypt", 69, true);
addBookToLibrary("not-Mo", "not-egypt", 67, false);
displayBooks();