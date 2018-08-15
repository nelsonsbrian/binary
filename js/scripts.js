var newfunction = function(txt) {
  return txt;ß


}






$(document).ready(function() {
  $("form#numberTranslator").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#inputNumber").val();
    var sentenceOutput = newfunction(userInput);



    $("#result").text(sentenceOutput);
  });
});
