// function ageCalculator(currentYear,birthYear){
//     return (currentYear - birthYear);

// }
// var age1 = ageCalculator(2020,1992);
// var age2 = ageCalculator(2020,1992)+1;

// console.log("you are either " + age1 + " or " + age2 );




//Advance 1

function timeCovert (n) {
    var num = n;
    var hours = Math.floor (num / 60);
    //var rhours = Math.floor(hours);
    var minutes = Math.floor(num % 60) ;
    //var rminutes = Math.round(minutes);
    return num + " minutes = " + hours + " hour(s) and " + minutes + " minute(s).";

}

console.log(timeCovert(200));