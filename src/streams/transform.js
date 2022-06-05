import * as stream from "node:stream/promises";
import { Transform } from "node:stream";

export const transform = async () => { 
    //Create new transform stream
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            //Convert data to string and remove trailing EOL character
            chunk = chunk.toString().trim();
            //Reverse the line and add back EOL
            chunk = chunk.split('').reverse().join('') + '\n';
            //Feed it back
            callback(null, chunk);
        }
    });
    try {           
        // Create pipeline that reads stdin, 
        // transforms it and writes to stdout
        await stream.pipeline(
            process.stdin,
            transformStream,
            process.stdout
        );
    }
    catch(error) {
        throw error;
    } 
};

// For testing purposes
transform();