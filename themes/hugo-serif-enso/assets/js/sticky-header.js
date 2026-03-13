var header = document.getElementById("stickyHeader");

if (header) {
  var offset = header.offsetTop;
  document.addEventListener("scroll", function () {
    if (window.scrollY > offset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}
