import "../css/index.css";
import { loadHeader } from "./header.js";
import renderListProject from "./project";
import customMouse from "./utils/custom-mouse.js";

(function loadTemplate() {
  loadHeader();
  renderListProject()
  customMouse()
})();
