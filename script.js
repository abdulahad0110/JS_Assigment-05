// Task 1
document.write("<h1>Task 1 & Task 2</h1>")
var num1 = 3, num2 = 2;
document.write(`Sum of ${num1} and ${num2} is : ${num1 + num2}<br  />`);

// Task 2
document.write(`Subtraction of ${num1} and ${num2} is : ${num1 - num2}<br  />`);
document.write(`Multiplication of ${num1} and ${num2} is : ${num1 / num2}<br  />`);
document.write(`Division of ${num1} and ${num2} is : ${num1 * num2}<br  />`);



// Task 3
document.write("<h1>Task 3</h1><br  />");
var nos;
document.write("Value after variable declaration is undefined.");
nos = 5;
document.write("<br  />Initial Value: " + nos);
nos++;
document.write("<br  />Value After Increment is : " + nos);
nos += 7;
document.write("<br  />Value After Addition is : " + nos);
nos--;
document.write("<br  />Value After Decrement is : " + nos);
nos %= 3;
document.write("<br  />The Reminder is : " + nos);


// Task 4
document.write("<h1>Task 4</h1><br  />");

var ticketPrices = 500;
var buyingTicket = 7;

document.write(`Total Cost to buy ${buyingTicket} tickets to a movie is ${buyingTicket * ticketPrices}PKR`)


// Task 5
document.write("<h1>Task 5</h1><br  />");
var i;
var tableNum = 4;
for (i = 1; i <= 10; i++) {
    document.write(`${tableNum} * ${i} = ${tableNum * 4} <br  />`)
}


// Task 6
document.write("<h1>Task 6</h1><br  />");

celsiusTemp = 25;
fahrenheitTemp = 98;

celsius = (fahrenheitTemp - 32) * 5 / 9;
fahrenheit = (celsiusTemp * 9 / 5) + 32;

document.write(`${fahrenheitTemp} °F convert into Celsius is ${celsius.toFixed(2)}°C  <br  />`);
document.write(`${celsiusTemp} °C convert into Fahrenheit is ${fahrenheit.toFixed(2)}°F <br  />`);


// Task 7
document.write("<h1>Task 7</h1>");

document.write("<h1>Shopping Cart</h1><br  />");

var item1Price = 650;
var item1Quatity = 3;

var item2Price = 100;
var item2Quatity = 2;

var shipCharges = 100;

var totalCost = (item1Price * item1Quatity) + (item2Price * item2Quatity) + shipCharges;

document.write(`Total cost of your order is ${totalCost}`);


// Task 8
document.write("<h1>Task 8</h1>");

document.write("<h1>Mark Sheet</h1><br  />");

var totalMarks = 980;
var obtainedMarks = 840;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total Marks is: ", totalMarks);
document.write("<br  />Obtained Marks is: ", obtainedMarks);

document.write("<br  />Percentage is: ", percentage.toFixed(2));


// Task 9
document.write("<h1>Task 9</h1>");

document.write("<h1>Currency in PKR</h1><br  />");

var dollarConvert = 25;
var dollarRate = 279;

var riyalConvert = 10;
var riyalRate = 74;

var totalCurrency = (dollarConvert * dollarRate) + (riyalConvert * riyalRate);
document.write(`We have <b>${dollarConvert}</b> Dollar`);
document.write(`<br  />We have <b>${riyalConvert}</b> Riyal`);

document.write("<br  />Total Currency in PKR : <b>" + totalCurrency + '</b>');



// Task 10
document.write("<h1>Task 10</h1>");

userNumber = +50;

performOperation = (((userNumber + 5) * 10) / 2);

document.write("<br  />Perform all calculations after result is : <b>" + performOperation + '</b>');


// Task 11
document.write("<h1>Task 11</h1>");

document.write("<h1>Age Calculator</h1><br  />");

currentYear = 2024;
brithYear = 2003;

yourAge = currentYear - brithYear;

document.write("Current Year is : <b>" + currentYear + '</b> <br  />')
document.write("Brith Year is : <b>" + brithYear + '</b> <br  />')
document.write("Your Age is : <b>" + yourAge + '</b> <br  />')


// Task 12
document.write("<h1>Task 12</h1>");

document.write("<h1>The Geometrizer</h1><br  />");

var radius = 20;
var circumference = 2 * 3.142 * radius;
var areaCricle = 3.142 * (radius * radius);

document.write("Radius of Circle is : <b>" + radius + '</b> <br  />')
document.write("Circumference of Circle is : <b>" + circumference.toFixed(2) + '</b> <br  />')
document.write("Area of Circle is : <b>" + areaCricle.toFixed(2) + '</b> <br  />')


// Task 13
document.write("<h1>Task 13</h1>");

document.write("<h1>The Lifetime Supply Calculator</h1><br  />");

var currentAge = 15;
var estimatedAge = 65;
var snackPerDay = 3;

document.write("Favorite snack: chocolate Chips <br  />");
document.write("Current Age is : <b>" + currentAge + "</b> <br  />");
document.write("Estimaed Age is : <b>" + estimatedAge + "</b> <br  />");
document.write("Ammount of snack per day is : <b>" + snackPerDay + "</b> <br  />");

document.write(`You will need <b>${(estimatedAge - currentAge) * snackPerDay}</b> to last you until the ripe old age of <b>${estimatedAge}</b>.`)
