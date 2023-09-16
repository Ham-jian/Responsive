$(document).ready(function(){

  /* 메뉴 클릭 */
  $(".gnb li").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  /* 스크롤위치 메뉴 활성화 */
  $(window).scroll(function(){
    let scroll=$(this).scrollTop();
    $("#txt1").text(scroll);

    if(scroll>=0 && scroll<1050){
      $(".gnb li:nth-child(1)").addClass("active");
    }else{
      $(".gnb li:nth-child(1)").removeClass("active");
    };

    if(scroll>=1051 && scroll<2010){
      $(".gnb li:nth-child(2)").addClass("active");
    }else{
      $(".gnb li:nth-child(2)").removeClass("active");
    };

    if(scroll>=2011 && scroll<3005){
      $(".gnb li:nth-child(3)").addClass("active");
    }else{
      $(".gnb li:nth-child(3)").removeClass("active");
    };

    if(scroll>=3006 && scroll<4868){
      $(".gnb li:nth-child(4)").addClass("active");
    }else{
      $(".gnb li:nth-child(4)").removeClass("active");
    };
  });


  /* 출처 화살표 클릭, 호버 */
  $(".source").hover(function(){
    $(this).addClass("active")
  },function(){
    $(this).removeClass("active")
  });

  $(".source").click(function(){
    $(this).toggleClass("active")
  });

  /* 모바일 햄버거 메뉴 */
  // $(".gnb").hide();
  slide = true;

  $(".allmenu").click(function(){
    if(slide){
      $(this).addClass("active");
      $(".gnb").animate({top:"0"});
      slide = false;
    }else {
      $(this).removeClass("active");
      $(".gnb").animate({top:"-200%"});
      slide = true;
    };
  });


  /* 타블릿 설명박스 클릭 */
  // moreText = true;
  
  // $(".part1 .box").click(function(){
  //   if(moreText){
  //     $(".part1").css({height:"auto"});
  //     $(this).find(p).css({
  //       overflow:"visible",
  //       textOverflow:"clip"
  //     });
  //     $(this).html("<i class='xi-angle-up-min'></i>");
  //     moreText = false;
  //   }else {
  //     $(".part1").css({height:"210px"});
  //     $(this).html("<i class='xi-angle-down-min'></i>");
  //     $(this).find(p).css({
  //       overflow:"hidden",
  //       textOverflow:"ellipsis"
  //     });
  //     moreText = true;
  //   };
  // });

  
});