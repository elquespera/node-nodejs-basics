// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import  *  as fs from 'node:fs/promises';

export const create = async () => {
    const to = path.resolve(__dir, 'files/fresh.txt');
    try {
        //Write file with 'wx' flag 
        //to check if file already exists
        await fs.writeFile(to, 
                           'I am fresh and young', 
                           { flag: 'wx' });
    } 
    catch(error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } 
        else
            throw error;
    }
};