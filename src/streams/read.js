// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import * as fs from 'node:fs/promises';

export const read = async () => {
    const from = 'files/fileToRead.txt'; 
    try {   
        // Create file handle
        const handle = await fs.open(path.resolve(__dir, from));
        // Create Readable Stream
        const readable = handle.createReadStream({encoding: "utf8"});
        // Read Data from the stream
        for await (const chunk of readable) {
            process.stdout.write(chunk);
        }
        // Send new line character to stdout at the end        
        process.stdout.write('\n');
    }
    catch(error) {
        throw error;
    }
};

// For testing purposes
read();