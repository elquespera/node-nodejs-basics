// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import  *  as fs from 'node:fs/promises';

export const copy = async () => {
    const from = path.resolve(__dir,  'files/');
    const to = path.resolve(__dir, 'files_copy/');
    try {
        //Copy directory using cp with options
        //to throw error if dest folder exists
        await fs.cp(from, to, 
                    {force: false, errorOnExist: true, recursive: true});
    }
    catch(error) {
        if (error.code === 'ERR_FS_CP_EEXIST' || error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } 
        else
            throw error;
    }
};
