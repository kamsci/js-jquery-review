$(function(){
  $('#ball').click(function () {
    $('#ball').fadeOut();

    width = Math.floor(Math.random() * 600);
    height = Math.floor(Math.random() * 300);

    setTimeout(function() {
      $('#ball').css({"margin-left": width, "margin-top": height
      });
      $('#ball').fadeIn();
    }, 1000);
  });

    console.log('The dom is ready! (drill 1)');
});

