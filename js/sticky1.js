$(function(){
  
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);

    // 상단 네비게이션 설정
    if(scrollPos>20){
      $('#navi').addClass('fixed');
    }else {
      $('#navi').removeClass('fixed');
    }

    // top-btn 보이기/숨기기
    if(scrollPos>300){
      $('.top-btn').css('display', 'block');
    }else {
      $('.top-btn').css('display', 'none');
    }

  });

  // 상단 네비게이션 스크롤이동 설정
  var menuItem = $('#gnb li a, #navi h1 a, .top-btn');

  menuItem.click(function(){
    var el = $(this).attr('href');  //ex) #about
    var elWrap = $(el);           //ex) $('#about')
    
    scrollMove(elWrap, 50);

    event.preventDefault();      //기본 동작(링크 이동)을 중단한다.
  });

  // 부드러운 이동 함수 만들기
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top; //위로부터 얼만큼 떨어져 있는지
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }

  // Scrollspy Call
  $('body').scrollspy({ 
    offset: 51  
  });

});