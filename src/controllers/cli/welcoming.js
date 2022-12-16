export function getUserName(arr) {
    if(arr.length===0){
        return undefined
    }
    let userName = arr.join('').split('=')[1];
    userName = userName[0].toUpperCase() + userName.slice(1);
    return userName
}