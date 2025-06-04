const sum = (n)=>{
    if(n<1) return 0;
    return n+sum(--n);
}
console.log(sum(5));
// find sum of all the elements in an array

let arr = [1,3,5,4,5,7,8,98,34];
let n = arr.length-1;

function sumArray(arr,n){
    if(n==0)return arr[0];
    return arr[n]+ sumArray(arr,n-1);
}


console.log(sumArray(arr,n));


function sumArrayOdd(arr,n){
    isOdd = arr[n]%2 !==0 ;
   if(n==0) {
    if(isOdd) return arr[0];
    else return 0;
   }
   return isOdd? arr[n]+sumArrayOdd(arr,n-1):sumArrayOdd(arr,n-1);

}

console.log(sumArrayOdd(arr,n));
