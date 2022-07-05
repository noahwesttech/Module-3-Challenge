// Assignment code here
function generatePassword() {
var pwdLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwdNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var pwdUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var pwdCharacter = ["~","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "}", "|"];
var possibleInput = [];

numberofCharacters = prompt("How many characters do you want in your password? Please choose between 8-128 characters.");
if (numberofCharacters < 8 || numberofCharacters > 128) {
  return "Please choose a valid number of characters.";
  } else if (isNaN(numberofCharacters)) {
    numberofCharacters = alert("Please enter a valid number.");
    }
  else {
    alert("Your password will be " + numberofCharacters + " characters long.");
      
  }
  hasLowercase = confirm("Do you want lowercase characters in your password?");
    if (hasLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }
  
  hasUppercase = confirm("Do you want uppercase characters in your password?");
    if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
    else {
    alert("Your password will NOT have uppercase characters.");
  }
  
  hasNumbers = confirm("Do you want to use numbers in your password?");
    if (hasNumbers) {
    alert("Your password will have numbers.");
  }
    else {
      alert("Your password will NOT have numbers.");
    }
  
    hasCharacter = confirm("Do you want special characters in your password?");
    if (hasCharacter) {
      alert("Your password will have special characters.");
    }
    else {
      alert("Your password will NOT have special characters.");
    }
  
    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasCharacter === false) {
      return "Please select at least one character type.";
    };
  
    // group selected characters
    if (hasNumbers) {
      possibleInput = possibleInput.concat(pwdNumber);
    }
    if (hasCharacter) {
      possibleInput = possibleInput.concat(pwdCharacter);
    }
    if (hasUppercase) {
      possibleInput = possibleInput.concat(pwdUppercase);
    }
    if (hasLowercase) {
      possibleInput = possibleInput.concat(pwdLowercase);
    }
        
  
    // pick random cards out of new pool for length of password
    let returnPassword = ""
    for (let i = 0; i < numberofCharacters; i++) {
      let rng =[Math.floor(Math.random() * possibleInput.length)];
      // or returnPassword += possibleInput[rng];
      returnPassword = returnPassword + possibleInput[rng];
    }
    return returnPassword;
}


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