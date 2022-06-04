// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import * as fs from 'node:fs/promises';

export const write = async () => {
    const to = 'files/fileToWrite.txt'; 
    try {   
        // Open file handle for writing
        const handle = await fs.open(path.resolve(__dir, to), 'w');
        // Create writable fs Stream
        const writable = handle.createWriteStream({encoding: "utf8"});
        // Read lines stdin and write it to file stream
        for await (const chunk of process.stdin) {
            writable.write(chunk);
        }
    }
    catch(error) {
        throw error;
    } 
};

// For testing purposes
write();