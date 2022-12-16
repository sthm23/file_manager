import {join} from 'path';
import { readdir } from 'node:fs/promises';


export async function setPath(dirname, path) {
    const way = path.slice(3);
    if(path === 'up') {
        return join(dirname, '..');
    }
    if(way === '.') {
        console.log('Invalid input');
        return dirname
    }
    try {
        const distPath = join(dirname, way);
        const files = await readdir(distPath, {withFileTypes: true});

        return distPath
    } catch (error) {
        console.log('Operation failed');
        return dirname
    }
}