$(".icon").mouseover((event) => {
  event.target.style.transform = "scale(1.1, 1.1)";
});
$(".icon").mouseleave((event) => {
  event.target.style.transform = "scale(1, 1)";
});
