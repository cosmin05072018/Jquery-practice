$(document).ready(function () {
  //Get Content and Attributes
  $(".clickText").click(function () {
    alert("text: " + $(".textMethod").text());
  });
  $(".clickHtml").click(function () {
    alert("html: " + $(".htmlMethod").html());
  });
  $(".clickValue").click(function () {
    alert("Your name is: " + $(".input").val());
  });

  //Set Content and Attributes

  $(".textSet").click(function () {
    $(".setText").text("This is not empty");
  });
  $(".htmlSet").click(function () {
    $(".setHtml").html("<h1>THIS IS NOT EMPTY!!!</h1>");
  });
  $(".valSet").click(function () {
    $(".setVal").val("s");
  });
});
