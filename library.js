// Initialize vars for each input field
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const userEmail = document.querySelector("#user-email");
const userPhone = document.querySelector("#user-phone");
const pwd = document.querySelector("#pwd");
const pwdC = document.querySelector("#pwdC");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const userEmailError = document.querySelector("#user-email-error");
const userPhoneError = document.querySelector("#user-phone-error");
const pwdError = document.querySelector("#pwd-error");
const pwdErrorMsg1 = document.querySelector("#error1");
const pwdErrorMsg2 = document.querySelector("#error2");
const pwdErrorMsg3 = document.querySelector("#error3");
const pwdCError = document.querySelector("#pwdC-error");

errorMsg1 = "Missing atleast 1 capital ";
errorMsg2 = "Missing atleast 1 number";
errorMsg3 = "Must be atleast 8 caracters";
const regExpCaps = new RegExp(/[A-Z]/);
const regExpDigs = new RegExp(/[0-9]/);

// Event listeners and validation functions

// First Name
firstName.addEventListener("pointerover", (event) => {
  if (firstName.value === "") {
    firstNameError.textContent = "Please enter your first name";
  }
});

firstName.addEventListener("focusout", (event) => {
  if (firstName.value === "") {
    firstName.classList.remove("valid");
    firstName.classList.add("invalid");
  } else {
    firstNameError.textContent = "";
    firstName.classList.remove("invalid");
    firstName.classList.add("valid");
  }
});

// Last Name
lastName.addEventListener("pointerover", (event) => {
  if (lastName.value === "") {
    lastNameError.textContent = "Please type your last name";
  }
});

lastName.addEventListener("focusout", (event) => {
  if (lastName.value === "") {
    lastName.classList.remove("valid");
    lastName.classList.add("invalid");
  } else {
    lastName.classList.remove("invalid");
    lastName.classList.add("valid");
    lastNameError.textContent = "";
  }
});

// Email
userEmail.addEventListener("pointerover", (event) => {
  if (userEmail.value === "") {
    userEmailError.textContent = "Please enter a valid emial address";
  }
});

userEmail.addEventListener("keyup", (event) => {
  if (userEmail.value != "" && userEmail.checkValidity()) {
    userEmail.classList.remove("hide-pseudo-invalid");
    userEmail.classList.remove("invalid");
    userEmail.classList.add("hide-pseudo-valid");
    userEmail.classList.add("valid");
    userEmailError.textContent = "";
  } else {
    userEmail.classList.remove("hide-pseudo-valid");
    userEmail.classList.remove("valid");
    userEmail.classList.add("hide-pseudo-invalid");
    userEmail.classList.add("invalid");
    userEmailError.textContent = "Please enter a valid emial address";
  }
});

// Telephone
userPhone.addEventListener("pointerover", (event) => {
  if (userPhone.value === "") {
    userPhoneError.textContent = "Please enter a 10-digit phone number";
  }
});

userPhone.addEventListener("keyup", (event) => {
  if (userPhone.value != "" && userPhone.checkValidity()) {
    userPhone.classList.remove("hide-pseudo-invalid");
    userPhone.classList.remove("invalid");
    userPhone.classList.add("hide-pseudo-valid");
    userPhone.classList.add("valid");
    userPhoneError.textContent = "";
  } else {
    userPhone.classList.remove("hide-pseudo-valid");
    userPhone.classList.remove("valid");
    userPhone.classList.add("hide-pseudo-invalid");
    userPhone.classList.add("invalid");
    if (userPhone.validity.patternMismatch) {
      userPhoneError.textContent = "Please enter in the format: 123-456-789";
    }
  }
});

// Password
// Populat initial error messages
pwd.addEventListener("pointerover", (event) => {
  if (pwd.value === "") {
    pwdErrorMsg1.textContent = errorMsg1;
    pwdErrorMsg2.textContent = errorMsg2;
    pwdErrorMsg3.textContent = errorMsg3;
  }
});

// Clear errors when conditions met. Re-populate when false
pwd.addEventListener("keyup", (event) => {
  console.log(pwd.checkValidity());
  if (pwd.value === "") {
    pwdErrorMsg1.textContent = errorMsg1;
    pwdErrorMsg2.textContent = errorMsg2;
    pwdErrorMsg3.textContent = errorMsg3;
  }

  if (pwd.value !== "") {
    pwd.classList.remove("hide-pseudo-valid");
    pwd.classList.remove("valid");
    pwd.classList.add("hide-pseudo-invalid");
    pwd.classList.add("invalid");
    if (regExpCaps.test(pwd.value)) {
      pwdErrorMsg1.textContent = "";
    } else {
      pwdErrorMsg1.textContent = errorMsg1;
    }

    if (regExpDigs.test(pwd.value)) {
      pwdErrorMsg2.textContent = "";
    } else {
      pwdErrorMsg2.textContent = errorMsg2;
    }

    if (pwd.value.length > 8) {
      pwdErrorMsg3.textContent = "";
    } else {
      pwdErrorMsg3.textContent = errorMsg3;
    }
  }

  if (
    pwd.value !== "" &&
    pwdErrorMsg1.textContent === "" &&
    pwdErrorMsg2.textContent === "" &&
    pwdErrorMsg3.textContent === ""
  ) {
    pwd.classList.remove("hide-pseudo-invalid");
    pwd.classList.remove("invalid");
    pwd.classList.add("hide-pseudo-valid");
    pwd.classList.add("valid");
  }
});

// Password Confirmation
pwdC.addEventListener("pointerover", (event) => {
  if (pwdC.value === "") {
    pwdCError.textContent = "Please confirm password";
  }
});

pwdC.addEventListener("keyup", (event) => {
  if (pwdC.value === "") {
    pwdCError.textContent = "Please confirm password";
  }

  if (pwdC.value !== "" && pwdC.value !== pwd.value) {
    pwdC.classList.remove("hide-pseudo-valid");
    pwdC.classList.remove("valid");
    pwdC.classList.add("hide-pseudo-invalid");
    pwdC.classList.add("invalid");
    pwdCError.textContent = "Ensure passwords are matching";
  }

  if (pwdC.value !== "" && pwdC.value === pwd.value) {
    pwdCError.textContent = "";
    pwdC.classList.remove("hide-pseudo-invalid");
    pwdC.classList.remove("invalid");
    pwdC.classList.add("hide-pseudo-valid");
    pwdC.classList.add("valid");
  }
});
