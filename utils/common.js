export async function loadHtml(fileLocation) {
  const resp = await fetch(fileLocation);
  const html = await resp.text();
  return html
}