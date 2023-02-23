import {join} from 'path'
import {createWriteStream} from 'fs'

export function createFile(dirname, str) {
    const fileName = str.slice(4);
    try {
        const currentFileName = fileName.split('\/');
        console.log(currentFileName);
        const fileNameWithFormat = currentFileName[currentFileName.length - 1]
        const source = join(dirname, fileNameWithFormat);
        const writable = createWriteStream(source);
        console.log(`${fileName} has created!`);
        
        return
    } catch (error) {
        console.log('Operation failed: written wrong command!');
        
        return
    }
}