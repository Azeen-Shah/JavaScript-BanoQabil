// Q1
function q1() {
    ans1 = alert("Welcome to Our Website.");
}

// Q2
function q2() {
    prompt("Enter a Password");
    alert("Error! Please Enter a valid password.");
}

// Q3
function q3() {
    msg = ("Aslam o akeikum.\nMy name Azeen Shah.\nand i welcome to you my website.");
    alert(msg);
}

// Q4
function q4() {
    alert("Aslam o akeikum.");
    alert("My name Azeen Shah.");
    alert("and i welcome to you my website.");
}

// Q5&6
function q5() {
    alert("Done");
}

// Q7
function q7() {
    let username;
    alert("Done");
}

// Q8
function q8() {
    let myName = ("My full name is Azeen Shah.");
    alert(myName);
}

// Q9
function q9() {
    let email = ("Hello World.");
    alert(email);
}

// Q10
function q10() {
    let name = prompt("What is your Name?");
    let gen = prompt("What is your Gender?");
    let sub = prompt("What is your Course Subject?");
    let insti = prompt("What is your Institute Name");

    let data = `Student Name:${name}\nStudent Gender:${gen}\nStudent Subject:${sub}\nStudent Institute:${insti}`;

    alert(data);
}

// Q11
function q11() {
    let email = ("My Email is: shahazeen734@gmail.com");
    alert(email);
}

// Q12
function q12() {
    document.write("<br><br><br><br><br><br>Question number 12 has been DONE.<br><br><br><br><br><br><br><br><br><br><br><br>Reload page for Go Back.");
}

// Q13
function q13() {
    alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
}

// 14
function q14() {
    let age = 18;
    alert("My age is: " + age);
}

// 15
function q15() {
    let visits = 1;
    alert("You have visited this site " + visits + " times.");
}

// 16
function q16() {
    let year = 2005;
    alert("My Birth year is: " + year);
}

// 17
function q17() {
    let name = prompt("Aslam o aleikum Sir/Ma'am. Welcome to Our online Store. Apka Name kia hai?");
    let product = prompt(`Nice name ${name}. Apko kia producte Buy krni hai hamary Store se?`);
    let quantity = prompt(`Awesome. ${product} ka stock hamaray paas available hai. Kitni Quantity me Buy krna hai apko?`);

    alert(`Thanks ${name}. You ordered ${quantity} piece of ${product} from our online Store. Have a Nice day ${name}.`);
}


// 18
function q18() {
    var firstVar = 1,
        secondVar = "Hello",
        thirdVar = true;
    alert("Done");
}

// 19
function q19() {
    document.write("<br><br><br><br><br><br>Legal names of variables: var legalVar =;,   myVar =;,   _var =;,   $var =;,   camelCaseVar =;<br><br>Illegal names of variables: var 123var =;,   my-var =;,   %var =;,   space var =;,   typeof; <br><br><br><br><br><br>Reload page for Go Back.")
}

// 20
function q20() {
    document.write("<h1>Rules for naming JS variables</h1>");
    document.write("a) Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.<br>");
    document.write("b) Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.<br>");
    document.write("c) Variable names are case-sensitive.<br>");
    document.write("d) Variable names should not be JS keywords.<br><br><br><br><br><br>.) Reload page for Go Back.");
}

// 21
function q21() {
    let f1 = +prompt("Koi bhi Number likheen:");
    let f2 = +prompt(`Ab koi bhi dusra number likheen jo ap ${f1} me ADD krwana chahtay hn:`);

    let ans = f1 + f2;

    alert(`Ap k diye gay 2 numbers ki Addition ${ans} hai.`);
}

// 22
function q22() {
    let n1 = +prompt("Koi bhi Number likheen:");
    let n2 = +prompt(`Ab koi bhi dusra number likheen jo ap ${n1} me Calculation krwana chahtay hn:`);

    let add = n1 + n2;
    let sub = n1 - n2;
    let mul = n1 * n2;
    let div = n1 / n2;
    let mod = n1 % n2;

    alert(`Ap k diye gay 2 numbers ki Addition ${add} hai.\nAp k diye gay 2 numbers ki Subtraction ${sub} hai.\nAp k diye gay 2 numbers ki Multiplication ${mul} hai.\nAp k diye gay 2 numbers ki Divission ${div} hai.\nAp k diye gay 2 numbers ka Modulus ${mod} hai.\n`);
}

// 23
function q23() {
    let num;

    // a.
    document.write("Value after variable declaration is: " + num + "<br>");

    // b.
    num = 5;
    document.write("Initial value: " + num + "<br>");

    // c.
    num++;

    // d.
    document.write("Value after increment is: " + num + "<br>");

    // e.
    num += 7;

    // f.
    document.write("Value after addition is: " + num + "<br>");

    // g.
    num--;

    // h.
    document.write("Value after decrement is: " + num + "<br>");

    // i.
    let remainder = num % 3;

    // j.
    document.write("The remainder is : " + remainder + "<br><br><br><br><br>.) Reload page for Go Back.");
}

// 24
function q24() {
    let tic = 600;
    let quan = 5;

    let cost = tic * quan;

    alert(`Cost of ${quan} tickets is ${cost}.`);
}

// 25
function q25() {
    let num = +prompt("Koi bhi number likheen jiska ap table Generate krna chahtay hn:");

    for (let i = 1; i <= 10; i++) {
        document.write("<br>" + num + " x " + i + " = " + num * i);
    }
    document.write("<br><br><br><br>Reload page for Go Back.");
}