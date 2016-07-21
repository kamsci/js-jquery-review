$(function(){
  // var squarePosition = $('#square').position();
  // var stagePosition = $('#stage').position();


  console.log('The dom is ready! (drill 2)');
  // console.log("Top: " + squarePosition.top + " Left: " + squarePosition.left);
  // console.log("Top: " + stagePosition.top + " Left: " + stagePosition.left);


  $(document).on('keyup',function(event){
    //output to console which key was pressed
    console.log('The user pressed key: ',event.which);
    // prevent default arrow action
    event.preventDefault();
    // identify position of square
    var squarePosition = $('#square').position();
    var stagePosition = $('#stage').position();

    var leftMove = squarePosition.left;
    var topMove = squarePosition.top;

    switch(event.which) {
      case 37:
        if (leftMove > 0) {
          leftMove -= 100;
          $('#square').css({ "left": leftMove });
        } else {
          alert("Too far left!");
        };
      break;

      case 39:
        if (leftMove < 800) {
          leftMove += 100;
          $('#square').css({ "left": leftMove });
        } else {
          alert("Too far right!");
        };
      break;

      case 38:
        if (topMove > 0) {
          topMove -= 100;
          $('#square').css({ "top": topMove });
        } else {
          alert("Too far up!");
        };
      break;

      case 40:
        if (topMove < 400) {
          topMove += 100;
          $('#square').css({ "top": topMove });
        } else {
          alert("Too far down!");
        };
      break;

      case 83:
        $('#square').effect('shake');
      break;

      default: return;
    }
  });
}); // end main function

