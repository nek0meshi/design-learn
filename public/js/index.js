$(function() {
  $('#hamburger').on('click', function () {
    $('#hamburger-menu').toggleClass('isOpen');
  });

  $('#hamburger-menu').on('click', function () {
    $('#hamburger-menu').removeClass('isOpen');
  });

  // ref. http://kyasper.com/jquery-tips/
  $('a[href^="#"]').click(function () {
    console.log('click');
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top - 30;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
  });
});
