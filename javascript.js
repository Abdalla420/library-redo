const myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.id = window.crypto.randomUUID();
}
// Since we are chaging something inside Book constructor and not a dom we use protoype
Book.prototype.toggleStatus = function(){
    this.status = !this.status;
}

function addBookToLibrary(a, t, p, s) {
    const createBook = new Book(a, t, p, s);
    myLibrary.push(createBook);
}
const shelf = document.querySelector(".shelf-container");

function renderBook(book) {

    const bookContainer = document.createElement("div");
    bookContainer.className = "bookContainer";

    const cover = document.createElement("div");
    cover.className = "cover";
    // storing UUID as a data attribute
    bookContainer.dataset.bookId = book.id;
    
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

    const authorName = document.createElement("p");
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
    // book footer buttons
    const bookFooter = document.createElement("div");
    bookFooter.className = "bookFooter";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "🗑️";

    deleteBtn.addEventListener(("click"), () => {
        const index = myLibrary.findIndex(element => element.id == bookContainer.dataset.bookId);
        myLibrary.splice(index, 1);
        bookContainer.remove();
    })

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggleBtn";
    if(book.status == true){
        toggleBtn.textContent = "Mark as Unread";
    }else{
        toggleBtn.textContent = "Mark as Read";
    }
        // toggle read status
    toggleBtn.addEventListener("click", () => {
        book.toggleStatus();
        if(book.status == true){
            toggleBtn.textContent = "Mark as Unread";

            bookStatus.textContent = `DONE`;
            ribbon.style.backgroundColor = "#0080FF";
            bookStatus.style.color = "white";
        }else{
            toggleBtn.textContent = "Mark as Read";

            bookStatus.textContent = "—";
            ribbon.style.backgroundColor = "#d7d7d7";
            bookStatus.style.color = "#838383";
        }   
    })

    ribbon.append(bookStatus);
    card.append(ribbon, bookTitleCard, authorName, bookPages);
    spine.append(bookTitleSpine);
    cover.append(spine, card);
    bookFooter.append(toggleBtn, deleteBtn);
    bookContainer.append(cover, bookFooter);
    shelf.append(bookContainer);
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

const form = document.querySelector("form");
const authorInput = document.querySelector("#author");

const titleInput = document.querySelector("#title");

const pagesInput = document.querySelector("#number")

const statusInput = document.querySelector("#status");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    addBookToLibrary(authorInput.value, titleInput.value, Number(pagesInput.value), statusInput.checked);
    renderBook(myLibrary[myLibrary.length - 1])
    form.reset();
    dialog.close();
})


    


addBookToLibrary("George Orwell", "1984", 328, true);
addBookToLibrary("Frank Herbert", "Dune", 412, false);
displayBooks();