// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var specialCharacters = "~`!@#$%^&*()-_=+\|]}[{';:?/>.<,";

// var options = {
//   lowerCase: abcdefghijklmnopqrstuvwxyz,
//   upperCase: ABCDEFGHIJKLMNOPQRSTUVWXYZ,
//   numbers: 0123456789,
//   specialCharacters: ~`!@#$%^&*()-_=+\|]}[{';:?/>.<,;
// };

function generatePassword() {
  // console.log("clicked")
  var userInput = window.prompt("How many characters would you like your password to be?");

  // console.log("userInput")

  var passwordLength = (userInput);

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be greater than 8 characters and less than 128 characters.")
    return
  }

  var useLowerCase = window.confirm("Do you want to use lowercase letters?")
  var useUpperCase = window.confirm("Do you want to use uppercase letters?")
  var useNumbers = window.confirm("Do you want to use numbers?")
  var useSpecialCharacters = window.confirm("Do you want to use special characters?")


};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
