const restaurants = require('./data/restaurants.json');
const drinks = require('./data/drinks.json');
const themes = require('./data/drinks.json');
const playlists = require('./data/drinks.json');

$('#fud').click(function(e) {
  const url = random(restaurants);
  window.open(url);
});

$('#drank').click(function(e) {
  const url = random(drinks);
  window.open(url);
});

$('#musak').click(function(e) {
  const url = random(playlists);
  window.open(url);
});

$('#goButton').click(function(e) {

 // TOO, get me a slug


  // '/theme=var'
});

function random(input) {
  return input[Math.floor(Math.random() * input.length)];
}
