class Account{
    constructor(name, phoneNumber, bvm){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.bvm;
        var accountNumber = "";
    }
    set name(newName){
    this.name = newName;
    }
    get name(){
        return this.name;
    }
    generateAccount(aa){
     this.accountNumber = Number(aa.slice(-1) -1 )
     return this.accountNumber;
    }
    static printName(){
        console.log("I am beautifullll ")
    }

}

module.exports = {Account};