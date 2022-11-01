// Assignment code here

// arrays I need for computer to have options to generate a password
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","{","]","}","|",":",";","'","/","?",".",">",",","<"];

// empty array to pass options
var compOptions = [];


// function to generate a password
function generatePassword() {
  
  // prompt on how many characters you would like to use for password
  var userInput = window.prompt("How many characters would you like your password to be?");

  // variable for length of password
  var passwordLength = (userInput);

  // password length if statement
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be greater than 8 characters and less than 128 characters.")
    return
  }

  // varaibles for window confirm
  var useLowerCase = window.confirm("Do you want to use lowercase letters?")
  var useUpperCase = window.confirm("Do you want to use uppercase letters?")
  var useNumbers = window.confirm("Do you want to use numbers?")
  var useSpecialCharacters = window.confirm("Do you want to use special characters?")
  
  // if statments to push variables
  if (useLowerCase === true) {
    compOptions.push(lowerCase)
  };
  
  if (useUpperCase === true) {
    compOptions.push(upperCase)
  };
  
  if (useNumbers === true) {
    compOptions.push(numbers)
  };
  
  if (useSpecialCharacters === true) {
    compOptions.push(specialCharacters)
  };
  
  
  // var index = Math.floor(Math.random() * options.length);
  // var writePassword = options[index];

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
