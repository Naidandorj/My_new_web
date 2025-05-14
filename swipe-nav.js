document.addEventListener("DOMContentLoaded", () => {
  const pageOrder = ["index.html", "about.html", "work.html", "contact.html"];
  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = pageOrder.indexOf(currentPage);

  let startX;

  document.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;
    let diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < pageOrder.length - 1) {
        window.location.href = pageOrder[currentIndex + 1];
      } else if (diffX < 0 && currentIndex > 0) {
        window.location.href = pageOrder[currentIndex - 1];
      }
    }
  });
});
