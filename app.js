console.log('hi');

let moment = require('moment');
let chalk = require('chalk');

console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");

console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year.");

console.log("It is " + chalk.cyan((moment().get('hour') * 60 * 60 + moment().get('minute') * 60 + moment().get('second'))) + " seconds into the day.");

let dLS;
if (moment().isDST() === true)
dLS = "is";
else dLS = "isn\'t";

console.log("It " + chalk.green(dLS) + " during Daylight Savings Time.");

let leapYear;

 if (moment().isLeapYear() === true)
 leapYear = "is";
 else leapYear = "isn\'t";

console.log("It " + chalk.red(leapYear) + " a leap year.")
