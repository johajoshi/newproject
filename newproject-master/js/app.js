//1. Hide Spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Launch it!</button>");
//3. When button is pressed, show spoiler
$(".spoiler button").click(function(){
  //The prev button selects the thing right before it  
  $(this).prev().show();
  //4. Get rid of button - this refers to the object of this function which in this case is the spoiler button
  $(this).remove();  
});
//Hoverable Menu
$(document).ready(function () {
    $(".hoverli").hover(
  function () {
     $('ul.file_menu').slideDown('medium');
  }, 
  function () {
     $('ul.file_menu').slideUp('medium');
  }
);

});
