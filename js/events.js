//define functions here

$(document).ready(function(){

// call functions here
$('p').click(getIt())

$('img').load(frameIt())

$('#typing').keydown(pressIt())

});

function getIt() {
  alert ("Hey!");
}

function frameIt() {
  $("img").addClass('tasty');
}

function pressIt() {
  var letter = document.getElementById("typing").value;
  if (letter === "G") {
    alert("you pressed G");
  } 
}

function submitIt() {
  alert ('Your form is going to be submitted now.');
}
