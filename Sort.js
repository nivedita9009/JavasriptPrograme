let arr = [23,55,34,4,22]

for(i=0; i<arr.length; i++){
    console.log("first")
    for(j=0; j<arr.length-i; j++){
        console.log("second")
        if(arr[j]>arr[j+1]){
           let tem = arr[j] 
            arr[j] = arr[j+1];
            arr[j+1] = tem
        }
    }
}
console.log(arr)