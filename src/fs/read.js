import  *  as fs from 'node:fs/promises';

export const read = async () => {
    const f_name = './files/fileToRead.txt';  
    try {
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