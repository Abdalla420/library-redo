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
    const shelf = document.querySelector(".shelf-container")
    for (const value of myLibrary){
        const card = document.createElement("div");
        card.className = "card";

        const bookTitle = document.createElement("p");
        bookTitle.className = "title";
        bookTitle.textContent = value.title;

        const authorName = document.createElement("p")
        authorName.className = "author";
        authorName.textContent = `By ${value.author}`;

        const bookPages = document.createElement("p");
        bookPages.className = "pages";
        bookPages.textContent = `${value.pages} pages`

        const bookStatus = document.createElement("p");
        bookStatus.className = "status";
        if (value.status == true){
            bookPages.textContent = `✅ Read`;
        }else {
            bookPages.textContent = "📚 Unread";
        }

        card.append(bookTitle, authorName, bookPages, bookStatus);
        shelf.append(card);
    }
}
addBookToLibrary("Mo", "egypt", 69, true);
addBookToLibrary("not-Mo", "not-egypt", 67, false);
displayBooks();