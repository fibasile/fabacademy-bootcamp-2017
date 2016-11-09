$(document)
.ready(function() {

  $('.buttonlogo').hide();
  $('.logo').transition({
    animation: 'slide left',
    duration: 500,
    onComplete: function(){
      $('.sub-logo').transition({
        animation: 'slide right',
        duration: 500,
        onComplete: function(){
          $('.buttonlogo').css('display',null).transition('fade in')          
        }
      })
    }
  });

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;
  smoothScroll.init({
    offset: 60
  });



})
;
