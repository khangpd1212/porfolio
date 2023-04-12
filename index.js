import { loadHtml } from './utils/common.js';

async function loadHeader() {
  const header = document.getElementById('header');
  header.innerHTML = await loadHtml('./header/index.html')
}
async function loadArticle() {
  const header = document.getElementById('article');
  header.innerHTML = await loadHtml('./article/index.html')
}

(function loadTemplate() {
  loadHeader()
  loadArticle()
})()
