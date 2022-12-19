import {stat} from 'node:fs/promises';
import {createReadStream, createWriteStream} from 'node:fs';
import { join } from 'node:path';

export async function copyFile(dirname, text) {
  const commandText = text.slice(3).split(' ');
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
    let body = '';
    const readable = createReadStream(source);
    const writable = createWriteStream(dist_path);

    readable.on('data', (chunk)=>{
      body+=chunk.toString()
    })
    readable.on('error', ()=>{
      console.log('Operation failed: error operation in read Stream!');
    })

    readable.on('end', ()=>{
      writable.write(body);
      console.log('successfully copied!');
      
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