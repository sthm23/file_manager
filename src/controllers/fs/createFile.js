import {join} from 'path'
import {createWriteStream} from 'fs'

export function createFile(dirname, str) {
    const fileName = str.slice(4);
    try {
        const source = join(dirname, fileName);
        const writable = createWriteStream(source);
        console.log(`${fileName} has created!`);
        
        return
    } catch (error) {
        console.log('Operation failed: written wrong command!');
        
        return
    }
}