$('.item-display a').hover(
    function() {
      $(this).find('.card, .card-top').css({
        background: '#e8431e',
      });
      $(this).find('.card-body p, .card-body h5').css({
        color: '#e2f8ff',
      });
      $(this).find('.card-img-top').css({
        border: 'thick solid #e2f8ff',
      });
    }, function() {
      $(this).find('.card').css({
        background: '#e2f8ff',
      });
      $(this).find('.card-top').css({
        background: '#C6C6C6',
      });
      $(this).find('.card-body p, .card-body h5').css({
        color: '#0d2238',
      });
      $(this).find('.card-img-top').css({
        border: 'none',
      });
    });
