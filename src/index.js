import {argv} from 'process';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {getUserName} from './controllers/cli/welcoming.js'
import{setPath} from './controllers/path/pathUp.js'
import {homedir} from 'node:os';
import {checkCpus, checkEOL, checkArch, checkHomeDir, checkUserName} from './controllers/os/checkOsTasks.js';
import {readDir} from './controllers/path/readDir.js';
import {calculateHash} from './controllers/hash/calchash.js';


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

    }else if(input === 'ls'){
        await readDir(__dirname);
    } else if(input.length>4 && input.startsWith('cat ')){
    
    }else if(input.length>4 && input.startsWith('add ')){
    
    }else if(input.length>3 && input.startsWith('rn ')){
    
    }else if(input.length>3 && input.startsWith('cp ')){
    
    }else if(input.length>3 && input.startsWith('mv ')){
    
    }else if(input.length>3 && input.startsWith('rm ')){
    
    }else if(input.length>3 && input === 'os --cpus'){
        checkCpus();
    }else if(input.length>3 && input === 'os --EOL'){
        checkEOL();
    }else if(input.length>3 && input === 'os --homedir'){
        checkHomeDir();
    }else if(input.length>3 && input === 'os --username'){
        checkUserName();
    }else if(input.length>3 && input === 'os --architecture'){
        checkArch();
    }else if(input.length>5 && input.startsWith('hash ')){
        await calculateHash(__dirname, input);
    }else if(input.length>9 && input.startsWith('compress ')){
    
    }else if(input.length>11 && input.startsWith('decompress ')){
    
    }else if(input === 'help'){
    
    }else{
        console.log('Invalid input\n');
    }

    console.log(`You are currently in ${__dirname}`);
})

rl.on('close', ()=>{
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
})