$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      var pos = position-60;

      $('body,html').animate({scrollTop:pos}, speed, 'swing');
      return false;
   });
});