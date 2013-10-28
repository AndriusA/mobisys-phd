function photoInfo() {
$('#showLink').hide();
$('#photoInfoPane').css({opacity:0.7});
$('#photoInfoPane').animate({
    left: '+=200'
  }, 300, function() {
    // Animation complete.
  });
$('#photoInfo').animate({
    left: '+=200'
  }, 300, function() {
    // Animation complete.
  }); 
}

function photoInfoHide() {
  $('#showLink').show();
  $('#photoInfoPane').animate({
      left: '-=200'
    }, 300, function() {
      // Animation complete.
    });
  $('#photoInfo').animate({
      left: '-=200'
    }, 300, function() {
      // Animation complete.
    }); 
  
}