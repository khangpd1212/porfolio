export async function loadHtml(fileLocation) {
  const resp = await fetch(fileLocation);
  const html = await resp.text();
  return html
}
export function addClass({ idContainer, classListChild, classActive }) {
  var menuContainer = document.getElementById(idContainer);
  var listMenu = menuContainer.getElementsByClassName(classListChild);
  for (var i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(classActive);
      current[0].className = current[0].className.replace(` ${classActive}`, "");
      this.className += ` ${classActive}`;
    });
  }
}
export function addBoxShadowHeader(element) {
  window.addEventListener('scroll', function () {
    const scroll = this.scrollY
    if (scroll > 0) {
      element.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.25)";
    } else {
      element.style.boxShadow = "unset";
    }
  })
}