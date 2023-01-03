$(document).ready(function () {
  /* --------------START Jquery Effects-----------------*/
  //hide/show buttons
  $(".hide").click(function () {
    $(".paragraph").hide(
      /*ii putem specifica parametrii de timp daca dorim*/ 1000
    );
  });
  $(".show").click(function () {
    $(".paragraph").show(
      /*ii putem specifica parametrii de timp daca dorim*/ 1000
    );
  });

  //FADING
  //fadeIn ()
  $(".divFadeIn").click(function () {
    $(".div1").fadeIn("slow");
    $(".div2").fadeIn(3000);
    $(".div3").fadeIn();
  });

  //fadeOut()
  $(".divFadeOut").click(function () {
    $(".div4").fadeOut("slow");
    $(".div5").fadeOut("5000");
    $(".div6").fadeOut("5500");
  });

  //fade toggle
  $(".divToggle").click(function () {
    $(".div7").fadeToggle("slow");
    $(".div8").fadeToggle("5000");
    $(".div9").fadeToggle("5500");
  });

  //fadeTo
  $(".divFadeTo").click(function () {
    $(".div10").fadeTo("slow", 0.4);
    $(".div11").fadeTo("slow", 0.9);
    $(".div12").fadeTo("slow", 0);
  });

  //SLIDING

  //slideDown()

  $(".slideDown").click(function () {
    $(".slidingDown").slideDown("slow");
  });

  //slideUp()
  $(".slideUp").click(function () {
    $(".slidingUp").slideUp("fast");
  });

  //slideToggle()
  $(".toggle").click(function () {
    $(".slidingToggle").slideToggle();
  });

  //ANIMATION

  $(".animate").click(function () {
    $(".cub").animate({ width: "100px" }, "slow");
    $(".cub").animate({ height: "100px" }, "slow");
    $(".cub").animate({ fontSize: "20px" }, "slow");
    $(".cub").animate({ width: "50px" }, "slow");
    $(".cub").animate({ height: "50px" }, "slow");
    $(".cub").animate({ fontSize: "16px" }, "slow");
  });

  //STOP ANIMATIONS
  $(".btnStart").click(function () {
    $(".slideDownStop").slideDown(5000);
  });
  $(".btnStop").click(function () {
    $(".slideDownStop").stop();
  });
  /* --------------STOP Jquery Effects-----------------*/
});
