function validateForm(){
    // only need to check the password since the email has all the information already
    var password = document.getElementById("signupPassword").value

    if(isValidPassword(password)){
        document.getElementById("errorMessage").innerHTML = ""
        return true;
    }
    else{
        document.getElementById("errorMessage").innerHTML = "Please ensure that your password has atleast 1 letter 1 number and 1 special char"
        return false;
    }
}
function isValidPassword(password) {
    // Check for at least one letter, one number, and one special character
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
  
    return regex.test(password);
  }