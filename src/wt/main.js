// Get current dir
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
const __dir = path.dirname(fileURLToPath(import.meta.url));

import {Worker} from 'node:worker_threads'; 
import * as os from "node:os";

export const performCalculations = async () => {
    // Create new worker
    const newRun = (workerData) => {
        return new Promise((resolve, reject) => {
           const worker = new Worker(path.resolve(__dir, 'worker.js'), { workerData });
           worker.on('message', value => resolve({status: 'resolved', data: value}));
           worker.on('error', _ => reject({status: 'error', data: null}));        
       });
   }
   // fill array with promises up to cpu count
   const promiseArr = [];
    for (let i = 0; i < os.cpus().length; i++ ) {
        promiseArr.push(newRun(10 + i));
    }
    // Return data when all workers are done
    return await Promise.all(promiseArr);
};

// Test
console.log(await performCalculations());