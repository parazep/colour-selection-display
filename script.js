$(document).ready(function() {



$(".box").click(function() {
  $(".box").removeClass("selected");
  $(this).addClass("selected");
  var boxColour = $(this).css("background-color");
  console.log(boxColour);
  $("#result").text(boxColour);
});



});
