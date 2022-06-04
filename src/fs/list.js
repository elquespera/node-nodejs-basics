import { readdir } from 'node:fs';
import  *  as fs from 'node:fs/promises';

export const list = async () => {
    const d_name = './files/'
    try {
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

list();