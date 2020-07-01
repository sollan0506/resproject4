$(window).load(function(){
  // Gallery 초기값 설정
  var container = $('#gallery');

  container.isotope({
    itemSelector: '.grid-item'
  });
});


$(function(){
  // gmenu JS
  var gMenu = $('.gmenu li a');

  gMenu.click(function(){
    gMenu.removeClass('menu-act');
    $(this).addClass('menu-act');

    event.preventDefault();
  });


  // Gallery Setting
  var grid = $('.grid');

  // Filter Sort Setting
  $('#m1').click(function(){
    grid.isotope({ filter: '*' });
    event.preventDefault();
  });

  $('#m2').click(function(){
    grid.isotope({ filter: '.g1' });
    event.preventDefault();
  });

  $('#m3').click(function(){
    grid.isotope({ filter: '.g2' });
    event.preventDefault();
  });

  $('#m4').click(function(){
    grid.isotope({ filter: '.g3' });
    event.preventDefault();
  });

  $('#m5').click(function(){
    grid.isotope({ filter: '.g4' });
    event.preventDefault();
  });


  
  // bxslider 실행코드
  $('.bxslider').bxSlider({
    auto: true,
    pager: false,
    controls: false
  });


  // portfolio caption hover
  $('#portfolio #gallery .col-lg-4 .g-box').hover(
      function(){
        $(this).children('.caption').animate({'opacity': 1}, 400);
      },
      function (){
        $(this).children('.caption').animate({'opacity': 0}, 400);
      }
    );


  // features icon hover
  $('#features .col-lg-4').hover(
    function(){
      $(this).children('div').css('background-color', '#ea586f');
      $(this).children('div').children('i').css('color', '#fff');
    },
    function(){
      $(this).children('div').css('background-color', '#fff');
      $(this).children('div').children('i').css('color', '#ea586f');
    });


  // team hover
  $('#team .col-lg-4 .member-box').hover(
    function(){
      $(this).children('.caption').animate({'opacity': 1}, 400);
    },
    function(){
      $(this).children('.caption').animate({'opacity': 0}, 400);
    }
  );

});