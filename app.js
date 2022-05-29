var head = document.getElementByClass("card");
var text = document.createTextNode("TEAM DEMETER");
head.appendChild(text);

document.getElementByClass("card").style.color = "whitesmoke";
document.getElementByClass("caption").style.color = "white";

const teamMates = ["Jaybee", "Chidinma", "Spaghettiii", "Smartlify", "Danny", "I_Am_DanielIkpe"];
console.log(teamMates[2]);

const aboutMe = {
    "First name": "Chidinma",
    "Last name": "Udo",
    "Best movie": "Beowulf",
    "Best food": "Pasta",
    "Complexion": "Brown",
    "State": "Anambra",
    "Group name": "TEAM DEMETER"
};

console.log(aboutMe["Best movie"]);

var noun = " Levi ";
var verb = " eats ";
var adjective = " quietly ";
const firstSentence = noun + "talks" + adjective + ".";
const secondSentence = noun + verb + " daily.";
const thirdSentence = "Jonah" + verb + "pasta" + adjective + "with" + noun +".";
const fourthSentence = "Jonah" + " and" + noun + "are" + "eating" + adjective + ".";
const fifthSentence = noun + verb + "like a glutton.";

console.log(firstSentence);
console.log(secondSentence);
console.log(thirdSentence);
console.log(fourthSentence);
console.log(fifthSentence);

function remainder(a,b) {
    return a%b;
}

console.log(remainder(101,3));

function almightyQuadraticFormula(a,b,c){
    var discriminant = Math.pow(b,2)- 4 * a*c;
    let rootOne = (-1* b + Math.sqrt(discriminant)) / 2 * a ;
    let rootTwo = (-1* b - Math.sqrt(discriminant)) / 2 * a ;

    let answer = "The roots are " + rootOne + " and " + rootTwo + ".";
    return answer;
}
console.log(almightyQuadraticFormula(2,-3,1));

const myNoun = " dog ";
const myAdjective = " big ";
const myVerb = " ran ";
const myAdverb = " quickly ";
 
const wordBlanks = "The" + myAdjective + myNoun + myAdverb + myVerb + "to its master.";
console.log(wordBlanks); 

const pi = 3.142;
function area(pi, r) {
    return pi * r * r;
}
console.log(area(pi,9));

var p = 8200;
var r = 17.5;
var t = 2.5;
console.log(p*r*t/100);

var meritWeight = 78;
var meritHeight = 1.69;
var nutjobWeight = 92;
var nutjobHeight = 1.95;
let meritBmi = meritWeight /(meritHeight * meritHeight);
let nutjobBmi = nutjobWeight /(nutjobHeight * nutjobHeight);
console.log(meritBmi);
console.log(nutjobBmi);


var meritWeight2 = 85;
var meritHeight2 = 1.76;
var nutjobWeight2 = 95;
var nutjobHeight2 = 1.88;
let meritBmi2 = meritWeight2 /(meritHeight2 * meritHeight2);
let nutjobBmi2 = nutjobWeight2 /(nutjobHeight2 * nutjobHeight2);
console.log(meritBmi2);
console.log(nutjobBmi2);

let nutjobLowerBmi = nutjobBmi2 < meritBmi2;
console.log(nutjobLowerBmi);

let meritHeigherBmi = meritBmi > nutjobBmi;
console.log(meritHeigherBmi);

