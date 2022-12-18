import {rename, stat} from 'node:fs/promises';
import { join } from 'node:path';

export async function moveFile(dirname, text) {
  const commandText = text.slice(3).split(' ');
  if(commandText.length !== 2) {
    console.log('Invalid input\n');
    return
  }
  const path_to_file = commandText[0];
  const new_filename = commandText[1];

  try {
    if(checkFile(path_to_file) === false) {
      console.log('Operation failed: written wrong file name!');
      return
    }
    const source = join(dirname, path_to_file);
    const dist_path = join(dirname, new_filename)
    await rename(source, dist_path);
    console.log('successfully renamed!\n');
    return

  } catch (error) {
    console.log('Operation failed: written wrong file name!');
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