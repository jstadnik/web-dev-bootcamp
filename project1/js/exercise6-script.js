var ret = ""
var n = -10

console.log("Part 1")
while (n <= 19) {
    console.log(n);
    ret += n + ", ";
    n++;
}
alert("The answer to Pt 1 is: " + ret);

ret = ""
n = 10

console.log("Part 2")
while (n <= 40) {
    if (n % 2 === 0) {
        console.log(n);
        ret += n + ", ";
    }
    n++;
}
alert("The answer to Pt 2 is: " + ret);

ret = ""
n = 300

console.log("Part 3")
while (n <= 333) {
    if (n % 2 === 1) {
        console.log(n);
        ret += n + ", ";
    }
    n++;
}
alert("The answer to Pt 3 is: " + ret);


ret = ""
n = 5

console.log("Part 4")
while (n <= 50) {
    if ((n % 3 === 0) && (n % 5 === 0)) {
        console.log(n);
        ret += n + ", ";
    }
    n++;
}
alert("The answer to Pt 2 is: " + ret);
