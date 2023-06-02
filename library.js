// DOM Access and Variable Assignment
const booksGrid = document.querySelector(".book-grid");
const read = document.querySelectorAll("#btnRead");
const ele = document.querySelector(":root");
const redColor = getComputedStyle(ele).getPropertyValue("--red");
const greenColor = getComputedStyle(ele).getPropertyValue("--green");
const addBookBtn = document.getElementById("addBookBtn");
const submitBtn = document.getElementById("submitBtn");
const addBookModal = document.getElementById("addBookModal");
const overlay = document.querySelector(".overlay");

// Tester Books
book1 = new Book(1, "The Dark Tower", "Stephen King", 567, false);
book2 = new Book(2, "Harry Potter", "JK Rowling", 466, true);
book3 = new Book(3, "Lord of the RIngs", "JRR Tolkein", 955, false);
book4 = new Book(4, "1984", "Geroge Orwell", 343, true);

let myLibrary = [];
let readStatus = true;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Data Structure and objects
// Object constructor
function Book(id, title, author, pages, readStatus) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    if (readStatus) {
      return `${this.title} by ${this.author} has ${this.pages} and has been read`;
    } else {
      return `${this.title} by ${this.author} has ${this.pages} and is NOT read yet`;
    }
  };
}

// UI and Actions
// New Book info and creating cards
const newCard = (book, library) => {
  // make elements
  const bookCard = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  // assign css
  bookCard.classList.add("book-card");
  title.classList.add("book-info", "title");
  author.classList.add("book-info", "author");
  pages.classList.add("book-info", "pages");
  readBtn.classList.add("btn", "book-info");
  readBtn.setAttribute("id", "btnRead");
  delBtn.classList.add("btn", "book-info");
  delBtn.setAttribute("id", "btnDelete");

  // insert content
  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  toggleRead(readBtn, book);
  delBtn.textContent = "DELETE";

  // Append information
  library.push(book);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(delBtn);
  booksGrid.appendChild(bookCard);
};

function toggleRead(cardBtn, book) {
  if (book.readStatus) {
    cardBtn.classList.add("read");
    cardBtn.innerHTML = "READ";
  } else {
    cardBtn.classList.remove("read");
    cardBtn.style.backgroundColor = redColor;
    cardBtn.innerHTML = "NOT READ";
  }
  console.log(book.readStatus);
}

// Modal events and animations
const openBookModal = () => {
  overlay.style.display = "block";
  addBookModal.classList.add("active");
};

const closeModal = () => {
  addBookModal.classList.remove("active");
  overlay.style.display = "none";
};

const checkKeyPress = (e) => {
  console.log(e);
  if (e.key === "Escape") {
    closeModal();
  }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Event Listeners and Handlers
read.forEach((reads) =>
  reads.addEventListener("click", (e) => {
    toggleRead(reads);
    readStatus = !readStatus;
  })
);

// Handle Form info and create book
// submitBtn.onclick = newBookInfo;

// Interact w. buttons and modal control
addBookBtn.onclick = openBookModal;
window.onkeyup = checkKeyPress;
overlay.onclick = closeModal;
