$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var nosotrosOffsetTop = $('#nosotros').offset().top;

    if ($(window).scrollTop() >= nosotrosOffsetTop) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= nosotrosOffsetTop/2) {

      fixedHeader.css('margin-top', '-68px');

    }

  })


});
