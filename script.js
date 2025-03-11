// Array to store book objects
const myLibrary = [];

function Book(title, author, pages, genre) {
    this.id = crypto.randomUUID(); // Generate unique ID
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

// Function to create and add a book to the array
function addBook(title, author, pages, genre) {
    const newBook = new Book(title, author, pages, genre);
    myLibrary.push(newBook);
}