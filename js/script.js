// $(".change-mode").click(function () {
//   $("body").toggleClass("dark");
// });

// $(".category").click(function () {
//   $(".products").css("display", "none");
//   var categoryIndex = $(".category").index(this);
//   $(".shop .products").eq(categoryIndex).css("display", "block");
// });

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
