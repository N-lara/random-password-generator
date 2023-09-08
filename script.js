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

  //function to ask what type of characters to use and verify at least 1 is chosen.
  
  function question(char) {
    var x = 0;
    do {
      ans = prompt("Would you like to use " + char + "? Please use lowercase y for yes or n for no?", "y or n");
      if (ans == "y") {
        x = 1;
      } else if (ans == "n") {
        x = 2;
      } else {
        x = 0;
      }
    } while (x == 0);
    return x;
  }

  do {
    alert("Please select y to at least one character type");
    upper = question("uppercase letters");
    lower = question("lowercase letters");
    numeric = question("numbers");
    special = question("special characters");
  } while (upper === 2 && lower === 2 && numeric === 2 && special === 2);

    //creates function to use info gathered with above functions as criteria to decide what types of characters are being used and how long for the password to be 
    //then randomly select characters from character bank strings verify that the character is one that is chosen by user and if it is then add the character to string password
    //and once it is equal to the length the user selected return that value
    function generatePassword() {
    var password = "";

    function randomBase(z) {
      var randomLetter = " ";
      var base = z;
      randomLetter = base[Math.floor(Math.random() * base.length)];
      console.log(randomLetter);
      return randomLetter;
    }

    do {
      console.log(password.length);
      var randomNum = Math.floor(Math.random() * 4);
      console.log(randomNum);
      if (randomNum == 0 && upper == 1) {
        password += randomBase("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      } else if (randomNum == 1 && lower == 1) {
        password += randomBase("abcdefghijklmnopqrstuvwxyz");
      } else if (randomNum == 2 && numeric == 1) {
        password += randomBase("0123456789");
      } else if (randomNum == 3 && special == 1) {
        password += randomBase("!$%&'()*+,-./:;<=>?@[\]^_`{|}~");
      }
      console.log(letters);
      console.log(password.length);
      console.log(Boolean(password.length < letters));
      console.log(password);
    } while (password.length < letters);

    return password;
  }

  //sets password = function generatepassword() and then puts the value of password into the text area of the html document
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button so that when button is clicked call function writePassword
generateBtn.addEventListener("click", writePassword);
