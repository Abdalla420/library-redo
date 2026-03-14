const myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(a, t, p, s) {
    const createBook = new Book(a, t, p, s);
    myLibrary.push(createBook);
}

addBookToLibrary("Mo", "egypt", 69, true);
addBookToLibrary("not-Mo", "not-egypt", 67, false);