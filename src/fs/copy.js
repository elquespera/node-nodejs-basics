import  *  as fs from 'node:fs/promises';

export const copy = async () => {
    const from = './files/'
    const to = './files_copy/';
    try {
        await fs.cp(from, to, { force: false, errorOnExist: true, recursive: true});
    }
    catch(error) {
        if (error.code === 'ERR_FS_CP_EEXIST' || error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } 
        else
            throw error;
    }
};

copy();