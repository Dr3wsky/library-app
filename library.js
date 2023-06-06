// DOM Access and Variable Assignment
const booksGrid = document.querySelector(".books-grid");
const ele = document.querySelector(":root");
const redColor = getComputedStyle(ele).getPropertyValue("--red");
const greenColor = getComputedStyle(ele).getPropertyValue("--green");
const addBookBtn = document.getElementById("add-book-btn");
const submitBtn = document.getElementById("submit-btn");
const addBookModal = document.getElementById("add-book-modal");
const overlay = document.querySelector(".overlay");
const formInput = document.getElementById("book-form");

let myLibrary = [];

const book1 = new Book(0, "Hary Potter", "JK Rowling", 543, true);
const book2 = new Book(1, "The Hobbit", "JRR Tolkein", 566, true);
const book3 = new Book(2, "Project Hail Mary", "The Martian", 54, false);

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

function getBookFromInput() {
  let id = myLibrary.length;
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let isRead = document.getElementById("is-read").checked;
  return new Book(id, title, author, pages, isRead);
}

// New Book info and creating cards
function makeNewCard(book) {
  // make elements
  const bookCard = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const readBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  // assign css & event listeners
  bookCard.classList.add("book-card");
  bookCard.setAttribute("id", `${book.id}`);
  title.classList.add("book-info", "title");
  author.classList.add("book-info", "author");
  pages.classList.add("book-info", "pages");
  readBtn.classList.add("btn", "book-info", "btn-read");
  readBtn.addEventListener("click", toggleRead);
  delBtn.classList.add("btn", "book-info", "btn-del");
  delBtn.addEventListener("click", deleteCard);

  // insert content
  title.textContent = `${book.title}`;
  author.textContent = `By: ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  if (book.readStatus) {
    readBtn.classList.add("read");
    readBtn.innerHTML = "READ";
  } else {
    readBtn.innerHTML = "NOT READ";
  }
  delBtn.textContent = "DELETE";

  // Append information
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(delBtn);
  booksGrid.appendChild(bookCard);
}

function deleteCard(e) {
  const id = e.target.parentElement.id;
  booksGrid.removeChild(e.target.parentElement);
  // updateLibrary(id);
}

function updateLibrary(id) {
  //Use array method to delete specified ID from library array
  //make sure is it not blank??
  //re-number all libraries
  //update the book card ID's?? to match
}

function toggleRead(e) {
  const id = e.target.parentElement.id;
  if (myLibrary[id].readStatus) {
    e.currentTarget.classList.remove("read");
    e.currentTarget.innerHTML = "NOT READ";
    myLibrary[id].readStatus = false;
  } else {
    e.currentTarget.classList.add("read");
    e.currentTarget.innerHTML = "READ";
    myLibrary[id].readStatus = true;
  }
}

// Modal events and actions
const openBookModal = () => {
  overlay.style.display = "block";
  addBookModal.classList.add("active");
};

const closeModal = () => {
  addBookModal.classList.remove("active");
  overlay.style.display = "none";
  formInput.reset(); // Clears form data when modal closes
};

const checkKeyPress = (e) => {
  console.log(e);
  if (e.key === "Escape") {
    closeModal();
  }
};

function addBook(e) {
  e.preventDefault();
  const newBook = getBookFromInput();
  myLibrary.push(newBook);
  makeNewCard(newBook, myLibrary);
  closeModal();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Handle Form info and create book
submitBtn.onclick = addBook;

// Interact w. buttons and modal control
addBookBtn.onclick = openBookModal;
window.onkeyup = checkKeyPress;
overlay.onclick = closeModal;
