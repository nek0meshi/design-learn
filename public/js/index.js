$(function() {
  $('#hamburger').on('click', function () {
    $('#hamburger-menu').toggleClass('isOpen');
  });

  $('#hamburger-menu').on('click', function () {
    $('#hamburger-menu').removeClass('isOpen');
  });
});
