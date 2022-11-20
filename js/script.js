$(".mobile-btn").click(function () {
  $(".mobile-overlay, .sidebar, .mobile-btn").toggleClass("mobile-active");
});

$(".menu .icon").click(function () {
  $(".icon").removeClass("active");
  $(this).addClass("active");

  $(".contents").css("display", "none");
  var contentsIndex = $(".icon").index(this);
  $(".content .contents").eq(contentsIndex).css("display", "grid");
});

$(".category").click(function () {
  $(".category").removeClass("active");
  $(this).addClass("active");
});
