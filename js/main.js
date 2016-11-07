$(document)
.ready(function() {


  $('.logo').transition({
    animation: 'pulse',
    onComplete: function(){
      $('.sub-logo').transition('pulse')
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
