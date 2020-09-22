
function ageCalculator(currentYear,birthYear){
    return (currentYear - birthYear);
}
var date = new Date();
var age1 = ageCalculator(date.getFullYear(),1992);
var age2 = ageCalculator(date.getFullYear(),1992)+1;

console.log("you are either " + age1 + " or " + age2 );