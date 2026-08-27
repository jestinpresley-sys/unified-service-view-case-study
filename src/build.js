const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const SCREENSHOTS = path.join(ASSETS, 'screenshots');

const template = fs.readFileSync(path.join(__dirname, 'case-study-template.html'), 'utf8');

function b64(filePath) {
  return fs.readFileSync(filePath).toString('base64');
}

const images = {
  IMG_01: '01-customer-order.png',
  IMG_02: '02-inventory.png',
};

let out = template;

for (const [key, file] of Object.entries(images)) {
  const dataUri = `data:image/png;base64,${b64(path.join(SCREENSHOTS, file))}`;
  out = out.split(`__${key}__`).join(dataUri);
}

const outPath = path.join(ROOT, 'index.html');
fs.writeFileSync(outPath, out);
console.log('Wrote', outPath, (fs.statSync(outPath).size / 1024 / 1024).toFixed(2), 'MB');
