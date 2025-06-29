$(function () {
  /*-------------------------------
  ドロップダウンメニュー
  ---------------------------------*/
  $(".navi .menu .menu-first span").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });

  $(".navi .menu .menu-second").click(function () {
    $(this).prev().toggleClass("active");
    $(this).slideToggle();
  });

  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
    $("#header .mask").toggleClass("active");
  });

  $(".navi a").click(function () {
    $(".hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
    $("#header .mask").removeClass("active");
  });

  $(".mask").click(function () {
    $(".hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
    $("#header .mask").removeClass("active");
  });

  $(".fadein").on("inview", function(){
    $(this).addClass("inview");
  });

  $(".tab-list .tab-all").addClass("active");
  $(".products-list.all").addClass("active");

  $(".tab-all").click(function(){
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.all").addClass("active");
  });

  $(".tab-sofa").click(function(){
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.sofa").addClass("active");
  });

  $(".tab-desk").click(function(){
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.desk").addClass("active");
  });

  $(".tab-chair").click(function(){
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.chair").addClass("active");
  });

  $(".tab-dining").click(function(){
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.dining").addClass("active");
  });

  $(".work1 .modal-open").click(function(){
    $("body").css("overflow-y", "hidden");
    $(".work1 .modal-container").addClass("active");
  });

  $(".work2 .modal-open").click(function(){
    $("body").css("overflow-y", "hidden");
    $(".work2 .modal-container").addClass("active");
  });

  $(".work3 .modal-open").click(function(){
    $("body").css("overflow-y", "hedden");
    $(".work3 .modal-container").addClass("active");
  })

  $(".modal-close").click(function(){
    $("body").css("overflow-y", "auto");
    $(".modal-container").removeClass("active");
  });

  $(".faq-list dd").hide();
  $(".faq-list dt").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
});
