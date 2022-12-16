import { readdir } from 'node:fs/promises';

export async function readDir(path) {
    try {
        const files = await readdir(path, {withFileTypes: true});
        // console.log(files);
        return files.map(item=> {
            return {
                name: item.name, 
                type: !item.isFile() ? 'directory' : 'file'
            }
        })
          .sort(compare)
            .sort((a, b)=> a.name-b.name);
      } catch (err) {
        //   console.error(err);
          return []
      }
}

function compare(a, b) {
    if(a.type === 'directory' && b.type === 'file') {
        return -1
    } else {
        return 1
    }
}