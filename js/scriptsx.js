$(document).ready(function(){
  $('button.inputWordBtn').click(function(event){
    event.preventDefault();
    var inputWord = $('input.inputWord').val();
    var length = inputWord.length;
    var row = 0
    var column = 0
    var depth = 0
    var perms = []

//for permutations of three, two, also singles.
    for (depth = 0; depth < length; depth ++){
      for (row = 0; row < length; row++ ){
        for (column = 0; column < length; column++){
          var rowLetter = inputWord.charAt(row);
          var columnLetter = inputWord.charAt(column);
          var depthLetter = inputWord.charAt(depth);
          if(row === column && row === depth){
            perms.push(rowLetter)
          }else if(row === column || column === depth){
            if(perms.indexOf(rowLetter + depthLetter) === -1){
              perms.push(rowLetter + depthLetter)
            }
          }else if(row === depth){
            if(perms.indexOf(rowLetter + columnLetter) === -1){
              perms.push(rowLetter + columnLetter)
            }
          }else{
            perms.push(rowLetter + columnLetter + depthLetter)
          }
        }
      }
    }
          alert(perms)
          alert(perms.length)
  });
});
