// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import  *  as fs from 'node:fs/promises';
import { constants } from 'node:fs';

export const rename = async () => {
    const from = path.resolve(__dir, 'files/wrongFilename.txt');
    const to = path.resolve(__dir, 'files/properFilename.md');
    const fexists = 'dest file already exists';
    try {
        //Try to access the destination file
        //and throw error if it already exists
        await fs.access(to, constants.F_OK);
        throw new Error(fexists);
    }
    catch (error) {
        //Check if error was thrown because
        //dest file already exists
        if (error.message === fexists) {
            throw new Error('FS operation failed');
        } else {
            //If not, try to rename the source file
            try {
                await fs.rename(from, to);
            }
            catch(error) {
                //Check if source file doesn't exist
                if (error.code === 'ENOENT') {
                    throw new Error('FS operation failed');
                } 
                else
                    throw error;
            }
        }
    }
};