$(document).ready(function(){
  var age = parseInt(prompt("What is your current age?"));

  if (age < 18) {
    $("#under18").show();
  }

  else {
    $("#above18").show();
  }
});
