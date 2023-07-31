function validatePassword(password){
      let  regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.{6,})(?=.*[!@#$%^&*?<>:"||])/
    if(regex.test(password)){
        return true;
    }
    return false;
}

// var pass = "maRiam@8";
// console.log(validatePassword(pass))
// console.log(new Date())
module.exports = {validatePassword}