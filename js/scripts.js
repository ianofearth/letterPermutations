String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

$(document).ready(function(){
  $('button.inputWordBtn').click(function(event){
    event.preventDefault();
    var inputWord = $('input.inputWord').val();
    var word = inputWord;
    var wordSec = inputWord;
    var wordPartial; //This is what the next letter is added to
    var length = inputWord.length;
    var finalPermutations = []; //All created combos
    var intermediatePermutations = []; //This holds the partial words that are added to
    var tempPermutations = []; //This holds the newly created combos that will take the place of intermediatePermutations
    var uniquePermutations = [];

    for(var timesPrimLoop = length; timesPrimLoop > 0; timesPrimLoop --){
      var primaryLetter = word.charAt(0);
      finalPermutations.push(primaryLetter);
      intermediatePermutations.push(primaryLetter);
      for(var timesSecLoop = length - 1; timesSecLoop > 0; timesSecLoop --){
        var secLetter = wordSec.charAt(1);
        wordSec = (wordSec.substr(1) + wordSec.slice(0,1));
        for(var addLetterToWord = intermediatePermutations.length; addLetterToWord > 0; addLetterToWord --){
          wordPartial = intermediatePermutations[addLetterToWord - 1];
          for(var secLetterInsertPositionLoop = wordPartial.length +1; secLetterInsertPositionLoop > 0; secLetterInsertPositionLoop --){
            var tempCombo = wordPartial.splice(secLetterInsertPositionLoop -1, 0, secLetter);
            tempPermutations.push(tempCombo);
            finalPermutations.push(tempCombo);
          }
        }
        intermediatePermutations = tempPermutations;
        tempPermutations = []
      }
      intermediatePermutations = [];
      word = (word.substr(1) + word.slice(0,1));
      wordSec = word;
    }
//gets unigue values
    var finalLength = finalPermutations.length;
    for(i = 0; i < finalLength; i++){
      var permutation = finalPermutations[i];
      if(uniquePermutations.indexOf(permutation) === -1){
        uniquePermutations.push(permutation);
      }
    }

    var uniqueLength = uniquePermutations.length;

    $('.result').show();
    $('span.inputWord').text(inputWord);
    $('span.permutationLength').text(uniqueLength);
    $('.finalPermutations').text(uniquePermutations);
    $('input.inputWord').val('');
  });
});
//recursion?
var words = [];
var arr = [];
var fn = function(rem) {
  console.log(rem);
  if(rem.length === 0) {
    arr.push(rem[i]);
    words.push(arr.join(''));
    arr = [];
  }
  for(var  i = 0; i < rem.length; i++) {
    arr.push(rem[i]);
    fn(arr, rem.slice(i + 1))
  }
}
