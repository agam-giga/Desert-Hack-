var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
//console.log(getRandomJoke.tags)



var cowsay = require("cowsay");

console.log(cowsay.say({
    text : getRandomJoke.body,
    e : "eyes",
    T : "L"
}));

// or cowsay.think()
