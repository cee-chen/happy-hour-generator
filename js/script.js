var themeKeys = Object.keys(window.themes);

function random(input) {
  return input[Math.floor(Math.random() * input.length)];
}

function loadTheme(theme) {
  document.title = theme.name + ' - Happy Hour Theme Generator';
  document.getElementById('js-name').innerText = theme.name;
  document.getElementById('js-food').setAttribute('href', theme.restaurant || random(window.restaurants));
  document.getElementById('js-drink').setAttribute('href', theme.drinks || random(window.drinks));
  document.getElementById('js-music').setAttribute('href', theme.playlist || random(window.playlists));

  if (theme.photo) {
    document.getElementById('js-theme').style.backgroundImage = 'url("https://imagesvc.timeincapp.com/?q=60&w=2000&url=' + encodeURIComponent(theme.photo) + '")';
  } else {
    document.getElementById('js-theme').removeAttribute('style');
  }
}

function loadSection() {
  var themeParam = window.location.search.split('theme=')[1];
  var theme = window.themes[themeParam];

  if (themeParam && theme) {
    loadTheme(theme);
    document.getElementById('js-start').classList.add('u-display-none');
    document.getElementById('js-theme').classList.remove('u-display-none');
  } else {
    document.getElementById('js-start').classList.remove('u-display-none');
    document.getElementById('js-theme').classList.add('u-display-none');
  }
}

function loadPage(url) {
  // Start the transition animation
  document.body.classList.add('is-transitioning');

  // Navigate to the theme page
  setTimeout(function() {
    window.history.pushState(null, null, url);
    loadSection();
  }, 400)

  // Clear the transition animation
  setTimeout(function() {
    document.body.classList.remove('is-transitioning');
  }, 1500)
}

document.addEventListener("DOMContentLoaded", function () {
  loadSection();

  document.getElementById('js-roll').addEventListener('click', function (event) {
    event.preventDefault();
    loadPage('?theme=' + random(themeKeys));
  })

  document.getElementById('js-reroll').addEventListener('click', function (event) {
    event.preventDefault();
    loadPage('?theme=' + random(themeKeys));
  })
});

window.addEventListener('popstate', function () {
  loadSection();
});
