function ageCalculator(currentYear,birthYear){
    return (currentYear - birthYear);

}
var age1 = ageCalculator(2020,1992);
var age2 = ageCalculator(2020,1992)+1;

console.log("you are either " + age1 + " or " + age2 );