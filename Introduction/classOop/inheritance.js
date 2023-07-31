//  Contructor Function INheritance
function Human(feet, hands, mouth){
    this.feet = feet;
    this.hands = hands;
    this.mouth = mouth;

    this.aboutMe = () => {
        return `I have ${this.feet} feet, ${this.hands} hands and  ${mouth} mouth`;
    };
}

function Human1(feet, hands, mounth, designation){
    Human.call(this,feet,hands,mounth);
    this.designation = designation;
}

let employee = new Human1("two", "two", "one", "manage");
console.log(employee.aboutMe())