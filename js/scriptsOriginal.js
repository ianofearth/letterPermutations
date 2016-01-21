$(document).ready(function(){
  $('button.inputWordBtn').click(function(event){
    event.preventDefault();
    var inputWord = $('input.inputWord').val();
    var length = inputWord.length;
    var row = 0
    var column = 0
    var permutationsOfTwo = []

//for permutations of two, also singles.
    for (row = 0; row < length; row++ ){
      for (column = 0; column < length; column++){
        var firstLetter = inputWord.charAt(row);
        var secondLetter = inputWord.charAt(column);
        var perm = firstLetter + secondLetter
        if(row === column){
          permutationsOfTwo.push(firstLetter)
        }else{
          permutationsOfTwo.push(perm)
        }
      }
    }

    
    //if row or column = one of the letters, do not combine
    //want to combine all of the permutationsOfTwo as long as row and column are not the same.
    //these are based upon positions in the square
    //positions not to be duplicated are the squares, that is, pos 0 on row and pos 0 on col are both a, 2 and 2 are b etc
    //for first of the 4x4 square, do not combine 1 with 1,2,3,4,5,9,13
    //2 with 2,5,6,7,8,10,14
    //NEW PLAN!!!! SEE HERE!!! each single letter and combine with each of the square as long as the first letter and second letter (based upon position) are no the same
    //excluded combos are as lain out above in lines 26/27
          alert(permutationsOfTwo)
  });
});
