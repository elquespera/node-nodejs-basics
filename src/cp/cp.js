// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import * as cp from 'child_process';

export const spawnChildProcess = async (args) => {    
    const child = cp.fork(`${path.resolve(__dir, 'files/script.js')}`, process.argv);    
};

//Testing
spawnChildProcess();