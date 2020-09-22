function crystalGazer(job, location, partner, chidren) {
    var job = prompt("insert Job Title ");
    var location = prompt("insert  geographical location ");
    var partner = prompt("insert Partner's name ");
    var children = prompt("insert number of children");
    console.log("You will be a " + job + " in " + location + " and married to " + partner + " with " + children);
    document.write("You will be a " + job + " in " + location + " and married to " + partner + " with " + children);
}
crystalGazer();