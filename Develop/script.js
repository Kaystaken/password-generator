// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// floor takes off a decimal point and fractional, leaving you with a whole number 
function generatePassword() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var valid = false;
  var length = "";

  while (!valid) {
    length = prompt("How long do you want your password?");
    length = parseInt(length, 10);
    //parseInt has its own return and is its own function
    valid = !(length <= 8 || length >= 128 || Number.isNaN(length));
    if (!valid) {
      alert("Please choose a length of at least 8 characters and no more than 128 characters");
    }
  }

  var password = "";
  //++ increase by 1 "increment operator"
  for (var count = 0; count < length; count++) {
    var character = characters.charAt(Math.floor(Math.random() * characters.length));
    password += character;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
