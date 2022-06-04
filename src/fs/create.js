import  *  as fs from 'node:fs/promises';

export const create = async () => {
    try {
        await fs.writeFile('files/fresh.txt', 'I am fresh and young', { flag: 'wx' });
    } 
    catch (error) {
        if (error.code === 'EEXIST') {
            throw Error('FS operation failed');
        } else
            throw error;
    }
};