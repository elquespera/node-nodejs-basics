// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import * as fs from 'node:fs/promises';
import * as stream from "node:stream/promises";
const { createHash } = await import('crypto');

export const calculateHash = async () => {
    const from = path.resolve(__dir, 'files/fileToCalculateHashFor.txt'); 
    try {           
        // // Open file handle for reading
        // const handle = await fs.open(from, 'r');
        // // Create readable stream
        // const readable = handle.createReadStream({encoding: "utf8"});
        // Create hash transform stream
        const hash = createHash('sha256', { });

        const data = await fs.readFile(from, { encoding: 'utf8' });

        //console.log(typeof data);

        hash.update(data);

        return hash.digest('hex');
        
        // Pipe it to hash, change encoding to hex
        // and pipe it to stdout
        // await stream.pipeline (
        //     readable,
        //     hash.setEncoding('hex'),
        // );        
    }
    catch(error) {
        throw error;
    } 
};

//For testing
console.log(await calculateHash());