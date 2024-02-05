// Q1
function q1() {
    let city = prompt("Enter your City name:");

    if (city.toLowerCase() == "karachi") {
        alert("Welcome to City of Ligths.");
    } else if (city.toLowerCase() == "lahore" || city.toLowerCase() == "lahor") {
        alert("Lahor da pawa akhtar lawa.");
    } else {
        alert(`Welcome to ${city}.`);
    }
}

// Q2
function q2() {
    let gen = prompt("What is your Gender Dear?");

    if (gen.toLowerCase() == "male") {
        alert("Good morning Sir.");
    } else if (gen.toLowerCase() == "female") {
        alert("Good morning Ma'am.");
    } else {
        alert("Please confirm your Gender.");
    }
}

// Q3
function q3() {
    let feul = +prompt("How much fuel you have (in litres)?");

    if (feul <= 2.5) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Ok. But please check and refill the fuel time to time.");
    }
}

// Q4
function q4() {
    // a.
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }

    // b.
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }

    // c.
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

    // d.
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

    // e.
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }

    // f.
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

// Q5
function q5() {
    let guess = +prompt("Welcome to Guess Game. Guess a number Between 0 to 10.");
    let num = 7;

    if (num == guess) {
        alert("“Bingo! Correct answer”");
    } else {
        alert("Sorry! Wrong answer. try again.");
    }
}

// Q6
function q6() {
    let num = +prompt("Koi bhi number likheen jo ap check krna chahtay hn ke ye 3 se divide ho skta hai ya nhi:");

    if (num % 3 == 0) {
        alert(`YES! ${num} is multiple of 3.`);
    } else {
        alert(`NO! ${num} is not multiple of 3.`)
    }
}

// Q7
function q7() {
    let num = +prompt("Koi bhi number likheen jo ap check krna chahtay hn ke ye EVEN number hai ya ODD number hai:");

    if (num % 2 == 0) {
        alert(`${num} is EVEN number.`);
    } else {
        alert(`${num} is ODD number.`)
    }
}

// Q8
function q8() {
    let temp = +prompt("How many degrees temperature is today?");

    if (temp >= 40) {
        alert("It is too hot outside.");
    } else if (temp >= 30) {
        alert("The Weather today is Normal.");
    } else if (temp >= 20) {
        alert("Today’s Weather is cool.");
    } else if (temp >= 10) {
        alert("OMG! Today’s weather is so Cool.");
    }
}

// Q9
function q9() {
    let cal1 = +prompt("Apna koi first number likheen jo ap calculate krwana chahtay hn:");
    let opp = prompt("Apna koi Operator select kree: (+ , - , / , * , %)");
    let cal2 = +prompt("Apna koi Second number likheen jo ap calculate krwana chahtay hn:");

    if (opp == "+") {
        alert(`${cal1} + ${cal2} = ${cal1 + cal2}`);
    }
    if (opp == "-") {
        alert(`${cal1} - ${cal2} = ${cal1 - cal2}`);
    }
    if (opp == "/") {
        alert(`${cal1} / ${cal2} = ${cal1 / cal2}`);
    }
    if (opp == "*") {
        alert(`${cal1} x ${cal2} = ${cal1 * cal2}`);
    }
    if (opp == "%") {
        alert(`${cal1} % ${cal2} = ${cal1 % cal2}`);
    }
}