import { addBoxShadowHeader, addClass, visibleNavbar } from "./utils/common";

export async function loadHeader() {
  const btnCV = document.querySelectorAll('.cv');
  btnCV.forEach((value) => (
    value.href = 'https://drive.google.com/file/d/1I69XT37gkcmnIZEUkPzgTLCfIz7ei3Wq/view?usp=sharing"'
  ))
  const el = document.getElementById("header");
  visibleNavbar();
  addBoxShadowHeader(el);
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