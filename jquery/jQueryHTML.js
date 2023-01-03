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

  $('.textSet').click(function(){
    $('.setText').text('This is not empty')
  })
});
