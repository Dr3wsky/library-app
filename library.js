// DOM Access and Variable Assignment
const read = document.querySelectorAll("#btn-read");
const ele = document.querySelector(":root");
const redColor = getComputedStyle(ele).getPropertyValue("--red");
const greenColor = getComputedStyle(ele).getPropertyValue("--green");
const addBookBtn = document.getElementById("addBookBtn");
const submitBtn = document.getElementById("submitBtn");
const addBookModal = document.getElementById("addBookModal");
const overlay = document.querySelector(".overlay");

let readStatus = true;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Function Assignment
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
} // Needs to be adjusted to take in initial readStatus value

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

const newBookInfo = (e) => {
  console.count("done");
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Event Listeners and Handlers
read.forEach((reads) =>
  reads.addEventListener("click", (e) => {
    toggleRead(reads);
    readStatus = !readStatus;
  })
);

addBookBtn.onclick = openBookModal;
submitBtn.onclick = newBookInfo;
window.onkeyup = checkKeyPress;
overlay.onclick = closeModal;
