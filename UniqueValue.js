// let arr = [1,2,4,5,5,5,4,1,1,2]
// let uniqueValue = [];

// for(let i=0; i < arr.length; i++){
//     let isUnique = true;
//     for(let j=0; j < uniqueValue.length; j++){
//         if(arr[i] === uniqueValue[j]){
//              isUnique = false;
//             break;
//         }
//     }
//     if(isUnique) {
//         uniqueValue.push(arr[i])
//     }  
// }
// console.log(uniqueValue)

let arr = [22,44,22,44];
let Unique = [];

for(i=0; i < arr.length; i++){
    let isUnique = true;
    for(j=0; j <= Unique.length; j++){
        if(arr[i] === Unique[j]){
            isUnique = false
            break;
        }
    }
    if(isUnique){
        Unique.push(arr[i])
    }
}
console.log(Unique)