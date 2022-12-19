import {stat} from 'node:fs/promises';
import {createReadStream, createWriteStream} from 'node:fs';
import { join } from 'node:path';
import {pipeline} from 'stream';
import {createBrotliDecompress} from 'zlib';

export async function decompressFile(dirname, text) {
    const commandText = text.slice(9).split(' ');
  if(commandText.length !== 2) {
    console.log('Invalid input\n');
    return
  }
  const path_to_file = commandText[0];
  const path_to_new_directory = commandText[1];

  try {

    const source = join(dirname, path_to_file);
    const sourceDirectoryArr = source.split(`\\`);
    const oldFileName = sourceDirectoryArr[sourceDirectoryArr.length-1];
    if(await checkFile(source, 'file') === false) {
      console.log('Operation failed: written wrong file name!');
      return
    }
    const dist_path = join(dirname, path_to_new_directory, oldFileName);
    if(await checkFile(join(dirname, path_to_new_directory), 'directory') === false) {
      console.log('Operation failed: written wrong directory name!');
      return
    }
    
    const readable = createReadStream(source);
    const brotliDeCompress = createBrotliDecompress();
    const writable = createWriteStream(dist_path);
    
    pipeline(readable, brotliDeCompress, writable, (err)=>{
        if(err) {
            console.log('Operation failed: error operation in read Stream!');
        } else {
            console.log('Decompress done!');
        }
    })

  } catch (error) {
    console.log('Operation failed: written wrong path to new directory!');
    return
  }
}

async function checkFile(path, type) {
  try {
    const file = await stat(path);
    return type === 'file' ? file.isFile() : file.isDirectory()
  } catch (error) {
    return false
  }
}