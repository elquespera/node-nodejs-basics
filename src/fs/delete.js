import  *  as fs from 'node:fs/promises';

export const remove = async () => {
    try {
        await fs.unlink('files/fileToRemove.txt');
    }
    catch(error) {
        if (error.code === 'ENOENT') {
            throw Error('FS operation failed');
        } 
        else
            throw error;
    }
};

remove();