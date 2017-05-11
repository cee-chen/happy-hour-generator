const restaurants = require('./data/restaurants.json');
const drinks = require('./data/drinks.json');
const themes = require('./data/drinks.json');
const playlists = require('./data/drinks.json');


$('#goButton').click(function(e) {

  const urls = jsonAssemble(
    random(restaurants),
    random(drinks),
    random(playlists)
  );

 // Slug?
});

const urls = jsonAssemble(
  random(restaurants),
  random(drinks),
  random(playlists)
);

function jsonAssemble(food, drink, playlist) {
  return {
    food,
    drink,
    playlist
  };
}

function random(input) {
  return input[Math.floor(Math.random() * input.length)];
}
