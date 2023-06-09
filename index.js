import {
  addBoxShadowHeader,
  addClass,
  loadHtml,
  loadScript,
  visibleNavbar,
} from "./utils/common.js";

async function loadHamburger() {
  const elHamburger = document.getElementById("hamburger");
  elHamburger.innerHTML = await loadHtml("./header/hamburger.html");
  visibleNavbar();
}

async function loadHeader() {
  const el = document.getElementById("header");
  el.innerHTML = await loadHtml("./header/index.html");

  loadHamburger();
  addBoxShadowHeader(el);

  const linkCV = 'https://drive.google.com/file/d/1aKt4uFjnGGOGKhyIpgDeTPlBbR2FiV9u/view?usp=sharing';
  const listElLinkCv = document.getElementsByClassName('link-cv');
  for (let i = 0; i < listElLinkCv.length; i++) {
    const element = listElLinkCv[i];
    element.href = linkCV
  }
  addClass({
    idContainer: "header-menu",
    classListChild: "menu",
    classActive: "menu-active",
  });
  addClass({
    idContainer: "nav-menu",
    classListChild: "menu",
    classActive: "menu-active",
  });
}
async function loadTitleUser() {
  const el = document.getElementById("title-user");
  el.innerHTML = await loadHtml("./title-user/index.html");
}
async function loadAboutMe() {
  const el = document.getElementById("about-me");
  el.innerHTML = await loadHtml("./about-me/index.html");
}
async function loadSkills() {
  const el = document.getElementById("skills");
  el.innerHTML = await loadHtml("./skills/index.html");
}
async function loadProject() {
  const el = document.getElementById("project");
  el.innerHTML = await loadHtml("./project/index.html");
  loadScript("slide.js");
  loadScript("./project/index.js");
}
async function loadContact() {
  const el = document.getElementById("contact");
  el.innerHTML = await loadHtml("./contact/index.html");
}

(function loadTemplate() {
  loadHeader();
  loadTitleUser();
  loadAboutMe();
  loadSkills();
  loadProject();
  loadContact();
  loadScript("./utils/custom-mouse.js");
})();
