const fs = require('fs');
const path = require('path');

const base = 'C:\\Users\\USER\\Desktop\\Antigravity_Workspace\\ielts-offline-prep';
const workspace = 'C:\\Users\\USER\\Desktop\\Antigravity_Workspace';

let html = fs.readFileSync(path.join(base, 'public', 'index.html'), 'utf-8');
const css = fs.readFileSync(path.join(base, 'public', 'css', 'app.css'), 'utf-8');
const js = fs.readFileSync(path.join(base, 'public', 'bundle.js'), 'utf-8');

// 1. Inline/Update CSS
if (html.includes('<link rel="stylesheet" href="css/app.css">')) {
  html = html.replace('<link rel="stylesheet" href="css/app.css">', `<style>\n${css}\n</style>`);
} else {
  const styleStart = html.indexOf('<style>');
  const styleEnd = html.indexOf('</style>');
  if (styleStart !== -1 && styleEnd !== -1) {
    html = html.slice(0, styleStart) + `<style>\n${css}\n</style>` + html.slice(styleEnd + '</style>'.length);
  }
}

// 2. Inline/Update JS Bundle
if (html.includes('<script type="module" src="js/app.js"></script>')) {
  html = html.replace('<script type="module" src="js/app.js"></script>', `<script>\n${js}\n</script>`);
} else {
  const scriptStart = html.indexOf('<script>');
  const scriptEnd = html.indexOf('</script>');
  if (scriptStart !== -1 && scriptEnd !== -1) {
    html = html.slice(0, scriptStart) + `<script>\n${js}\n</script>` + html.slice(scriptEnd + '</script>'.length);
  }
}

const flatDir = path.join(workspace, 'IELTS_Offline_Flat_Package');
if (!fs.existsSync(flatDir)) {
  fs.mkdirSync(flatDir, { recursive: true });
}
fs.writeFileSync(path.join(flatDir, 'index.html'), html, 'utf-8');
fs.writeFileSync(path.join(base, 'public', 'index.html'), html, 'utf-8');

console.log('Flat package & public/index.html updated successfully:', html.length, 'bytes');
