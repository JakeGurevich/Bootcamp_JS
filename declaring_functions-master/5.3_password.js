// Create a simple password validation function that takes a
// password string as an argument.
// If the passwords length is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1) Create a function that uses a if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”.
// If the password length in only 7 characters long return
// “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression
function passwordIfValidation(pass){
    if (pass.length <7){
        return 'Strong';
    } else {return 'Weak'};
}

function passwordTernaryValidation(pass){
  return  pass.length > 7 ?  'Strong':  'Weak';
}


function passwordLogicValidation(pass){
   return (pass.length <7 &&  'Strong')||'Weak';
     
    
}
function passwordAdvancedValidation(pass){
    return (pass.length <7 && /[A-Z]/test(pass) ? 'Very Strong':pass.length <7 ?'Strong':'Weak');

}
