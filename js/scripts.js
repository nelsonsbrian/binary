var newfunction = function(txt) {
  var output = 0;
  txt = parseInt(txt);
  if (txt === 0) {
    output = 0;
  }
  else if (txt === 1) {
    output = 1;
  }
  return txt;


}






$(document).ready(function() {
  $("form#numberTranslator").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#inputNumber").val();
    var sentenceOutput = newfunction(userInput);



    $("#result").text(sentenceOutput);
  });
});
