import {argv} from 'process';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const arg = argv.slice(2);
const username = arg.reduce((acc, item)=>{
    if(item.startsWith('--')){
        return acc += item.slice(2)
    }
}, '').split('=')[1];

console.log('hello', username);

rl.on('line', (input)=>{
    if (input.trim() === '.exit'){
        rl.close();
    }
})

rl.on('SIGINT', async () => {
    const ans = await rl.question('Are you sure you want to exit? ')
    if(ans.match(/^y(es)?$/i)){
        rl.close()
    }
});

rl.on('close', ()=>{
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
})