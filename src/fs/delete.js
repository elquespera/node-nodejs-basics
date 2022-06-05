// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import  *  as fs from 'node:fs/promises';

export const remove = async () => {
    const fname = path.resolve(__dir, 'files/fileToRemove.txt');
    try {
        await fs.unlink(fname);
    }
    catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } 
        else
            throw error;
    }
};