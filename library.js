// DOM Access
const read = document.querySelectorAll("#btn-read");
const redColor = getComputedStyle(ele).getPropertyValue("--red");
const greenColor = getComputedStyle(ele).getPropertyValue("--green");
const addBook = document.getElementById("addBookBtn");
const submitBtn = document.getElementById("submitBtn");
const ele = document.querySelector(":root");
const addBookModal = document.getElementById("addBookModal");
const overlay = document.querySelector(".overlay");

let readStatus = true;

// functions
function toggleRead(reads) {
  if (readStatus) {
    reads.classList.remove("not-read");
    reads.classList.add("read");
    reads.innerHTML = "READ";
  } else {
    reads.classList.remove("read");
    reads.classList.add("not-read");
    reads.innerHTML = "NOT READ";
  }
  console.log(readStatus);
}

function openBookModal() {
  overlay.style.display = "block";
  addBookModal.classList.add("active");
}

function closeModal(e) {
  if (e.key === "Escape") {
    addBookModal.classList.remove("active");
    overlay.style.display = "none";
  }
}

// Event Listeners and Handlers
read.forEach((reads) =>
  reads.addEventListener("click", (e) => {
    toggleRead(reads);
    readStatus = !readStatus;
  })
);

document.addEventListener("keyup", closeModal);
addBook.addEventListener("click", openBookModal);
