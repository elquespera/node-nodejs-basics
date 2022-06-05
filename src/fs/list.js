// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import  *  as fs from 'node:fs/promises';

export const list = async () => {
    const d_name = path.resolve(__dir, 'files/');
    try {
        //Get dir content
        const dir = await fs.readdir(d_name);
        for (const file of dir)
            console.log(file);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } 
        else
            throw error;
    }
};