import {argv} from 'process';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {getUserName} from './controllers/cli/welcoming.js'
import{setPath} from './controllers/path/pathUp.js'
import {homedir} from 'node:os';
import {checkCpus, checkEOL, checkArch, checkHomeDir, checkUserName} from './controllers/os/checkOsTasks.js';
import {readDir} from './controllers/path/readDir.js';
import {calculateHash} from './controllers/hash/calchash.js';
import {createFile} from './controllers/fs/createFile.js';
import {readFile} from './controllers/fs/readFile.js';
import {deleteFile} from './controllers/fs/deleteFile.js';
import {reNameFile} from './controllers/fs/reNameFile.js';
import { copyFile } from './controllers/fs/copyFile.js';
import { moveFile } from './controllers/fs/moveFile.js';
import {helpFunc} from './controllers/cli/helpFunc.js'

let __dirname = homedir();
const rl = readline.createInterface({ input, output });
const arg = argv.slice(2);

const username = getUserName(arg);

console.log(`Welcome to the File Manager, ${username}!\n`);
console.log(`You are currently in ${__dirname}`);

rl.on('line', async (input)=>{
    if(input === '.exit'){
        rl.close()
    }else if(input === 'up' || (input.length>3 && input.startsWith('cd '))){
        __dirname = await setPath(__dirname, input)
        console.log(`You are currently in ${__dirname}`);

    }else if(input === 'ls'){
        await readDir(__dirname);
        console.log(`You are currently in ${__dirname}`);

    } else if(input.length>4 && input.startsWith('cat ')){
        readFile(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>4 && input.startsWith('add ')){
        createFile(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input.startsWith('rn ')){
        await reNameFile(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input.startsWith('cp ')){
        await copyFile(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input.startsWith('mv ')){
        await moveFile(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input.startsWith('rm ')){
        await deleteFile(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input === 'os --cpus'){
        checkCpus();
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input === 'os --EOL'){
        checkEOL();
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input === 'os --homedir'){
        checkHomeDir();
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input === 'os --username'){
        checkUserName();
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>3 && input === 'os --architecture'){
        checkArch();
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>5 && input.startsWith('hash ')){
        await calculateHash(__dirname, input);
        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>9 && input.startsWith('compress ')){

        console.log(`You are currently in ${__dirname}`);

    }else if(input.length>11 && input.startsWith('decompress ')){

        console.log(`You are currently in ${__dirname}`);

    }else if(input === 'help'){
        helpFunc()
        console.log(`You are currently in ${__dirname}`);
    }else{
        console.log('Invalid input\n');
    }
})

rl.on('close', ()=>{
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
})