var themes = require('./data/themes.json')
/*
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

 // if no holiday, RANDOMIZE IT BITCH!
 Object.keys


  // send us to '/theme=Slug'
});
*/
console.log(Object.keys[themes]);

function random(input) {
  return input[Math.floor(Math.random() * input.length)];
}
