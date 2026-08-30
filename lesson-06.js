"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menuItems = ["Burger", "Pizza", "Pasta", "Salad", "Tacos"];

console.log(menuItems);
console.log(menuItems[0]);
console.log(menuItems[menuItems.length - 1]);
console.log(menuItems.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
menuItems.push("Soup"); // push adds to the end of the array
console.log(menuItems);

menuItems.unshift("Fries"); // unshift adds to the beginning of the array
console.log(menuItems);

menuItems.pop(); // pop removes from the end of the array
console.log(menuItems);

menuItems.shift(); // shift removes from the beginning of the array
console.log(menuItems);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

// Use a counting for loop when you need the index.
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
}
// Use for...of when you only need each item.
for (const item of menuItems) {
  console.log(item);
}

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

// Map, Filter, and Find

const prices = [4.5, 12, 3.2, 8];
const displayPrices = prices.map((price) => `€${price.toFixed(2)}`);
console.log(displayPrices);

const pricesUnderFive = prices.filter((price) => price < 5);
console.log(pricesUnderFive);

const firstOverTen = prices.find((price) => price > 10);
console.log(firstOverTen);

// forEach would return undefined instead of a new array or found value,
// which is the well-known trap when you expect it to transform or find data.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

// Loop the provided artists

const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

artists.push("Chairman Lucas");

for (const artist of artists) {
  console.log(`Artist: ${artist}\nGenre: Music`);
}

// I only added the new artist to the array;
// I did not have to change the loop because it automatically handles every item.
// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const secondMenu = menuItems;
secondMenu.push("Ice Cream");

console.log(menuItems);
console.log(secondMenu);

const menuCopy = [...menuItems];
menuCopy.push("Cake");

console.log(menuItems.length);
console.log(menuCopy.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// The counting classics

// FizzBuzz: print numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Sum and largest value
const numbers = [12, 5, 41, 8, 33, 2, 27];
// Calculate the sum without using library helpers.
let sum = 0;

for (const number of numbers) {
  sum += number;
}
console.log("Sum:", sum);

// Find the largest value without using library helpers.
let largest = numbers[0];
for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}
console.log("Largest:", largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

// Reverse a string by walking backwards through its indexes.
function reverseString(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

const word = "JavaScript";

console.log("Original:", word);
console.log("Reversed:", reverseString(word));

// Count the vowels using a loop and includes().
function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (const character of text.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }
  return count;
}
console.log("Vowels:", countVowels(word));

// Palindrome check using the reverseString() function.
function isPalindrome(text) {
  const lowercaseText = text.toLowerCase();
  return lowercaseText === reverseString(lowercaseText);
}

// Test the palindrome checker on three words.
console.log("level:", isPalindrome("level"));
console.log("hello:", isPalindrome("hello"));
console.log("Racecar:", isPalindrome("Racecar"));

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
