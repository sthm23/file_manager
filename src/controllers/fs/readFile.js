import {join} from 'path'
import {createReadStream} from 'fs'

export function readFile(dirname, str) {
    const fileName = str.slice(4);
    const source = join(dirname, fileName);
    const readable = createReadStream(source);
    let body = ''
    readable.on('data', (chunk)=>{
        body += chunk.toString();
    });
    readable.on('error', ()=> {
        console.log('Operation failed: written wrong path_to_file');
    });
    readable.on('end', ()=>{
        console.log(body);
    })
}