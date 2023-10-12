$(document).ready(function() {

  $('.icons i').each(function(){
    var classes = $(this).attr('class').split(' ');
    var className = '.' + classes.join('.');
    $(this).html('<span>' + className + '</span>');
  });
  
});