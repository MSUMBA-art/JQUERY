//document.querySelector("h1");

//we can do this bellow is the same as above
$("h1").addClass("big-title margin");

//$("button").css("color", "blue");

//selecting text using jquery
//$("h1").text("GoodByee")

//$("button").text("Don't click me");
//$("button").html("<em>Don't click me</em>");

//SELECTING ATTRIBUTES

//$("img").attr("src");
//$("a").attr("href", "https://loveyourcity.netlify.app/");

//ADDING EVENT LISTENERS USING JQUERY
// $("h1").click(function() {
//     $("h1").css("color", "purple");
// })

//ADDING EVENT LISTENERS TO ALL BUTTONS USing FOR LOOP IN Javascrpt
// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")
//     [i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     }); 
// }

//ADDING EVENT LISTENERS TO ALL BUTTONS IN Jquery
//$("button").click(function () {
   // $("h1").css("color", "red");
//})

//targeting input in jq
// $(document).keypress(function(event) {
//     // console.log(event.key);
//     $("h1").text(event.key);
// })

//same

//$(document).on("mouseover", function() {
 //   $("h1").css("color", "red")
//})

$("button").click(function () {
    $("h1").slideToggle(); //.show, .hide, .toggle, .fadeOut, .toggle
})

