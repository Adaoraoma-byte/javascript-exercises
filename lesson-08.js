"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.
class Artist {
  constructor(name, genre, runtime) {
    this.name = name;
    this.genre = genre;
    this.runtime = runtime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.runtime} minutes.`;
  }
}

const artistOne = new Artist("Adriano Celentano", "Italian Pop", "20:52");
const artistTwo = new Artist("Asake", "Afrobeats", "14:08");

console.log(artistOne.describe());
console.log(artistTwo.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];
const artists = [];
for (const data of artistData) {
  const artist = new Artist(data.name, data.genre, data.total);
  artist.push(artists);
}
artists.forEach((artist) => console.log(artist.describe()));

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:

// Prediction: TypeError — a class constructor cannot be invoked without 'new'.
const broken = Artist("Pinkfong", "Children's music", "11:31");
// Verification: TypeError: Class constructor Artist cannot be invoked without 'new'

// Corrected call:
const broken = new Artist("Pinkfong", "Children's music", "11:31");

// ! Snippet two, an arrow function used as a method that reads this:
// Prediction: Prediction: `${this.title} by ${this.artist}` will NOT use `single` as `this`.
// It will typically produce "undefined by undefined" (or another global
// `this` value, depending on the environment too).
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};
console.log(single.describe());
// Verification : undefined by undefined
// Corrected:
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe() {
    return `${this.title} by ${this.artist}`;
  },
};

console.log(single.describe());

// * Snippet three, the correct call. Uncomment after part one:
// Prediction: Artist is constructed correctly and describe() returns the
// artist's formatted description.
console.log(new Artist("Asake", "Afrobeats", "14:08").describe());
// Verification result: depends on the `describe()` implementation from Part One;
// assuming it formats these fields, it should describe Asake as Afrobeats at 14:08.

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.
class FeaturedArtist extends Artist {
  constructor(name, genre, time, blurb) {
    super(name, genre, time);
    this.blurb = blurb;
  }
  describe() {
    return `${super.describe()} — ${this.blurb}`;
  }
}
const featured = new FeaturedArtist(
  "Asake",
  "Afrobeats",
  "14:08",
  "A standout voice in modern Afrobeats.",
);
console.log(featured.describe());

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
// class declaration + constructor
function ArtistOld(name, genre) {
  // constructor property assignment: this.name=name
  this.name = name;
  // constructor property assignment: this.genre = genre
  this.genre = genre;
}
// Class instance method: describe()
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};
// Class instance method: tag()
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};
// Verification against the Artist class:
// ArtistOld.prototype.describe() corresponds to Artist's describe().
// ArtistOld.prototype.tag() corresponds to a class method named tag().
const oldArtist = new ArtistOld("Asake", "Afrobeats");

console.log(oldArtist.describe());
console.log(oldArtist.tag());

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.
class Artist {
  constructor(name, genre, time) {
    this.name = name;
    this.genre = genre;
    this.time = time;
  }
  describe() {
    return `${this.name}, ${this.genre} at ${this.time}`;
  }
  static named(artists, name) {
    return artists.find((artist) => artist.name === name);
  }
}
const artists = [
  new Artist("Pinkfong", "Children's music", "11:31"),
  new Artist("Asake", "Afrobeats", "14:08"),
  new Artist("Johnny Cash", "Country", "16:20"),
];
const match = Artist.named(artists, "Asake");
console.log(match.describe());

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
