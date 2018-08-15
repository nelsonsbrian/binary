var newfunction = function(txt, power) {
  txt = parseInt(txt);
  pwr = parseInt(power);

  var binaryArray = [];
  for(i=0;txt >= 1;i++) {
    binaryArray.push(txt % pwr);
    txt = Math.floor(txt / pwr);
  }
  return binaryArray.reverse().join('');
};



$(document).ready(function() {
  $("form#numberTranslator").submit(function(event) {
    event.preventDefault();

    var userInputnum = $("input#inputNumber").val();
    var userInputpwr = $("input#inputPower").val();
    var sentenceOutput = newfunction(userInputnum, userInputpwr);



    $("#result").text(sentenceOutput);
  });
});
