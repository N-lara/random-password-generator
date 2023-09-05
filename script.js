// Assignment Code -- makes generate button a button to js
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //the password we need to generate var password = function generatepassword()? need to create?
  var password = generatePassword();
  //selects text area in html doc and brings it into the js document
  var passwordText = document.querySelector("#password");
  //changes value of text area in html doc to value of password.
  passwordText.value = password;

  //todo create function to store password desired length 8>X>128
  function length(){

  }


//todo create function to ask what characters to use and make sure at least 1 is chosen. A a 1 & 
function upper(){
  var 
}
function lower(){}
function numeric(){}
function special(){}

function characters(){

}

//todo write function to use info in length and characters to make a random password
  function generatePassword(){
    var x = "hello world";
    return x;
  }

}


// Add event listener to generate button
//when button is clicked call function writePassword
generateBtn.addEventListener("click", writePassword);




//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page