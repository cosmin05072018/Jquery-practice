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

  //A Callback Function for text(), html(), and val()

  $("#btn1").click(function () {
    $("#test1").text(function (inn, asdasd) {
      return (
        "Old text: " + asdasd + " New text: Hello world! (index: " + inn + ")"
      );
    });
  });

  $("#btn2").click(function () {
    $("#test2").html(function (i, origText) {
      return (
        "Old html: " +
        origText +
        " New html: Hello <b>world!</b> (index: " +
        i +
        ")"
      );
    });
  });

  $(".changeHref").click(function () {
    $(".hrefAttr").attr("href", "https://codeigniter.com/");
  });

  $(".addAppend").click(function () {
    $(".pAppend").append(" Alt paragraf append.");
  });

  $(".addPrepend").click(function () {
    $(".pPrepend").prepend(" Alt paragraf prepend.");
  });
  $(".before").click(function () {
    $(".x").before("x");
  });
  $(".after").click(function () {
    $(".x").afer("xasas");
  });

  $(".importantClass").click(function () {
    $(".addClass").addClass("important");
  });

  $(".removeClass").click(function () {
    $(".addClass").removeClass("important");
  });

  $(".toggleClass").click(function () {
    $(".addClass").toggleClass("important");
  });
});
