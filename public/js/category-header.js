function resizeHeader() {
  $('.page-header').height(
      $('.page-header .header-text').height()*1.3
    );
};

resizeHeader();

$(window).resize(resizeHeader);
