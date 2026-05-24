import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Allpak Packaging</title>
    <link rel="stylesheet" href="./client/assets/styles-D4v9o3qN.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./client/assets/index-DxmQ_flA.js"></script>
  </body>
</html>`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Wrote', indexPath);
