$(document).ready(function () {
  $('.hide').click(function () {
    $('.paragraph').hide(/*ii putem specifica parametrii de timp daca dorim*/ 1000);
  });
  $('.show').click(function () {
    $('.paragraph').show(/*ii putem specifica parametrii de timp daca dorim*/ 1000);
  });
});
