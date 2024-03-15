let cardNumber = document.querySelector("#cardNum");
let nameOfHolder = document.querySelector("#holderName");
let expirationMonth = document.querySelector("#monthValid");
let expirationYear = document.querySelector("#yearValid");
let securityNumber = document.querySelector("#securityNumber");
let holderName = document.querySelector("#ownerName");
let userCardNumber = document.querySelector("#userNum");
let cardMonth = document.querySelector("#month");
let cardYear = document.querySelector("#year");
let cardCvv = document.querySelector("#cvv");
let btn = document.querySelector("#cnfbtn");
let nameErr = document.querySelector("#nameError");
let numberError = document.querySelector("#numError");
let calendarError = document.querySelector("#caleError");
let securityError = document.querySelector("#secError");
let paymentPage = document.querySelector("#paymentForm");

var numberPattern = IMask(userCardNumber, {
  mask: "**** **** **** ****",
});

holderName.addEventListener("keyup", () => {
  nameOfHolder.innerHTML = holderName.value.toUpperCase().trim();
});

userCardNumber.addEventListener("keyup", () => {
  cardNumber.innerHTML = userCardNumber.value;
});

cardMonth.addEventListener("keyup", () => {
  expirationMonth.innerHTML = cardMonth.value;
});

cardYear.addEventListener("keyup", () => {
  expirationYear.innerHTML = cardYear.value;
});

cardCvv.addEventListener("keyup", () => {
  securityNumber.innerHTML = cardCvv.value;
});

paymentPage.addEventListener("submit", (e) => {
  e.preventDefault();

  const textPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;

  if (holderName.value === "") {
    nameErr.innerHTML = `Can't be blank`;
    holderName.classList.add("input_error");
  } else if (!textPattern.test(holderName.value)) {
    nameErr.innerHTML = `Wrong format, text only`;
    holderName.classList.add("input_error");
  } else {
    nameErr.innerHTML = null;
    // holderName.classList.remove("input_error");
  }

  const numPattern = /^([0-9 ])*$/;

  if (userCardNumber.value === ``) {
    numberError.innerHTML = `Can't be blank`;
    userCardNumber.classList.add("input_error");
  } else if (!numPattern.test(userCardNumber.value)) {
    numberError.innerHTML = `Wrong format, numbers only`;
    userCardNumber.classList.add("input_error");
  } else {
    numberError.innerHTML = null;
    userCardNumber.classList.remove("input_error");
  }

  if (cardMonth.value === "") {
    calendarError.innerHTML = `Can't be blank`;
    cardMonth.classList.add("input_error");
  } else {
    calendarError.innerHTML = null;
    cardMonth.classList.remove("input_error");
  }

  if (cardYear.value === "") {
    cardYear.classList.add("input_error");
  } else {
    cardYear.classList.remove("input_error");
  }

  if (cardCvv.value === "") {
    securityError.innerHTML = `Can't be blank`;
    cardCvv.classList.add("input_error");
  } else {
    securityError.innerHTML = null;
    cardCvv.classList.remove("input_error");
  }
});
