$(".icon").mouseover((event) => {
  event.target.style.transform = "scale(1.1, 1.1)";
});
$(".icon").mouseleave((event) => {
  event.target.style.transform = "scale(1, 1)";
});
$(".categoryList").mouseover((event) => {
  event.target.style.transform = "scale(1.1, 1.1)";
})
$(".categoryList").mouseleave((event) => {
  event.target.style.transform = "scale(1, 1)";
})
$("#aboutMe").click(() => {
  let page = $("#aboutPage").offset();
  $("html").animate({scrollTop: page.top}, 400);
})
$("#skill").click(() => {
  let page = $("#skillPage").offset();
  $("html").animate({scrollTop: page.top}, 400);
})
$("#education").click(() => {
  let page = $("#educationPage").offset();
  $("html").animate({scrollTop: page.top}, 400);
})
$("#do").click(() => {
  let page = $("#doPage").offset();
  $("html").animate({scrollTop: page.top}, 400);
})