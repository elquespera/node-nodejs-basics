// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import * as fs from 'node:fs/promises';
const { createHash } = await import('crypto');

export const calculateHash = async () => {
    const from = path.resolve(__dir, 'files/fileToCalculateHashFor.txt'); 
    try {                   
        // Create hash transform stream
        const hash = createHash('sha256');
        // Read data from file
        const data = await fs.readFile(from, { encoding: 'utf8' });
        // Feed data to hash stream
        hash.update(data);
        // Return calculated hash as hex
        return hash.digest('hex');
    }
    catch(error) {
        throw error;
    } 
};

//For testing
console.log(await calculateHash());