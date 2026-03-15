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
function displayBooks() {
    const shelf = document.querySelector(".shelf-container");
    for (const value of myLibrary){

        const cover = document.createElement("div");
        cover.className = "cover";

        const card = document.createElement("div");
        card.className = "card";

        const ribbon = document.createElement("div");
        ribbon.className = "ribbon";
        
        const bookStatus = document.createElement("p");
        bookStatus.className = "status";
        if (value.status == true){
            bookStatus.textContent = `Done`;
        }else {
            bookStatus.textContent = "—";
        }

        const spine = document.createElement("div");
        spine.className = "spine";

        const bookTitleSpine = document.createElement("p");
        bookTitleSpine.className = "titleSpine";
        bookTitleSpine.textContent = value.title;

        const bookTitleCard = document.createElement("p");
        bookTitleCard.className = "titleCard";
        bookTitleCard.textContent = value.title;

        const authorName = document.createElement("p")
        authorName.className = "author";
        authorName.textContent = `By ${value.author}`;

        const bookPages = document.createElement("p");
        bookPages.className = "pages";
        bookPages.textContent = `${value.pages} pages`

        ribbon.append(bookStatus);
        card.append(ribbon, bookTitleCard, authorName, bookPages);
        spine.append(bookTitleSpine);
        cover.append(spine, card);
        shelf.append(cover)
    }
}
addBookToLibrary("Mo", "egypt", 69, true);
addBookToLibrary("not-Mo", "not-egypt", 67, false);
displayBooks();