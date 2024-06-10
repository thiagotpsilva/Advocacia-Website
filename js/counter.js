$(document).ready(function () {
  var counter = 0;
  var c = 0;
  var i = setInterval(function () {
    $('.preloader .counter h1').html(c + '%');
    $('.preloader .counter hr').css('width', c + '%');

    counter++;
    c++;

    if (counter == 100) {
      clearInterval(i);
    }
  }, 30);
});
