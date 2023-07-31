const {validatePassword} = require("../validateUserPassword")
test("that validateUserPassword returns true when the required password is passed", ()=>{
    let checkPassword = "Am>!und2";
expect(validatePassword(checkPassword)).toBe(true)
})
test("that validatePassword returns false when the passworf passed does not match the reqirement", ()=>{
    let check = "263nnnM";
    expect(validatePassword(check)).toBe(false)
})