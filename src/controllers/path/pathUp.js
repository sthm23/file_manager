import {join} from 'path';
import { readdir } from 'node:fs/promises';


export async function setPath(dirname, path) {
    const way = path.slice(3);
    if(path === 'up') {
        return join(dirname, '..');
    }
    if(way === '.') {
        console.log('Invalid input\n');
        return dirname
    }

    try {
        if(way[1] === ':') {
            const newWay = join(way, '/')
            await readdir(newWay, {withFileTypes: true});
            return newWay
        }
        const distPath = join(dirname, way);
        await readdir(distPath, {withFileTypes: true});

        return distPath
    } catch (error) {
        console.log('Operation failed: Written wrong Directory\n');
        return dirname
    }
}