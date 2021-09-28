const animal = require("cute-animals");

let name = document.getElementById("name");
name.innerHTML = animal("adj adj animal");

const movieQuote = require("popular-movie-quotes");

const quoteArray = movieQuote.getQuotesByMovie("Interstellar");

const body = document.getElementsByTagName("body")[0];
quoteArray.forEach((element) => {
  let h1 = document.createElement("h1");
  h1.innerHTML = element.quote;
  body.appendChild(h1);
});

const randomCat = require("random-cat");

const url = randomCat.get();

document.getElementById("cat").src = url;
