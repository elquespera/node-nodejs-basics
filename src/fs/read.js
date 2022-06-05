// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import  *  as fs from 'node:fs/promises';

export const read = async () => {
    const f_name = path.resolve(__dir, 'files/fileToRead.txt');  
    try {
        //Read the file and print its contents to console
        console.log(await fs.readFile(f_name, { encoding: 'utf8' }));
    }
    catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } 
        else
            throw error;
    }
};