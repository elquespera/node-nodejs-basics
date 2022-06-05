// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import * as stream from "node:stream/promises";
import * as fs from 'node:fs/promises';
import { createGunzip } from 'node:zlib'


export const decompress = async () => {
    const from = path.resolve(__dir, 'files/archive.gz');
    const to = path.resolve(__dir, 'files/fileToCompress.txt');    
    try {           
        const sourceHandle = await fs.open(from, 'r');
        const destHandle = await fs.open(to, 'w');
        await stream.pipeline(
            sourceHandle.createReadStream(from),
            createGunzip(),
            destHandle.createWriteStream(to)
        );
    }
    catch(error) {
        throw error;
    }    
};


//For testing
decompress();