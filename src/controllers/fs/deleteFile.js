import {join} from 'path'
import {rm} from 'fs/promises'

export async function deleteFile(dirname, str) {
    const fileName = str.slice(3);
    const source = join(dirname, fileName);

    try {
        const result = await rm(source);
        console.log(`${fileName} successfully removed!`);
    } catch (error) {
        console.log('Operation failed: written wrong path_to_file');
    }
}