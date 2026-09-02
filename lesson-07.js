"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const menuItem = {
  name: "Margherita Pizza",
  price: 12.99,
  category: "Pizza",
  isVegetarian: true,
  available: true,
};

console.log(menuItem.name);
console.log(menuItem.price);

// Log a property using bracket notation with a variable key
const propertyKey = "category";

// Brackets are required because the property name is stored in a variable.
console.log(menuItem[propertyKey]);

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
const menuItem = {
  name: "Margherita Pizza",
  price: 12.99,
  category: "Pizza",
  isVegetarian: true,
  available: true,

  describe() {
    return `${this.name} is a ${this.category} that costs $${this.price.toFixed(2)}.`;
  },
};

console.log(menuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menuItems = [
  {
    name: "Margherita Pizza",
    price: 12.99,
    category: "Pizza",
    isVegetarian: true,
    available: true,
  },
  {
    name: "Cheeseburger",
    price: 10.99,
    category: "Burgers",
    isVegetarian: false,
    available: true,
  },
  {
    name: "Caesar Salad",
    price: 8.99,
    category: "Salads",
    isVegetarian: true,
    available: true,
  },
  {
    name: "Chicken Tacos",
    price: 11.49,
    category: "Mexican",
    isVegetarian: false,
    available: true,
  },
  {
    name: "Chocolate Cake",
    price: 6.99,
    category: "Dessert",
    isVegetarian: true,
    available: false,
  },
];

for (const item of menuItems) {
  console.log(`${item.name} — $${item.price.toFixed(2)} — ${item.category}`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
const vegetarianNames = menuItems
  .filter((item) => item.isVegetarian)
  .map((item) => item.name);

console.log(vegetarianNames);

const cheapItem = menuItems.find((item) => item.price < 3);

// find returns undefined when no item matches the condition.
console.log(cheapItem);

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
const item = menuItems[0];

console.log(Object.keys(item));
console.log(Object.values(item));

for (const [key, value] of Object.entries(item)) {
  console.log(`${key}: ${value}`);
}
// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
const item = { name: "Book", price: 20 };

const second = item;
second.price = 25;

console.log(item);
const copy = { ...item, price: 30 };

console.log(item);
console.log(copy);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
// CLASSIC WORD FREQUENCY COUNTER
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const counter = {};
const words = sentence.split(" ");

for (const word of words) {
  counter[word] = (counter[word] || 0) + 1;
}
console.log(counter);

const sortedEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]);

console.log(sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
