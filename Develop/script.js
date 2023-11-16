// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var numericCharacters = '0123456789';
  var specialCharacters = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  var valid = false;
  var length = "";

  while (!valid) {
    //prompt instructs the browser to display my message prompting the user to input some text
    length = prompt("How long do you want your password?");
    //parseInt has its own return and is its own function
    length = parseInt(length, 10);
    valid = !(length < 8 || length > 128 || Number.isNaN(length));
    if (!valid) {
      //length chosen to meet acceptance critera
      alert("Please choose a length of at least 8 characters and no more than 128 characters");
    }
  }
  //confirm displays my questions to user asking if they'd like to include each character type
  var includeLowerCase = confirm("Would you like to include lowercase characters?");
  var includeUpperCase = confirm("Would you like to include uppercase characters?");
  var includeNumeric = confirm("Would you like to include numeric characters?");
  var includeSpecial = confirm("Would you like to include special characters?");

  // if no character is selected user is alerted that they must choose at least 1
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("Password can't be generated please include at least 1 character type"); 
    return ""; 
  }

  var characters = "";
  if (includeLowerCase) {
    characters += lowerCaseCharacters;
  }
  if (includeUpperCase) {
    characters += upperCaseCharacters;
  }
  if (includeNumeric) {
    characters += numericCharacters;
  }
  if (includeSpecial) {
    characters += specialCharacters;
  }

  var password = "";
  //++ increase by 1 "increment operator"
  for (var count = 0; count < length; count++) {
    // floor takes off a decimal point and fractional, leaving you with a whole number 
    var character = characters.charAt(Math.floor(Math.random() * characters.length));
    password += character;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
