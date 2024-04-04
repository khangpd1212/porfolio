export default function customMouse() {
  var cursor = document.querySelector(".cursor");
  var elListHoverable = document.querySelectorAll(".hoverable");
  var elLinks = document.querySelectorAll("a");
  var initCursor = false;

  function toggleHoverable(itemHoverable) {
    itemHoverable.addEventListener("mouseover", function () {
      cursor.classList.add("custom-cursor--hoverable");
    });
    itemHoverable.addEventListener("mouseout", function () {
      cursor.classList.remove("custom-cursor--hoverable");
    });
  }
  for (var i = 0; i < elListHoverable.length; i++) {
    let itemHoverable = elListHoverable[i];
    toggleHoverable(itemHoverable);
  }
  for (var i = 0; i < elLinks.length; i++) {
    let itemHoverable = elLinks[i];
    toggleHoverable(itemHoverable);
  }

  window.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      TweenLite.to(cursor, 0.3, {
        opacity: 1,
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px",
    });
  };

  window.onmouseout = function (e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0,
    });
    initCursor = false;
  };

}
