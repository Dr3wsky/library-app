// DOM Access
const read = document.getElementById("btn-read");
let readStatus = true;

// functions
function toggleRead() {
  if (read) {
    read.style.backgroundColor = "rgb(98, 228, 65)";
  } else {
    read.style.backgroundColor = "rgb(249, 55, 55)";
  }
}

// Event Listeners
read.addEventListener("change", (e) => {
  readStatus = !readStatus;
  toggleRead();
});
