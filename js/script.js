function random(input) {
  return input[Math.floor(Math.random() * input.length)];
}

function loadSection() {
  var themeParam = window.location.search.split('theme=')[1];
  var theme = window.themes[themeParam];

  if (themeParam && theme) {
    loadTheme(theme);
    $('#js-start').hide();
    $('#js-theme').show();
  } else {
    $('#js-start').show();
    $('#js-theme').hide();
  }
}

function loadTheme(theme) {
  // Set title text
  $('#theme').text(theme.name);
  document.title = theme.name + ' - Happy Hour Theme Generator';

  // Set (optional) background image
  if (theme.photo) {
    $('#js-theme').css('backgroundImage', 'url("https://imagesvc.timeincapp.com/?q=60&w=2000&url=' + encodeURIComponent(theme.photo) + '")');
  } else {
    $('#js-theme').removeAttr('style');
  }

  // Set a specific restaurant if one exists, if not, fall back to a random one
  if (theme.restaurant) {
    $('#js-food').attr('href', theme.restaurant);
  } else {
    $('#js-food').attr('href', random(window.restaurants));
  }

  // Set a specific drink recipe if one exists, if not, fall back to a random one
  if (theme.drinks) {
    $('#js-drink').attr('href', theme.drinks);
  } else {
    $('#js-drink').attr('href', random(window.drinks));
  }

  // Set a specific playlist if one exists, if not, fall back to a random one
  if (theme.playlist) {
    $('#js-music').attr('href', theme.playlist);
  } else {
    $('#js-music').attr('href', random(window.playlists));
  }
}

window.onpopstate = function (event) {
  loadSection();
}

$(document).ready(function() {
  loadSection();

  var themeKeys = Object.keys(window.themes);

  $('.js-generate').click(function(event) {
    event.preventDefault();

    // Start page transition
    $('body').addClass('is-transitioning');

    // Flip the theme
    setTimeout(function() {
      window.history.pushState(null, null, '?theme=' + random(themeKeys));
      loadSection();
    }, 400)

    // End page transition
    setTimeout(function() {
      $('body').removeClass('is-transitioning');
    }, 1500)
  })
});
