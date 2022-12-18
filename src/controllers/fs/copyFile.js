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
    if(checkFile(path_to_file) === false) {
      console.log('Operation failed: written wrong file name!');
      return
    }
    const source = join(dirname, path_to_file);
    const dist_path = join(dirname, path_to_new_directory);
    const fileNameToWrite = source.split(`\\`)

    const readable = createReadStream(source);
    const writable = createWriteStream(dist_path);

  } catch (error) {
    console.log('Operation failed: written wrong path to new directory!');
    return
  }
}

async function checkFile(path) {
  try {
    const file = await stat(path);
    return file.isFile()
  } catch (error) {
    return false
  }
}