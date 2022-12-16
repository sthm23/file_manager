import { createReadStream } from "fs";
import { createHash } from 'crypto';
import { join } from 'path'

export async function calculateHash(dirname, str){
    const hashItem = str.slice(5);
    const sourceFile = join(dirname, hashItem);
    const readableStream = createReadStream(sourceFile);
    let body = '';

    readableStream.on('data', chunk=>body+=chunk.toString());

    readableStream.on('error', ()=>{
      console.log('Operation failed: you write incorrect file name to hash.');
    });

    readableStream.on('end', ()=>{
      const hash = createHash('sha256');
      const resaltHash = hash.update(body).digest('hex');
      console.log(resaltHash);
    });
}