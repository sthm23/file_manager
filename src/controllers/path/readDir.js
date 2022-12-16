import { readdir } from 'node:fs/promises';

export async function readDir(path) {
    try {
        const files = await readdir(path, {withFileTypes: true});
        // console.log(files);
        return files.map(item=> [item.name, !item.isFile() ? 'directory' : 'file']).sort(compare);
      } catch (err) {
        //   console.error(err);
          return []
      }
}

function compare(a, b) {
    if(a[1] === 'directory' && b[1] === 'file') {
        return -1
    } else {
        return 1
    }
}