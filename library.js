// DOM Access
const read = document.querySelectorAll("#btn-read");
const ele = document.querySelector(":root");
const redColor = getComputedStyle(ele).getPropertyValue("--red");
const greenColor = getComputedStyle(ele).getPropertyValue("--green");
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

// Event Listeners
read.forEach((reads) =>
  reads.addEventListener("click", (e) => {
    toggleRead(reads);
    readStatus = !readStatus;
  })
);
