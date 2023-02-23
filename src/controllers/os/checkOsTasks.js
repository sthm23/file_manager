import {cpus, EOL, userInfo, arch, homedir} from 'os';

export function checkCpus(){
  const operationSystem = cpus();
  const arr = operationSystem.map(item=>{
    return {
        model: item.model,
        speed: (item.speed/1000).toFixed(2) + 'GHz',
    };
  });
  console.log(arr);
}

export function checkEOL(){
    const checkEOL = JSON.stringify(EOL);
    console.log(`Default system End-Of-Line: ${checkEOL}`);
}

export function checkUserName() {
    const user_name = userInfo().username;
    console.log(user_name);
}

export function checkArch() {
    const data = arch();
    console.log(data);
}

export function checkHomeDir() {
    const dir = homedir()
    console.log(dir);
}