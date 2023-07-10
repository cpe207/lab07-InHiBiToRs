const FirstNameInput = document.querySelector("#first-name-input");
const LastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const SubmitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

FirstNameInput.onkeyup = () => {
  FirstNameInput.classList.remove("is-invalid");
  FirstNameInput.classList.remove("is-valid");
};
LastNameInput.onkeyup = () => {
  LastNameInput.classList.remove("is-invalid");
  LastNameInput.classList.remove("is-valid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-invalid");
  EmailInput.classList.remove("is-valid");
};
PasswordInput.onkeyup = () => {
  PasswordInput.classList.remove("is-invalid");
  PasswordInput.classList.remove("is-valid");
};

SubmitBtn.onclick = () => {
  let isFirstName = false;
  let isLastName = false;
  let isEmail = false;
  let isPasswordInput = false;
  if (FirstNameInput.value === "") {
    FirstNameInput.classList.add("is-invalid");
  } else {
    FirstNameInput.classList.add("is-valid");
    isFirstName = true;
  }
  if (LastNameInput.value === "") {
    LastNameInput.classList.add("is-invalid");
  } else {
    LastNameInput.classList.add("is-valid");
    isLastName = true;
  }

  if (validateEmail(EmailInput.value) === true) {
    EmailInput.classList.add("is-valid");
    isEmail = true;
  } else {
    EmailInput.classList.add("is-invalid");
  }
  if (PasswordInput.value.length >= 6) {
    PasswordInput.classList.add("is-valid");
    isPasswordInput = true;
  } else {
    PasswordInput.classList.add("is-invalid");
  }

  if (isFirstName && isLastName && isEmail && isPasswordInput) {
    alert("Registered successfully");
  }
};
