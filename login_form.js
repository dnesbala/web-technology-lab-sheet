// 4. Create a client side script to check the username and password for the login form from q.no.2

const userNameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const userNameValidation = document.getElementById("username-validation");
const passwordValidation = document.getElementById("password-validation");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  validateLength(userNameField, userNameValidation);
  validateLength(passwordField, passwordValidation);
});

function validateLength(field, validationMsg) {
  if (field.value == "") {
    var fieldName = "";
    if (field == userNameField) fieldName = "Username";
    else fieldName = "Password";
    displayErrorMessage(field, validationMsg, fieldName + " is required.");
  } else if (field == userNameField && field.value.length <= 3)
    displayErrorMessage(
      field,
      validationMsg,
      "Username should be greater than 3 characters"
    );
  else if (field == passwordField && passwordField.value.length <= 7)
    displayErrorMessage(
      field,
      validationMsg,
      "Password should be 7 to 100 characters long."
    );
  else if (field == passwordField && passwordField.value.length > 7) {
    // To check a password between 7 to 100 characters which contain at least one numeric digit and a special character
    const pwRegex = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,100}$/;
    if (!passwordField.value.match(pwRegex))
      displayErrorMessage(
        field,
        validationMsg,
        "Password must include a speical character and a number"
      );
    else displaySuccess(field, validationMsg);
  } else displaySuccess(field, validationMsg);
}

function displayErrorMessage(field, validationMsg, errorMsg) {
  field.className = "error";
  validationMsg.style.display = "inline";
  validationMsg.innerText = errorMsg;
}

function displaySuccess(field, validationMsg) {
  field.className = "success";
  validationMsg.style.display = "none";
}
