export async function loadHtml(fileLocation) {
  const resp = await fetch(fileLocation);
  const html = await resp.text();
  return html;
}
export async function loadScript(fileLocation) {
  var script = document.createElement("script");
  script.setAttribute("src", fileLocation);
  document.head.appendChild(script);
}
export function addClass({ idContainer, classListChild, classActive }) {
  var menuContainer = document.getElementById(idContainer);
  var listMenu = menuContainer.querySelectorAll(`.${classListChild}`);
  for (var i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener("click", function () {
      listMenu.forEach((li) => li.classList.remove(classActive));
      this.classList.add(classActive);
    });
  }
}
export function addBoxShadowHeader(element) {
  window.addEventListener("scroll", function () {
    const scroll = this.scrollY;
    if (scroll > 0) {
      element.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.25)";
    } else {
      element.style.boxShadow = "unset";
    }
  });
}

function toggleNavbar(elNav) {
  let elLinesHamburger = document.getElementsByClassName("line-hamburger");
  elLinesHamburger[0].classList.toggle("line-first");
  elLinesHamburger[1].classList.toggle("line-second");
  elLinesHamburger[2].classList.toggle("line-third");
  elNav.classList.toggle("navbar-active");
}
export function visibleNavbar() {
  let elNav = document.getElementById("navbar");
  let elContainerHamburger = document.getElementById("container-hamburger");
  elContainerHamburger.addEventListener("click", function () {
    toggleNavbar(elNav);
  });
}
