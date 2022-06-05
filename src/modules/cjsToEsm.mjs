// Get current dir
import { fileURLToPath } from 'node:url';

import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { release, version } from 'node:os';
import { createServer as createServerHttp}  from 'http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const random = Math.random();

let unknownObjectPath;
if (random > 0.5) {
    unknownObjectPath = './files/a.json';
} else {
    unknownObjectPath = './files/b.json';
}
const unknownObject = JSON.parse(await readFile(path.resolve(__dirname, unknownObjectPath)));


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer }

