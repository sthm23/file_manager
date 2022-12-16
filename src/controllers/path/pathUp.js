import {join} from 'path'

export function setPath(dirname, path) {
    const way = path.slice(3);
    if(path === 'up') {
        return join(dirname, '..');
    }
    return join(dirname, way);
}