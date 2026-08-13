// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

// Variable 1: The shop name won't change so the const is appropriate
const shopName = "The Daily Crumb";
// Variable 2: The order can vary, no of a product purchased can change
let dailyorderCount = 200;
// Variable 3: The shop address is permanent
const shopAddress = "Gustav Muller Platz 1";
// Variable 4: Open/closed status changes throughout the day, so let is necessary
let isOpen = true;
// Variable 5: The shop paint will not change
const shopoutdoorPaint = "Pistachio";

console.log(shopName);
console.log(dailyorderCount);
console.log(shopAddress);
console.log(isOpen);
console.log(shopoutdoorPaint);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof "shopName");
console.log(typeof "dailyorderCount");
console.log(typeof "shopAddress");
console.log(typeof "isOpen");
console.log(typeof "shopoutdoorPaint");
console.log(typeof null);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

// Solution; Declaring both variables
let universityDepartments;
let officeDepartments = null;

console.log(universityDepartments);
console.log(officeDepartments);

console.log(typeof universityDepartments);
console.log(typeof officeDepartments);

// undefined indicates a variable has been declared but not given a value, while null is an intentional value representing the deliberate absence of an object.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";
const orderNumber = 90;

const price = Number(priceText);
const count = Number(countText);
const flag = Boolean(flagText);
const order = String(orderNumber);

console.log(price, typeof price);
console.log(count, typeof count);
console.log(flag, typeof flag);
console.log(order, typeof order);

// Converting a non-numeric string like "4.50" or "12" with Number() would produce NaN

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
const bakeryName = "Maison Sarah";
let bakeryNameNew = "The Corner Bakery"; // I used a new variable instead of reassigning the const.
let openingHour = 7; // I declared the openingHour before assigning a value to it
// console.log(loafCount);
let loafCount = 12;
console.log(loafCount); // I declared and initialize loafCount before reading it.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = "Audi";
let b = "BMV";
let swapText = a;
a = b;
b = swapText;
console.log("a:", a);
console.log("b:", b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
