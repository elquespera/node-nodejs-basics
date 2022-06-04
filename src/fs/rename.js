import  *  as fs from 'node:fs/promises';
import { constants } from 'node:fs';

export const rename = async () => {
    const from = 'files/wrongFilename.txt';
    const to = 'files/properFilename.md';
    const fexists = 'dest file already exists';
    try {
        await fs.access(to, constants.F_OK);
        throw new Error(fexists);
    }
    catch (error) {
        if (error.message === fexists) {
            throw new Error('FS operation failed');
        } else {
            try {
                await fs.rename(from, to);
            }
            catch(error) {
                if (error.code === 'ENOENT') {
                    throw new Error('FS operation failed');
                } 
                else
                    throw error;
            }
        }
    }
};