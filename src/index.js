import {argv} from 'process';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {getUserName} from './controllers/cli/welcoming.js'
import{setPath} from './controllers/path/pathUp.js'
import {homedir} from 'node:os';
import {readDir} from './controllers/path/readDir.js';
let __dirname = homedir();



const rl = readline.createInterface({ input, output });
const arg = argv.slice(2);

const username = getUserName(arg);

console.log(`Welcome to the File Manager, ${username}!\n`);
console.log(`You are currently in ${__dirname}`);

rl.on('line', async (input)=>{
    if(input === '.exit'){
        rl.close()
    }else if(input === 'up' || input.startsWith('cd ')){
        __dirname = setPath(__dirname, input)

    }else if(input === 'ls'){
        const files = await readDir(__dirname);
        console.table(files);
    } else if(input.startsWith('cat ')){
    
    }else if(input.startsWith('add ')){
    
    }else if(input.startsWith('rn ')){
    
    }else if(input.startsWith('cp ')){
    
    }else if(input.startsWith('mv ')){
    
    }else if(input.startsWith('rm ')){
    
    }else if(input.startsWith('os --cpus')){
    
    }else if(input.startsWith('os --EOL')){
    
    }else if(input.startsWith('os --homedir')){
    
    }else if(input.startsWith('os --username')){
    
    }else if(input.startsWith('os --architecture')){
    
    }else if(input.startsWith('hash ')){
    
    }else if(input.startsWith('compress ')){
    
    }else if(input.startsWith('decompress ')){
    
    }else if(input.startsWith('help')){
    
    }else{
        console.log('Invalid input');
    }

    console.log(`You are currently in ${__dirname}`);
})

rl.on('close', ()=>{
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
})