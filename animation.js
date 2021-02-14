const header = document.getElementById("header");
let degree = 0;
function rotateHeader() {
  degree = degree + 3;
  degree = degree % 360;
  if (0 <= degree && degree <= 90 || 270 <= degree && degree <= 360) {
    header.className = "face";
  } else {
    header.className = "back";
  }
  header.style.transform = "rotateX(" + degree + "deg)";
}
setInterval(rotateHeader, 20);

$(function () {
var offset = 53;
  $('.navbar li a').click(function (event) {
    event.preventDefault();
    location.replace($(this).attr('href'));
    window.scrollBy(0, -offset);
  });
});
