// Q1
function q1() {
    let number = +prompt("Enter a number:");
    document.write("Number entered by you: " + number + "<br>");


    let square = number * number;
    let cube = number * number * number;
    let squareRoot = Math.sqrt(number);


    document.write("Square: " + square + "<br>");
    document.write("Cube: " + cube + "<br>");
    document.write("Square Root: " + squareRoot + "<br><br><br><br><br><br>Reload for Go back.");
}

// Q2
function q2() {
    let a = 2;
    let b = 1;
    let result = --a - --b + ++b + b--;

    document.write("<h1>Initializing Variables:</h1>let a = 2;<br>let b = 1;<br>let result = --a - --b + ++b + b--;")

    document.write("<h1>Explanation:</h1>");
    document.write(`--a = a becomes 1<br>`);
    document.write(`--a - --b = a becomes 0, b becomes 0, result = 0 - 0 = 0<br>`);
    document.write(`--a - --b + ++b = a becomes -1, b becomes 1, result = 0 - 0 + 1 = 1<br>`);
    document.write(`--a - --b + ++b + b-- = a becomes -2, b becomes 0, result = 0 - 0 + 1 + 1 = 2<br>`);

    document.write("<h1>Final values:</h1>")
    document.write("a = -2<br>b = 0<br>result = 2<br><br><br><br>Reload for Go back.")
}


// Q3
function q3() {
    let name = prompt("What is your name Dear?");
    alert(`Welcome to my website dear ${name}.`);
}

// Q4
function q4() {
    let num = +prompt("Koi bhi Number likheen jiska ap table Generate krna chahtay hn:");

    for (let i = 1; i <= 10; i++) {
        document.write(`<br>${num} x  ${i} = ${num * i}`);
    }

    document.write(`<br><br><br><br><br>Reload for Go back.`);
}

// Q5
function q5() {
    // Take input from the user
    let subject1 = prompt("Enter first subject name:");
    let subject2 = prompt("Enter second subject name:");
    let subject3 = prompt("Enter third subject name:");

    let totalMarksPerSubject = 100;

    // Take obtained marks for each subject
    let obtainedMarksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
    let obtainedMarksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
    let obtainedMarksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

    // Calculate total marks and percentage
    let totalMarks = totalMarksPerSubject * 3;
    let totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
    let percentage = (totalObtainedMarks / totalMarks) * 100;

    // Display the result in a table
    document.write("<h2>Result</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
    document.write("</table>");
    document.write("<p>Total Marks: " + totalMarks + "</p>");
    document.write("<p>Obtained Marks: " + totalObtainedMarks + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p> <br><br><br><br><br>Reload for Go back.");
}