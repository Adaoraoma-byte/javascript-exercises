"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Mandelas Hair Shop";
const openingHour = "9:00AM";
const closingHour = "4:00PM";
const welcomeGreeting = `Welcome to ${shopName}, open from ${openingHour} to ${closingHour}`;
console.log(welcomeGreeting);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
console.log(
  messy
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) => w.trim())
    .join(" ")
    .replace("Maison", "Martini")
    .toUpperCase(),
);
// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";
console.log(product.length);
console.log(product.indexOf("whole grain"));
console.log(
  product.slice(
    product.indexOf("whole grain"),
    product.indexOf("whole grain") + "whole grain".length,
  ),
);

console.log(flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
const finalPrice = netPrice * (1 + taxRate);
console.log(`Final price: ${finalPrice.toFixed(2)}`);

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);

const biggerNumber = Math.floor(Math.random() * 14) + 14;
console.log(biggerNumber);
// Multiplying by 14 creates values from 0 to 13, and adding 14 changes the range to 10-20

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const word = "Hello";
console.log(word.repeat(3));
// String.repeat() repeats a string the specified number of times.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
// Username generator
const firstName = "Adaora";
const lastName = "Chris";

const username = firstName[0].toLowerCase() + lastName.toLowerCase();
console.log(username);

// Mad-libs story
const adjective = "lovely";
const noun = "daughter";
const verb = "cooked";
const place = "kitchen";

console.log(
  `The ${adjective} ${noun} ${verb} in the ${place} while everyone slept.`,
);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
