var newfunction = function(txt) {
  txt = parseInt(txt);
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
