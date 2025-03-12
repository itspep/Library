// Array to store book objects
const myLibrary = [];

function Book(title, author, pages, genre) {
    this.id = crypto.randomUUID(); // Generate unique ID
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

// Function to add a new book
function addBook(title, author, pages, genre) {
    if (title && author && pages && genre) {
        const newBook = new Book(title, author, pages, genre);
        myLibrary.push(newBook);
        displayBooks(); // Refresh book list
    } else {
        alert("Please fill in all fields!");
    }
}

// Function to handle adding a book from the form
function handleAddBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();
    const genre = document.getElementById("genre").value.trim();

    addBook(title, author, pages, genre);

    // Clear input fields after adding
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("genre").value = "";
}

// Function to display books
function displayBooks() {
    const container = document.querySelector(".main_container");
    container.innerHTML = ""; // Clear previous content

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <button onclick="removeBook('${book.id}')">Remove</button>
        `;

        container.appendChild(card);
    });
}

// Function to remove a book by ID
function removeBook(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks(); // Refresh book list after removal
    }
}