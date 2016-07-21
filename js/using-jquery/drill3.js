$(function(){
  $('.shape').hover(function () {
    $('.shape').removeClass('ball');
    $('.shape').css('background-color', 'pink');
  }, function() {
    $('.shape').addClass('ball');
    $('.shape').css('background-color', '#4444CC');
  })

    console.log('The dom is ready! (drill 3)');

});

