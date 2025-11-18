const phoneInput = document.getElementById("phoneNumber");
const passwordInput = document.getElementById("password");
const togglePassIcon = document.querySelector(".togglePass");
const button = document.querySelector("button");

// function to validate phone number input
function validatePhoneNumber() {
  const phoneValue = phoneInput.value.trim();
  if (phoneValue.length === 0) {
    return false;
  }
  if (
    phoneValue.length !== 11 ||
    !phoneValue.startsWith("01") ||
    isNaN(phoneValue) ||
    !["0", "1", "2", "5"].includes(phoneValue[2])
  ) {
    alert("رقم الهاتف غير صالح");
    return false;
  }
  phoneInput.style.borderColor = "hsla(169, 97%, 23%, 0.741)";
  return true;
}
phoneInput.addEventListener("blur", validatePhoneNumber);


//function to validate password input
function validatePassword(){
    const passwordValue = passwordInput.value.trim();
    if(passwordValue.length === 0){
        return false;
    }
    if (passwordValue.length < 8) {
        alert("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
        return false;
    }
    passwordInput.style.borderColor = "hsla(169, 97%, 23%, 0.741)";
    return true;
}
passwordInput.addEventListener("blur", validatePassword);


//function to toggle password visibility
togglePassIcon.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassIcon.src =
    type === "password" ? "./images/hide_pass.svg" : "./images/show_pass.svg";
});


// function to validate inputs on button click
button.addEventListener("click", function (event) {
  if (!validatePhoneNumber() || !validatePassword()) {
    event.preventDefault();
    phoneInput.style.borderColor = "#9b0000ff";
    passwordInput.style.borderColor = "#9b0000ff";

  }
});
