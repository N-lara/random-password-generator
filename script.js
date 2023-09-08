// Assignment Code -- makes generate button a button to js
var generateBtn = document.querySelector("#generate");

// big function to get value for var password
function writePassword() {
  //function to prompt password desired length and verify that it meets 8>X>128 and store the answer into var letters
  function askLetters() {
    var ans = 0;
    do {
      ans = Number(
        prompt(
          "How many characters would you like your password to be? min 8 max 128"
        )
      );
    } while (ans > 128 || ans < 8 || Number.isInteger(ans) == false);
    console.log(ans);
    return ans;
  }
  var letters = askLetters();


  //sets password = function generatepassword() and then puts the value of password into the text area of the html document
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button so that when button is clicked call function writePassword
generateBtn.addEventListener("click", writePassword);
